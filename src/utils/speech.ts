export type VoiceTone = 'grave' | 'baritono';

export interface SpeechSettings {
  tone?: VoiceTone;
  rate?: number;
  speed?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

export interface AudioPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentChunkIndex: number;
  totalChunks: number;
  currentText: string;
  // Campos de compatibilidade para componentes leitores
  currentSegmentIndex?: number;
  totalSegments?: number;
  currentTextSnippet?: string;
  currentVoiceName?: string;
  pitch?: number;
  speed?: number;
}

// Interfaces de compatibilidade legada
export type SpeechPlaybackStatus = AudioPlaybackState & {
  currentSegmentIndex: number;
  totalSegments: number;
  currentTextSnippet: string;
  currentVoiceName: string;
  pitch: number;
  speed: number;
};

export interface AvailableVoiceOption {
  name: string;
  lang: string;
  isNatural: boolean;
  isMaleOrDeep: boolean;
  rawVoice: SpeechSynthesisVoice;
}

export type StateListener = (state: AudioPlaybackState & SpeechPlaybackStatus) => void;

class TheologicalSpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private chunks: string[] = [];
  private currentChunkIndex: number = 0;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private keepAliveTimer: number | null = null;
  private wakeLock: any = null;
  private stateListeners: Set<StateListener> = new Set();
  private voicesLoadedPromise: Promise<SpeechSynthesisVoice[]> | null = null;

  // Configurações ativas
  private activeTone: VoiceTone = 'baritono';
  private activeRateModifier: number = 1.0;
  private activeVolume: number = 1.0;
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
    }
  }

  private initVoices(): Promise<SpeechSynthesisVoice[]> {
    if (this.voicesLoadedPromise) return this.voicesLoadedPromise;

    this.voicesLoadedPromise = new Promise((resolve) => {
      if (!this.synth) {
        resolve([]);
        return;
      }

      const available = this.synth.getVoices();
      if (available.length > 0) {
        this.voices = available;
        resolve(available);
        return;
      }

      const onVoicesChanged = () => {
        if (!this.synth) return;
        this.voices = this.synth.getVoices();
        this.synth.onvoiceschanged = null;
        resolve(this.voices);
      };

      this.synth.onvoiceschanged = onVoicesChanged;

      // Timeout defensivo de 2s caso o evento onvoiceschanged falhe
      setTimeout(() => {
        if (this.synth && this.voices.length === 0) {
          this.voices = this.synth.getVoices();
          resolve(this.voices);
        }
      }, 2000);
    });

    return this.voicesLoadedPromise;
  }

  public subscribe(listener: StateListener | ((state: AudioPlaybackState) => void)): () => void {
    this.stateListeners.add(listener as StateListener);
    this.emitState();
    return () => this.stateListeners.delete(listener as StateListener);
  }

  private emitState(): void {
    const chosenVoice = this.selectedVoice || this.voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith('pt')) || null;
    const { pitch, rate } = this.getAcousticProfile(this.activeTone);

    const state: AudioPlaybackState & SpeechPlaybackStatus = {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentChunkIndex: this.currentChunkIndex,
      totalChunks: this.chunks.length,
      currentText: this.chunks[this.currentChunkIndex] || '',
      currentSegmentIndex: this.currentChunkIndex,
      totalSegments: this.chunks.length,
      currentTextSnippet: this.chunks[this.currentChunkIndex] || '',
      currentVoiceName: chosenVoice ? chosenVoice.name : 'Voz Padrão do Sistema',
      pitch,
      speed: this.activeRateModifier,
    };
    this.stateListeners.forEach((listener) => listener(state));
  }

  /**
   * Identifica a melhor voz masculina/neural em português disponível.
   */
  private async selectOptimalVoice(): Promise<SpeechSynthesisVoice | null> {
    if (this.selectedVoice) return this.selectedVoice;
    await this.initVoices();

    const ptVoices = this.voices.filter((v) => {
      const code = v.lang.toLowerCase().replace('_', '-');
      return code.startsWith('pt');
    });

    if (ptVoices.length === 0) return null;

    // Critérios de busca para audiolivro: vozes neurais e masculinas
    const priorityKeywords = [
      'antonio', // Microsoft Edge / Windows Neural (Barítono excelente)
      'fabio',    // Microsoft Neural
      'felipe',   // Apple Siri / Enhanced
      'homem',
      'male',
      'neural',
      'natural',
      'google português'
    ];

    for (const kw of priorityKeywords) {
      const found = ptVoices.find((v) => v.name.toLowerCase().includes(kw));
      if (found) return found;
    }

    // Fallback: prefere pt-BR
    const brVoice = ptVoices.find((v) => v.lang.toLowerCase().replace('_', '-') === 'pt-br');
    return brVoice || ptVoices[0];
  }

  /**
   * Sanitização exegética de texto bíblico para leitura contínua.
   */
  public prepareBiblicalText(rawText: string): string[] {
    let text = rawText;

    // 1. Limpeza de formatação HTML ou marcações Markdown
    text = text.replace(/<[^>]*>/g, '');
    text = text.replace(/[*_#`~]/g, '');

    // 2. Expansão de abreviações teológicas comuns para evitar pronúncia truncada
    text = text.replace(/\ba\.C\./gi, 'antes de Cristo');
    text = text.replace(/\bd\.C\./gi, 'depois de Cristo');
    text = text.replace(/\bcap\.\s*/gi, 'capítulo ');
    text = text.replace(/\bvs?\.\s*/gi, 'versículo ');
    text = text.replace(/\bcf\.\s*/gi, 'conforme ');
    text = text.replace(/\bp\.\s*ex\./gi, 'por exemplo');

    // 3. Remoção de referências bíblicas entre parênteses (ex: "(Jo 1:1)", "(Gn 12:1-3)")
    text = text.replace(/\([A-Z0-9a-z\s:;,\.-]+\)/g, '');

    // 4. Remoção de números de versículos no início de linhas, após pontos ou sobrescritos
    text = text.replace(/(?:^|\n|\.\s*)\d+\s+/g, '. ');
    text = text.replace(/\[\d+\]/g, ''); // Notas [1], [2]
    text = text.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, ''); // Dígitos sobrescritos

    // 5. Normalização de pontuação bíblica (dois pontos, travessões)
    text = text.replace(/[:—–]/g, ', ');
    text = text.replace(/\r\n|\r|\n/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();

    // 6. Segmentação em períodos para evitar timeout do Chromium
    const rawChunks = text.split(/(?<=[.!?;])\s+/);
    const safeChunks: string[] = [];
    let currentBlock = '';

    for (const chunk of rawChunks) {
      const clean = chunk.trim();
      if (!clean) continue;

      // Mantém os blocos entre 80 e 140 caracteres (tamanho ideal de cadência respiratória)
      if (currentBlock.length + clean.length < 130) {
        currentBlock = currentBlock ? `${currentBlock} ${clean}` : clean;
      } else {
        if (currentBlock) safeChunks.push(currentBlock);
        currentBlock = clean;
      }
    }
    if (currentBlock) safeChunks.push(currentBlock);

    return safeChunks;
  }

  /**
   * Calibração das frequências com compensação para WebKit/Safari.
   */
  private getAcousticProfile(tone: VoiceTone): { pitch: number; rate: number } {
    const isWebKit = typeof navigator !== 'undefined' && 
      /Safari/.test(navigator.userAgent) && 
      !/Chrome/.test(navigator.userAgent);

    if (tone === 'grave') {
      return {
        // WebKit distorce abaixo de 0.82; Chromium suporta frequências mais baixas
        pitch: isWebKit ? 0.82 : 0.77,
        rate: 0.90 * this.activeRateModifier,
      };
    }

    // Barítono: tom médio encorpado
    return {
      pitch: isWebKit ? 0.92 : 0.88,
      rate: 0.94 * this.activeRateModifier,
    };
  }

  public async speak(text: string, settings: SpeechSettings): Promise<void> {
    if (!this.synth) return;

    this.stop();

    this.activeTone = settings.tone || (settings.pitch && settings.pitch <= 0.80 ? 'grave' : 'baritono');
    this.activeRateModifier = settings.rate || settings.speed || 1.0;
    this.activeVolume = settings.volume ?? 1.0;

    this.chunks = this.prepareBiblicalText(text);
    if (this.chunks.length === 0) return;

    this.currentChunkIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;

    this.emitState();
    this.requestWakeLock();
    this.startKeepAlive();
    await this.speakCurrentChunk();
  }

  private async speakCurrentChunk(): Promise<void> {
    if (!this.synth || !this.isPlaying || this.isPaused) return;

    if (this.currentChunkIndex >= this.chunks.length) {
      this.stop();
      return;
    }

    const chunkText = this.chunks[this.currentChunkIndex];
    const utterance = new SpeechSynthesisUtterance(chunkText);
    const voice = await this.selectOptimalVoice();

    if (voice) utterance.voice = voice;

    const { pitch, rate } = this.getAcousticProfile(this.activeTone);
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.volume = this.activeVolume;
    utterance.lang = voice?.lang || 'pt-BR';

    utterance.onend = () => {
      this.currentChunkIndex++;
      this.emitState();

      // Micropausa de pontuação entre orações (130ms) para respiro natural
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.speakCurrentChunk();
        }
      }, 130);
    };

    utterance.onerror = (event) => {
      if (event.error === 'interrupted' || event.error === 'canceled') return;
      console.warn('TheologicalSpeechEngine Event Warning:', event.error);
      this.stop();
    };

    this.synth.speak(utterance);
  }

  public pause(): void {
    if (!this.synth || !this.isPlaying) return;
    this.synth.pause();
    this.isPaused = true;
    this.emitState();
  }

  public resume(): void {
    if (!this.synth || !this.isPlaying) return;
    this.synth.resume();
    this.isPaused = false;
    this.emitState();
  }

  public stop(): void {
    if (!this.synth) return;
    this.stopKeepAlive();
    this.releaseWakeLock();
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentChunkIndex = 0;
    this.chunks = [];
    this.emitState();
  }

  public setTone(tone: VoiceTone): void {
    if (this.activeTone === tone) return;
    this.activeTone = tone;
    if (this.isPlaying && !this.isPaused) {
      this.synth?.cancel();
      this.speakCurrentChunk();
    }
  }

  public setSpeed(multiplier: number): void {
    this.activeRateModifier = Math.max(0.5, Math.min(2.0, multiplier));
    this.emitState();
  }

  public setPitch(pitch: number): void {
    if (pitch <= 0.80) {
      this.setTone('grave');
    } else {
      this.setTone('baritono');
    }
  }

  public setVoice(voiceName: string): void {
    const found = this.voices.find((v) => v.name === voiceName);
    if (found) {
      this.selectedVoice = found;
      this.emitState();
    }
  }

  public getAvailableVoices(langPrefix: string = 'pt'): AvailableVoiceOption[] {
    if (!this.synth) return [];
    const prefix = langPrefix.toLowerCase();
    const filtered = this.voices.filter(v => v.lang.toLowerCase().replace('_', '-').startsWith(prefix));
    const list = filtered.length > 0 ? filtered : this.voices;

    return list.map(v => {
      const lower = (v.name + ' ' + v.lang).toLowerCase();
      const isNatural = lower.includes('natural') || lower.includes('neural') || lower.includes('online') || lower.includes('enhanced');
      const isMaleOrDeep = lower.includes('antonio') || lower.includes('fabio') || lower.includes('felipe') || lower.includes('male') || lower.includes('homem') || lower.includes('baritone') || lower.includes('deep');
      return {
        name: v.name,
        lang: v.lang,
        isNatural,
        isMaleOrDeep,
        rawVoice: v
      };
    });
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  // Previne suspensão do navegador após 15s sem ação
  private startKeepAlive(): void {
    this.stopKeepAlive();
    this.keepAliveTimer = window.setInterval(() => {
      if (this.synth && this.isPlaying && !this.isPaused) {
        this.synth.pause();
        this.synth.resume();
      }
    }, 10000);
  }

  private stopKeepAlive(): void {
    if (this.keepAliveTimer !== null) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }

  // Mantém a tela acordada durante a leitura no smartphone
  private async requestWakeLock(): Promise<void> {
    try {
      if ('wakeLock' in navigator && !this.wakeLock) {
        this.wakeLock = await (navigator as any).wakeLock.request('screen');
      }
    } catch {
      // Ignora silenciosamente se o dispositivo não permitir wakeLock
    }
  }

  private releaseWakeLock(): void {
    if (this.wakeLock) {
      this.wakeLock.release().catch(() => {});
      this.wakeLock = null;
    }
  }
}

export const speechEngine = new TheologicalSpeechEngine();
