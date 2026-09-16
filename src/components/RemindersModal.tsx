import React, { useState } from 'react';
import { ReminderSettings, DayReading } from '../types';
import { 
  X, 
  Bell, 
  Send, 
  Clock, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Smartphone,
  AlertCircle
} from 'lucide-react';

interface RemindersModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReminderSettings;
  onSaveSettings: (settings: ReminderSettings) => void;
  todayReading: DayReading;
}

export const RemindersModal: React.FC<RemindersModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  todayReading
}) => {
  const [enabled, setEnabled] = useState(settings.enabled);
  const [time, setTime] = useState(settings.time || '07:00');
  const [notifyBrowser, setNotifyBrowser] = useState(settings.notifyBrowser);
  const [phone, setPhone] = useState(settings.phoneWhatsapp || '');
  const [testSuccess, setTestSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveSettings({
      enabled,
      time,
      notifyBrowser,
      phoneWhatsapp: phone
    });
    setTestSuccess('Configurações de lembrete salvas com sucesso!');
    setTimeout(() => {
      setTestSuccess(null);
      onClose();
    }, 1200);
  };

  const handleRequestBrowserNotification = async () => {
    if (!('Notification' in window)) {
      alert('Seu navegador não suporta notificações de sistema.');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotifyBrowser(true);
        new Notification('📖 Cronos & Cânon - Leitura Bíblica', {
          body: `Lembrete Ativado: Hoje é dia de ler ${todayReading.title} (${todayReading.passages.map(p => p.book).join(', ')})!`,
          icon: '/favicon.ico'
        });
        setTestSuccess('Notificação de teste disparada no seu navegador!');
      } else {
        alert('Permissão de notificação não foi concedida nas opções do navegador.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendWhatsAppReminder = () => {
    const text = encodeURIComponent(
      `🕊️ *Cronos & Cânon - Leitura Bíblica Diária*\n` +
      `📅 *Dia ${todayReading.day}*: ${todayReading.title}\n` +
      `📖 *Passagens*: ${todayReading.passages.map(p => `${p.book} ${p.reference}`).join(' + ')}\n` +
      `✨ *Versículo-Chave*: "${todayReading.keyVerse.text}" (${todayReading.keyVerse.reference})\n\n` +
      `Constância gera profundidade! Separe 15 minutos hoje para a Palavra.`
    );
    const url = phone.trim() 
      ? `https://api.whatsapp.com/send?phone=${phone.replace(/\D/g, '')}&text=${text}`
      : `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, '_blank');
  };

  const handleExportGoogleCalendar = () => {
    const [hours, minutes] = time.split(':').map(n => parseInt(n, 10));
    const now = new Date();
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    const endTime = new Date(startTime.getTime() + 20 * 60000); // 20 min reading window

    const formatGCal = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`Leitura Bíblica: Dia ${todayReading.day} - ${todayReading.title}`);
    const details = encodeURIComponent(
      `Passagens de hoje: ${todayReading.passages.map(p => `${p.book} ${p.reference}`).join(', ')}.\n` +
      `Contexto: ${todayReading.theologicalContext.substring(0, 150)}...`
    );

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${formatGCal(startTime)}/${formatGCal(endTime)}&recur=RRULE:FREQ=DAILY`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl w-full max-w-lg max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-zinc-800 flex items-center justify-between bg-stone-50/70 dark:bg-zinc-800/50">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 truncate">
                Lembretes & Constância
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 truncate">
                Cultive o hábito diário da leitura bíblica
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          {testSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{testSuccess}</span>
            </div>
          )}

          {/* Time Picker */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 dark:bg-zinc-800/50 border border-stone-200 dark:border-zinc-700">
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Horário preferido para leitura:</span>
            </label>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="px-3 py-1.5 border border-stone-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-stone-900 dark:text-stone-100 font-mono text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600"
              />
              <span className="text-[11px] text-stone-500 dark:text-stone-400">
                (Início da manhã ou antes de dormir)
              </span>
            </div>
          </div>

          {/* Browser Notifications Option */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 dark:border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Notificações no Navegador</span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Receba um alerta diário com a leitura bíblica recomendada.
              </p>
            </div>
            <button
              type="button"
              onClick={handleRequestBrowserNotification}
              className="w-full sm:w-auto px-3 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium rounded-lg transition-colors shrink-0 text-center"
            >
              Testar Notificação
            </button>
          </div>

          {/* WhatsApp Reminder Option */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 dark:border-zinc-700 bg-emerald-50/20 dark:bg-emerald-950/10">
            <div className="space-y-1 mb-3">
              <div className="text-xs font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Lembrete & Envio pelo WhatsApp</span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Gera uma mensagem formatada com a leitura do Dia {todayReading.day} para você ou seu grupo devocional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="tel"
                placeholder="Seu WhatsApp (ex: 5511999999999)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden"
              />
              <button
                type="button"
                onClick={handleSendWhatsAppReminder}
                className="w-full sm:w-auto px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <Send className="w-3 h-3" />
                <span>Abrir WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Google Calendar Recurring Event */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 dark:border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Adicionar ao Google Agenda</span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Cria um compromisso diário de 20 minutos na sua agenda.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExportGoogleCalendar}
              className="w-full sm:w-auto px-3 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-800 dark:text-stone-200 text-xs font-medium rounded-lg border border-stone-200 dark:border-zinc-700 transition-colors shrink-0 text-center"
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-850 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 text-xs font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium rounded-xl transition-colors shadow-xs"
          >
            Salvar Preferências
          </button>
        </div>

      </div>
    </div>
  );
};
