import { UserProgress, ReaderSettings, ReminderSettings, PlanType, UserTheologicalNote, TheologicalNoteCategory } from '../types';

const STORAGE_KEYS = {
  PROGRESS: 'cronos_canon_progress',
  SETTINGS: 'cronos_canon_settings',
  REMINDERS: 'cronos_canon_reminders',
  USER_NAME: 'cronos_canon_user_name',
  THEOLOGICAL_NOTES: 'cronos_theological_notes',
};

const DEFAULT_PROGRESS: UserProgress = {
  planType: 'chronological',
  completedDays: [1], // starts with day 1 ready or sample completed
  streak: 1,
  lastReadDate: new Date().toISOString().split('T')[0],
  startDate: new Date().toISOString().split('T')[0],
  bookmarks: [1],
  notes: {
    1: 'Dia 1: A Criação de Deus me lembra que Ele é o autor da ordem e do propósito na minha vida.'
  }
};

const DEFAULT_SETTINGS: ReaderSettings = {
  theme: 'dark',
  fontSize: 18,
  lineHeight: 1.7,
  fontFamily: 'lora',
  audioSpeed: 1.0,
  depthMode: 'EXEGÉTICO_ACADÉMICO',
  visiblePanels: {
    archaeology: true,
    lexicon: true,
    worldHistory: true,
    intertextuality: true,
    textualVariants: true,
  },
};

const DEFAULT_REMINDERS: ReminderSettings = {
  enabled: false,
  time: '07:00',
  notifyBrowser: false,
  phoneWhatsapp: ''
};

export const loadUserProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      notes: typeof parsed.notes === 'object' && parsed.notes !== null ? parsed.notes : {}
    };
  } catch (err) {
    console.error('Error loading progress:', err);
    return DEFAULT_PROGRESS;
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Error saving progress:', err);
  }
};

export const loadReaderSettings = (): ReaderSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      theme: parsed.theme || 'dark',
      depthMode: parsed.depthMode || DEFAULT_SETTINGS.depthMode,
      visiblePanels: {
        ...DEFAULT_SETTINGS.visiblePanels,
        ...(parsed.visiblePanels || {})
      }
    };
  } catch (err) {
    return DEFAULT_SETTINGS;
  }
};

export const saveReaderSettings = (settings: ReaderSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving settings:', err);
  }
};

export const loadTheologicalNotes = (): UserTheologicalNote[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.THEOLOGICAL_NOTES);
    if (!raw) {
      // Migração suave de notas antigas se existirem no progresso
      const progress = loadUserProgress();
      if (progress.notes && Object.keys(progress.notes).length > 0) {
        const migrated: UserTheologicalNote[] = Object.entries(progress.notes).map(([dayStr, text], idx) => {
          const d = parseInt(dayStr, 10);
          return {
            id: `note-migrated-${d}-${idx}`,
            date: new Date().toISOString().split('T')[0],
            readingDay: d,
            passageRef: `Dia ${d}`,
            category: 'PRATICA_DEVOCIONAL' as TheologicalNoteCategory,
            tags: ['devocional', 'diário'],
            title: `Reflexão do Dia ${d}`,
            content: text,
            createdAt: Date.now() - (365 - d) * 86400000,
            updatedAt: Date.now(),
          };
        });
        saveTheologicalNotes(migrated);
        return migrated;
      }
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Error loading theological notes:', err);
    return [];
  }
};

export const saveTheologicalNotes = (notes: UserTheologicalNote[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEOLOGICAL_NOTES, JSON.stringify(notes));
  } catch (err) {
    console.error('Error saving theological notes:', err);
  }
};

export const THEOLOGICAL_CATEGORY_LABELS: Record<TheologicalNoteCategory, { label: string; locus: string; color: string; description: string }> = {
  TEOLOGIA_PROPRIAMENTE_DITA: {
    label: 'Teologia Própria',
    locus: 'De Deo',
    color: 'amber',
    description: 'Atributos Divinos, Trindade Santa, Decretos Eternos e Soberania'
  },
  CRISTOLOGIA: {
    label: 'Cristologia',
    locus: 'De Christo',
    color: 'red',
    description: 'Pessoa, Naturezas Divina/Humana, Ofícios e Obra Redentora de Cristo'
  },
  PNEUMATOLOGIA: {
    label: 'Pneumatologia',
    locus: 'De Spiritu Sancto',
    color: 'sky',
    description: 'Pessoa do Espírito Santo, Dons, Regeneração e Iluminação da Palavra'
  },
  ANTROPOLOGIA_E_HAMARTIOLOGIA: {
    label: 'Antropologia & Queda',
    locus: 'De Homine et Peccato',
    color: 'stone',
    description: 'Criação do homem, Imago Dei, Queda, Pecado Original e Corrupção'
  },
  SOTERIOLOGIA: {
    label: 'Soteriologia',
    locus: 'De Salute',
    color: 'emerald',
    description: 'Salvação, Eleição, Graça Soberana, Justificação pela Fé e Santificação'
  },
  ECLESIOLOGIA: {
    label: 'Eclesiologia',
    locus: 'De Ecclesia',
    color: 'indigo',
    description: 'A Igreja como Corpo de Cristo, Ordenanças/Sacramentos e Ministério'
  },
  ESCATOLOGIA: {
    label: 'Escatologia',
    locus: 'De Novissimis',
    color: 'purple',
    description: 'Últimas Coisas, Ressurreição, Volta de Cristo, Juízo e Novo Céu e Nova Terra'
  },
  ARQUEOLOGIA_E_HISTORIA: {
    label: 'Arqueologia & História',
    locus: 'Historia Salutis',
    color: 'yellow',
    description: 'Cultura material, artefatos, geografia sagrada e fontes clássicas'
  },
  PRATICA_DEVOCIONAL: {
    label: 'Prática Devocional',
    locus: 'Pietas & Praxis',
    color: 'teal',
    description: 'Oração pessoal, adoração, exortação mútua e aplicação ética diária'
  },
};

export const exportNotesAsMarkdown = (notes: UserTheologicalNote[]): string => {
  const timestamp = new Date().toLocaleDateString('pt-BR');
  let md = `# Caderno de Teologia Sistemática Pessoal\n`;
  md += `*Exportado em: ${timestamp} via Bíblia Teológica (Cronos & Cânon)*\n\n`;
  md += `Total de anotações registradas: **${notes.length}**\n\n`;
  md += `---\n\n`;

  // Agrupamento por Categoria Teológica
  const grouped: Record<string, UserTheologicalNote[]> = {};
  for (const note of notes) {
    if (!grouped[note.category]) {
      grouped[note.category] = [];
    }
    grouped[note.category].push(note);
  }

  for (const [categoryKey, categoryNotes] of Object.entries(grouped)) {
    const meta = THEOLOGICAL_CATEGORY_LABELS[categoryKey as TheologicalNoteCategory] || {
      label: categoryKey,
      locus: '',
      description: ''
    };
    md += `## 📖 ${meta.label} (${meta.locus})\n`;
    if (meta.description) {
      md += `*${meta.description}*\n\n`;
    }

    categoryNotes.sort((a, b) => b.updatedAt - a.updatedAt).forEach((n, idx) => {
      md += `### ${idx + 1}. ${n.title || 'Sem título'}\n`;
      md += `- **Passagem / Referência:** ${n.passageRef} (Dia ${n.readingDay})\n`;
      md += `- **Data:** ${n.date}\n`;
      if (n.tags && n.tags.length > 0) {
        md += `- **Tags:** ${n.tags.map(t => `\`#${t}\``).join(' ')}\n`;
      }
      md += `\n${n.content}\n\n`;
      md += `---\n\n`;
    });
  }

  return md;
};

export const loadReminderSettings = (): ReminderSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REMINDERS);
    if (!raw) return DEFAULT_REMINDERS;
    return { ...DEFAULT_REMINDERS, ...JSON.parse(raw) };
  } catch (err) {
    return DEFAULT_REMINDERS;
  }
};

export const saveReminderSettings = (reminders: ReminderSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
  } catch (err) {
    console.error('Error saving reminders:', err);
  }
};

export const loadUserName = (): string => {
  return localStorage.getItem(STORAGE_KEYS.USER_NAME) || 'Leitor da Palavra';
};

export const saveUserName = (name: string): void => {
  localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
};
