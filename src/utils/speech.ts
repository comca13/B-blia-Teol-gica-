/**
 * Robust, Humanized Text-to-Speech (TTS) engine for Bible narration.
 * Tailored specifically for deep, reverent, and humanized narration:
 * - Smart Voice Ranking prioritizing Natural/Neural/Online and baritone voices (pt-BR)
 * - Deep tone pitch tuning (default 0.78 for a solemn, grave baritone resonance)
 * - Relaxed, reverent cadence (~0.92 rate) with natural breathing pauses (220ms)
 * - Utterance garbage collection protection
 * - Mobile Chrome 15s keepAlive heartbeat
 * - Cleansed narrative stream (no robotic repeated "Versículo X" stutters)
 */

export interface SpeechPlaybackStatus {
  isPlaying: boolean;
  isPaused: boolean;
  currentSegmentIndex: number;
  totalSegments: number;
  currentTextSnippet: string;
  currentVoiceName: string;
  pitch: number;
  speed: number;
}

export interface AvailableVoiceOption {
  name: string;
  lang: string;
  isNatural: boolean;
  isMaleOrDeep: boolean;
  rawVoice: SpeechSynthesisVoice;
}

type StatusCallback = (status: SpeechPlaybackStatus) => void;

class BibleSpeechEngine {
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private segments: string[] = [];
  private currentSegmentIndex: number = 0;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private speed: number = 1.0;
  private pitch: number = 0.78; // Deep, grave baritone default
  private selectedVoiceName: string | null = null;
  private lang: string = 'pt-BR';
  private listeners: Set<StatusCallback> = new Set();
  private keepAliveTimer: any = null;
  private isCancelledByUser: boolean = false;
  private voicesLoaded: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.voicesLoaded = true;
          this.notify();
        };
      }
    }
  }

  private initVoices() {
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        this.voicesLoaded = true;
      }
    } catch {
      // Ignore if not permitted
    }
  }

  public subscribe(cb: StatusCallback): () => void {
    this.listeners.add(cb);
    cb(this.getStatus());
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    const status = this.getStatus();
    this.listeners.forEach(cb => {
      try {
        cb(status);
      } catch (err) {
        console.error('TTS status callback error:', err);
      }
    });
  }

  public getStatus(): SpeechPlaybackStatus {
    const chosenVoice = this.resolveVoice(this.lang.startsWith('pt') ? 'pt' : 'en');
    return {
      isPlaying: this.isSpeaking,
      isPaused: this.isPaused,
      currentSegmentIndex: this.currentSegmentIndex,
      totalSegments: this.segments.length,
      currentTextSnippet: this.segments[this.currentSegmentIndex] || '',
      currentVoiceName: chosenVoice ? chosenVoice.name : 'Voz Padrão do Sistema',
      pitch: this.pitch,
      speed: this.speed,
    };
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  /**
   * Returns sorted list of voices for language with natural/male indicators
   */
  public getAvailableVoices(langPrefix: string = 'pt'): AvailableVoiceOption[] {
    if (!this.isSupported()) return [];
    try {
      const voices = window.speechSynthesis.getVoices();
      const prefix = langPrefix.toLowerCase();
      
      const filtered = voices.filter(v => v.lang.toLowerCase().startsWith(prefix));
      const targetList = filtered.length > 0 ? filtered : voices;

      return targetList
        .map(v => {
          const lowerName = v.name.toLowerCase();
          const isNatural = lowerName.includes('natural') || lowerName.includes('neural') || lowerName.includes('online') || lowerName.includes('google') || lowerName.includes('premium') || lowerName.includes('enhanced');
          const isMaleOrDeep = ['antonio', 'fabio', 'fábio', 'daniel', 'felipe', 'jorge', 'ricardo', 'lucas', 'male', 'homem', 'masculin', 'afs', 'jab'].some(k => lowerName.includes(k));
          return {
            name: v.name,
            lang: v.lang,
            isNatural,
            isMaleOrDeep,
            rawVoice: v,
          };
        })
        .sort((a, b) => {
          // Sort: Male/Deep + Natural first
          const scoreA = (a.isMaleOrDeep ? 40 : 0) + (a.isNatural ? 30 : 0);
          const scoreB = (b.isMaleOrDeep ? 40 : 0) + (b.isNatural ? 30 : 0);
          return scoreB - scoreA;
        });
    } catch {
      return [];
    }
  }

  /**
   * Score voices to automatically select the most humanized, deep male voice available
   */
  private scoreVoice(v: SpeechSynthesisVoice, langPrefix: string): number {
    let score = 0;
    const name = v.name.toLowerCase();
    const lang = v.lang.toLowerCase();

    // Must match language prefix (e.g. 'pt')
    if (!lang.startsWith(langPrefix.toLowerCase())) return -100;

    // Exact dialect match (prefer pt-BR over pt-PT for Brazilian Portuguese readings)
    if (lang === 'pt-br') score += 50;

    // High Quality Neural / Online / Natural
    if (name.includes('natural') || name.includes('online')) score += 60;
    if (name.includes('neural') || name.includes('wavenet') || name.includes('enhanced') || name.includes('premium')) score += 50;
    if (name.includes('google')) score += 40; // Google's web speech voices in Chrome are substantially less robotic than fallback

    // Severe penalty for notoriously robotic / synthetic engines
    if (name.includes('espeak') || name.includes('compact') || name.includes('desktop') || name.includes('robotic')) score -= 80;

    // Distinct masculine/grave names and markers (delivering the requested deep tone)
    const deepKeywords = ['antonio', 'fábio', 'fabio', 'daniel', 'felipe', 'jorge', 'ricardo', 'lucas', 'male', 'homem', 'masculin', 'afs', 'jab'];
    if (deepKeywords.some(k => name.includes(k))) {
      score += 70;
    }

    return score;
  }

  private resolveVoice(langPrefix: string): SpeechSynthesisVoice | null {
    try {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return null;

      // 1. User explicitly selected voice
      if (this.selectedVoiceName) {
        const found = voices.find(v => v.name === this.selectedVoiceName);
        if (found) return found;
      }

      // 2. Score and pick best humanized grave/male voice
      let bestVoice: SpeechSynthesisVoice | null = null;
      let highestScore = -999;

      for (const v of voices) {
        const sc = this.scoreVoice(v, langPrefix);
        if (sc > highestScore) {
          highestScore = sc;
          bestVoice = v;
        }
      }

      if (bestVoice && highestScore > -50) {
        return bestVoice;
      }

      // 3. Fallback: first voice matching language
      const prefixMatch = voices.find(v => v.lang.toLowerCase().startsWith(langPrefix.toLowerCase()));
      if (prefixMatch) return prefixMatch;

      return voices[0] || null;
    } catch {
      return null;
    }
  }

  /**
   * Cleans text and splits into natural human breathing segments (~120-160 chars)
   * along punctuation boundaries (. , ; : ! ?)
   */
  private splitIntoChunks(text: string): string[] {
    if (!text) return [];

    // Strip HTML tags, bracketed numbers like [1] or (1), and mechanical formatting
    const clean = text
      .replace(/<[^>]*>/g, '')
      .replace(/\[\d+\]/g, '') // remove bracketed references like [12]
      .replace(/\s+/g, ' ')
      .trim();

    if (!clean) return [];

    // Split on sentence and major clause boundaries
    const rawSentences = clean.split(/(?<=[.!?;:])\s+/);
    const chunks: string[] = [];

    for (const s of rawSentences) {
      const trimmed = s.trim();
      if (!trimmed) continue;

      if (trimmed.length <= 150) {
        chunks.push(trimmed);
      } else {
        // Break long compound sentences along commas or dash
        const commaParts = trimmed.split(/(?<=[,])\s+/);
        let cur = '';
        for (const part of commaParts) {
          if ((cur + ' ' + part).length > 150) {
            if (cur) chunks.push(cur.trim());
            cur = part;
          } else {
            cur = cur ? `${cur} ${part}` : part;
          }
        }
        if (cur) chunks.push(cur.trim());
      }
    }

    return chunks.filter(c => c.length > 0);
  }

  private startKeepAlive() {
    this.stopKeepAlive();
    this.keepAliveTimer = setInterval(() => {
      if (typeof window !== 'undefined' && window.speechSynthesis && this.isSpeaking && !this.isPaused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 12000);
  }

  private stopKeepAlive() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }

  public speak(
    text: string, 
    options: { 
      lang?: 'pt-BR' | 'en-US'; 
      speed?: number; 
      pitch?: number; 
      voiceName?: string 
    } = {}
  ) {
    if (!this.isSupported()) return;

    this.stop();
    this.isCancelledByUser = false;

    this.lang = options.lang || 'pt-BR';
    this.speed = options.speed ?? this.speed;
    if (options.pitch !== undefined) {
      this.pitch = options.pitch;
    }
    if (options.voiceName) {
      this.selectedVoiceName = options.voiceName;
    }

    this.segments = this.splitIntoChunks(text);
    if (this.segments.length === 0) {
      this.isSpeaking = false;
      this.isPaused = false;
      this.notify();
      return;
    }

    this.currentSegmentIndex = 0;
    this.isSpeaking = true;
    this.isPaused = false;
    this.notify();

    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
    } catch {
      // Ignore
    }

    this.startKeepAlive();
    this.playNextSegment();
  }

  private playNextSegment() {
    if (!this.isSpeaking || this.isCancelledByUser) {
      return;
    }

    if (this.currentSegmentIndex >= this.segments.length) {
      this.stop();
      return;
    }

    const currentText = this.segments[this.currentSegmentIndex];
    const utterance = new SpeechSynthesisUtterance(currentText);
    this.activeUtterance = utterance;

    utterance.lang = this.lang;
    
    // Humanized pacing: slightly relaxed reverent cadence (0.92x baseline) avoids rushed robotic delivery
    const adjustedRate = Math.max(0.6, Math.min(1.8, this.speed * 0.92));
    utterance.rate = adjustedRate;

    // Deep, grave tone pitch (default 0.78 creates warm baritone solemnity)
    utterance.pitch = Math.max(0.5, Math.min(1.5, this.pitch));

    const langPrefix = this.lang.startsWith('pt') ? 'pt' : 'en';
    const voice = this.resolveVoice(langPrefix);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.notify();
    };

    utterance.onend = () => {
      this.activeUtterance = null;
      if (this.isSpeaking && !this.isCancelledByUser) {
        this.currentSegmentIndex++;
        // Natural human breathing pause between phrases (~220ms)
        setTimeout(() => {
          this.playNextSegment();
        }, 220);
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error on segment:', e);
      this.activeUtterance = null;
      if (this.isCancelledByUser) return;

      if (this.currentSegmentIndex < this.segments.length - 1) {
        this.currentSegmentIndex++;
        setTimeout(() => this.playNextSegment(), 120);
      } else {
        this.stop();
      }
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Failed to invoke window.speechSynthesis.speak:', err);
      this.stop();
    }
  }

  public pause() {
    if (!this.isSupported() || !this.isSpeaking) return;
    try {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.stopKeepAlive();
      this.notify();
    } catch (e) {
      console.warn('Pause error:', e);
    }
  }

  public resume() {
    if (!this.isSupported() || !this.isSpeaking) return;
    try {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.startKeepAlive();
      this.notify();
    } catch (e) {
      console.warn('Resume error:', e);
    }
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    if (this.isSpeaking && !this.isPaused) {
      const currentIndex = this.currentSegmentIndex;
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
      this.currentSegmentIndex = currentIndex;
      this.playNextSegment();
    } else {
      this.notify();
    }
  }

  public setPitch(pitch: number) {
    this.pitch = pitch;
    if (this.isSpeaking && !this.isPaused) {
      const currentIndex = this.currentSegmentIndex;
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
      this.currentSegmentIndex = currentIndex;
      this.playNextSegment();
    } else {
      this.notify();
    }
  }

  public setVoice(voiceName: string) {
    this.selectedVoiceName = voiceName;
    if (this.isSpeaking && !this.isPaused) {
      const currentIndex = this.currentSegmentIndex;
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
      this.currentSegmentIndex = currentIndex;
      this.playNextSegment();
    } else {
      this.notify();
    }
  }

  public stop() {
    this.isCancelledByUser = true;
    this.isSpeaking = false;
    this.isPaused = false;
    this.stopKeepAlive();
    this.activeUtterance = null;
    this.currentSegmentIndex = 0;
    this.segments = [];

    if (this.isSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
    }
    this.notify();
  }
}

export const speechEngine = new BibleSpeechEngine();
