export type VoiceTone = 'grave' | 'baritono';

export interface SpeechSettings {
  tone: VoiceTone;
  rate?: number; // Ajuste fino opcional sobre a cadência base
  volume?: number;
}

export interface AudioPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentChunkIndex: number;
  totalChunks: number;
}

// Interfaces de compatibilidade para componentes existentes
export interface SpeechPlaybackStatus extends AudioPlaybackState {
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

export type StateListener = (state: AudioPlaybackState & SpeechPlaybackStatus) => void;

export class TheologicalSpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private chunks: string[] = [];
  private currentChunkIndex: number = 0;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private keepAliveTimer: number | null = null;
  private stateListeners: Set<StateListener> = new Set();
  
  // Configuração ativa
  private activeTone: VoiceTone = 'baritono';
  private activeRateModifier: number = 1.0;
  private activeVolume: number = 1.0;
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices(): void {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  public subscribe(listener: StateListener): () => void {
    this.stateListeners.add(listener);
    this.emitState();
    return () => this.stateListeners.delete(listener);
  }

  private emitState(): void {
    const chosenVoice = this.selectedVoice || this.selectOptimalVoice();
    const { pitch, rate } = this.getAcousticProfile(this.activeTone);
    const state: AudioPlaybackState & SpeechPlaybackStatus = {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentChunkIndex: this.currentChunkIndex,
      totalChunks: this.chunks.length,
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
   * Retorna vozes disponíveis com indicador natural/grave
   */
  public getAvailableVoices(langPrefix: string = 'pt'): AvailableVoiceOption[] {
    if (!this.synth) return [];
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }
    const prefix = langPrefix.toLowerCase();
    const filtered = this.voices.filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith(prefix));
    const target = filtered.length > 0 ? filtered : this.voices;

    return target.map((v) => {
      const lower = v.name.toLowerCase();
      const isNatural = lower.includes('natural') || lower.includes('neural') || lower.includes('online') || lower.includes('google');
      const isMaleOrDeep = ['antonio', 'fabio', 'felipe', 'homem', 'male', 'daniel', 'jorge'].some((k) => lower.includes(k));
      return {
        name: v.name,
        lang: v.lang,
        isNatural,
        isMaleOrDeep,
        rawVoice: v,
      };
    });
  }

  /**
   * Encontra a voz em português com maior qualidade acústica disponível no ambiente.
   * Dá prioridade a vozes neurais/naturais e vozes masculinas.
   */
  private selectOptimalVoice(): SpeechSynthesisVoice | null {
    if (this.selectedVoice) return this.selectedVoice;

    if (this.voices.length === 0 && this.synth) {
      this.voices = this.synth.getVoices();
    }

    const ptVoices = this.voices.filter((v) =>
      v.lang.toLowerCase().replace('_', '-').startsWith('pt')
    );

    if (ptVoices.length === 0) return null;

    // Prioridade 1: Vozes masculinas neurais conhecidas do Windows/Edge/Chrome/iOS
    const priorityNames = [
      'antonio', // Microsoft Antonio Online (Natural) - pt-BR (excelente barítono)
      'fabio',    // Vozes neurais pt-BR
      'felipe',   // Apple macOS/iOS Felipe Enhanced
      'natural',  // Qualquer voz categorizada como Natural
      'neural',   // Qualquer voz categorizada como Neural
      'homem',
      'male'
    ];

    for (const name of priorityNames) {
      const match = ptVoices.find((v) => v.name.toLowerCase().includes(name));
      if (match) return match;
    }

    // Prioridade 2: Voz do Google pt-BR ou qualquer pt-BR
    const googlePt = ptVoices.find((v) => v.name.toLowerCase().includes('google'));
    if (googlePt) return googlePt;

    return ptVoices[0];
  }

  /**
   * Normaliza o texto teológico para audiobook:
   * Remove números de versículos no início das linhas, referências entre parênteses,
   * notas de rodapé e padroniza pontuações de respiração.
   */
  public prepareBiblicalText(rawText: string): string[] {
    let text = rawText;

    // 1. Remove números de versículos no início de linhas ou após pontuações (ex: "1 No princípio...", " 12 E disse Deus")
    text = text.replace(/(?:^|\n|\.\s*)\d+\s+/g, '. ');
    text = text.replace(/\[\d+\]/g, ''); // Notas numéricas [1]

    // 2. Remove citações de referências entre parênteses, ex: (Gn 1:1) ou (cf. Jo 3:16)
    text = text.replace(/\([A-Za-z0-9\s:;,\.-]+\)/g, '');

    // 3. Normaliza quebras de linha e hífens de transição
    text = text.replace(/\r\n|\r|\n/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();

    // 4. Fragmenta em orações respeitando pontuação para criar cadência de audiolivro
    // Delimitações: ponto, ponto e vírgula, exclamação, interrogação e dois pontos
    const rawChunks = text.split(/(?<=[.!?;:])\s+/);

    // 5. Agrupa sentenças muito curtas para manter o fluxo auditivo estável
    const processedChunks: string[] = [];
    let buffer = '';

    for (const chunk of rawChunks) {
      if (!chunk.trim()) continue;
      if (buffer.length + chunk.length < 110) {
        buffer = buffer ? `${buffer} ${chunk}` : chunk;
      } else {
        if (buffer) processedChunks.push(buffer);
        buffer = chunk;
      }
    }
    if (buffer) processedChunks.push(buffer);

    return processedChunks;
  }

  /**
   * Define os parâmetros de frequência (Pitch) e ritmo (Rate)
   * de acordo com a tonalidade selecionada.
   */
  private getAcousticProfile(tone: VoiceTone): { pitch: number; rate: number } {
    switch (tone) {
      case 'grave':
        return {
          pitch: 0.78, // Frequência fundamental substancialmente rebaixada
          rate: 0.90 * this.activeRateModifier, // Cadência solene e pausada
        };
      case 'baritono':
      default:
        return {
          pitch: 0.89, // Timbre médio-grave encorpado com boa articulação de formantes
          rate: 0.94 * this.activeRateModifier, // Ritmo confortável para audiolivro prolongado
        };
    }
  }

  public speak(
    text: string, 
    settings: SpeechSettings | { 
      tone?: VoiceTone; 
      rate?: number; 
      volume?: number; 
      speed?: number; 
      pitch?: number; 
      lang?: string; 
      voiceName?: string 
    } = { tone: 'baritono' }
  ): void {
    if (!this.synth) return;

    this.stop();

    if ('tone' in settings && settings.tone) {
      this.activeTone = settings.tone;
    } else if ('pitch' in settings && settings.pitch !== undefined) {
      this.activeTone = settings.pitch <= 0.80 ? 'grave' : 'baritono';
    } else {
      this.activeTone = 'baritono';
    }

    if ('rate' in settings && settings.rate !== undefined) {
      this.activeRateModifier = settings.rate;
    } else if ('speed' in settings && settings.speed !== undefined) {
      this.activeRateModifier = settings.speed;
    } else {
      this.activeRateModifier = 1.0;
    }

    this.activeVolume = settings.volume ?? 1.0;

    if ('voiceName' in settings && settings.voiceName) {
      this.selectedVoice = this.voices.find((v) => v.name === settings.voiceName) || null;
    }

    this.chunks = this.prepareBiblicalText(text);
    if (this.chunks.length === 0) return;

    this.currentChunkIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;

    this.emitState();
    this.startKeepAlive();
    this.speakCurrentChunk();
  }

  private speakCurrentChunk(): void {
    if (!this.synth || !this.isPlaying || this.isPaused) return;

    if (this.currentChunkIndex >= this.chunks.length) {
      this.stop();
      return;
    }

    const chunkText = this.chunks[this.currentChunkIndex];
    const utterance = new SpeechSynthesisUtterance(chunkText);
    
    const voice = this.selectOptimalVoice();
    if (voice) utterance.voice = voice;

    const { pitch, rate } = this.getAcousticProfile(this.activeTone);
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.volume = this.activeVolume;
    utterance.lang = voice?.lang || 'pt-BR';

    utterance.onend = () => {
      this.currentChunkIndex++;
      this.emitState();
      // Micropausa respiratória entre sentenças (120ms)
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.speakCurrentChunk();
        }
      }, 120);
    };

    utterance.onerror = (event) => {
      if (event.error === 'interrupted' || event.error === 'canceled') return;
      console.warn('SpeechSynthesis error:', event);
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
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentChunkIndex = 0;
    this.chunks = [];
    this.emitState();
  }

  public setTone(tone: VoiceTone): void {
    this.activeTone = tone;
    if (this.isPlaying && !this.isPaused) {
      // Reinicia a leitura a partir da sentença atual aplicando o novo perfil harmônico
      this.synth?.cancel();
      this.speakCurrentChunk();
    } else {
      this.emitState();
    }
  }

  public setPitch(pitch: number): void {
    this.setTone(pitch <= 0.80 ? 'grave' : 'baritono');
  }

  public setSpeed(speed: number): void {
    this.activeRateModifier = speed;
    if (this.isPlaying && !this.isPaused) {
      this.synth?.cancel();
      this.speakCurrentChunk();
    } else {
      this.emitState();
    }
  }

  public setVoice(voiceName: string): void {
    this.selectedVoice = this.voices.find((v) => v.name === voiceName) || null;
    if (this.isPlaying && !this.isPaused) {
      this.synth?.cancel();
      this.speakCurrentChunk();
    } else {
      this.emitState();
    }
  }

  /**
   * Previne a suspensão da síntese de voz no Chrome/Edge após 15 segundos
   */
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
}

export const speechEngine = new TheologicalSpeechEngine();
