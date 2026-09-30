import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  CalendarDays, 
  Landmark, 
  Globe2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Flame, 
  BookMarked, 
  Scroll, 
  HelpCircle, 
  User, 
  Cloud, 
  Smartphone, 
  Check,
  ChevronDown
} from 'lucide-react';
import { MainRoute } from '../types';
import { useAuth } from '../context/AuthContext';

interface PresentationViewProps {
  onStartReading: () => void;
  onNavigateRoute: (route: MainRoute) => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  onStartReading,
  onNavigateRoute,
}) => {
  const { user, signInWithGoogle, syncState } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const handleStart = () => {
    localStorage.setItem('cronos_first_visit_done', 'true');
    onStartReading();
  };

  const handleGoogleConnect = async () => {
    localStorage.setItem('cronos_first_visit_done', 'true');
    if (!user) {
      await signInWithGoogle();
    } else {
      onNavigateRoute('PERFIL');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-900 via-zinc-900 to-zinc-950 border border-amber-900/40 p-6 sm:p-12 lg:p-16 shadow-2xl text-center">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>A Jornada Bíblica Definitiva de 365 Dias</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 tracking-tight leading-tight sm:leading-none">
            Cronos & Cânon <span className="text-amber-500">365</span>
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-stone-300 font-medium italic">
            "A Escritura lida no pulsar do tempo histórico e na riqueza da tradição cristã."
          </p>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Uma plataforma teológica completa que une a leitura bíblica diária aos grandes impérios mundiais, 
            à arqueologia do Antigo Oriente, aos Concílios Ecumênicos da Igreja, às variantes textuais e à exegese das línguas originais.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={handleStart}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span>Entrar na Plataforma</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleGoogleConnect}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/90 text-stone-100 font-semibold text-sm sm:text-base border border-zinc-700 hover:border-zinc-500 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              {user ? (
                <>
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-amber-600 flex items-center justify-center text-xs font-bold text-white">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || 'Usuário'} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <span>Perfil Conectado ({user.displayName?.split(' ')[0] || 'Usuário'})</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.54 0 2.89.55 3.96 1.45l2.97-2.97C17.06 1.77 14.7 1 12 1 7.42 1 3.53 3.61 1.63 7.41l3.64 2.82C6.15 7.23 8.84 5 12 5z"/>
                    <path fill="#4285F4" d="M23.49 12.28c0-.79-.07-1.54-.19-2.28H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.65 2.84c2.14-1.97 3.37-4.88 3.37-8.65z"/>
                    <path fill="#FBBC05" d="M5.27 14.77c-.24-.71-.38-1.47-.38-2.27s.14-1.56.38-2.27L1.63 7.41C.59 9.48 0 11.67 0 14s.59 4.52 1.63 6.59l3.64-2.82z"/>
                    <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.65-2.84c-1.07.72-2.45 1.15-4.28 1.15-3.16 0-5.85-2.23-6.73-5.23L1.63 16.59C3.53 20.39 7.42 23 12 23z"/>
                  </svg>
                  <span>Conectar com Google</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Pillars Chips */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 365 Dias Estruturados
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Sincronismo Mundial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Hebraico & Grego
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Nuvem Automática
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> PWA 100% Offline
            </span>
          </div>
        </div>
      </section>

      {/* 2. OS 2 GRANDES PLANOS DE LEITURA */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Dois Modos de Percorrer a Revelação
          </h2>
          <p className="text-sm text-zinc-400">
            Você pode alternar entre os planos a qualquer momento sem perder o seu ritmo e constância.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Cronológico */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-amber-900/30 hover:border-amber-500/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-serif text-xl font-bold">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">
                Pioneiro & contextual
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                Plano Histórico-Cronológico
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Leia cada livro, profecia e salmo na <strong>ordem exata em que ocorreram no tempo</strong>. 
              Compreenda a crise da Assíria enquanto lê Amós e Isaías; entenda o cativeiro na Babilônia 
              vivenciando os lamentos de Jeremias e as visões de Ezequiel ao lado dos reis de Judá.
            </p>
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs text-zinc-400 space-y-1">
              <span className="font-semibold text-stone-200 block">Exemplo Prático:</span>
              <span>1 Samuel 18–19 lido em paralelo com os Salmos de Davi no deserto de En-Gedi.</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigateRoute('PLANOS')}
              className="text-amber-400 hover:text-amber-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Ver cronograma cronológico</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>

          {/* Card 2: Canônico */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-indigo-900/30 hover:border-indigo-500/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-serif text-xl font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                Clássico & Canônico
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                Plano Canônico Tradicional
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Para os leitores que prezam a ordem clássica consagrada das Escrituras Sagradas: 
              de <strong>Gênesis a Apocalipse</strong>, percorrendo o Pentateuco, os Livros Históricos, 
              os Poéticos, os Profetas Maiores e Menores, os Evangelhos e as Epístolas Apostólicas.
            </p>
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs text-zinc-400 space-y-1">
              <span className="font-semibold text-stone-200 block">Destaque:</span>
              <span>Estrutura ideal para estudo sistemático dos livros e análise sequencial canônica.</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigateRoute('PLANOS')}
              className="text-indigo-400 hover:text-indigo-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Ver cronograma canônico</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. AS CAMADAS EXEGÉTICAS DO LEITOR */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Painel Exegético & Teológico Integrado
          </h2>
          <p className="text-sm text-zinc-400">
            Ao abrir qualquer capítulo, você não lê um texto isolado: tem acesso instantâneo a um arsenal acadêmico completo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              א / Ω
            </div>
            <h4 className="font-serif text-base font-bold text-stone-100">Léxico Original</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Morfologia e numeração Strong de termos cruciais em Hebraico Bíblico, Aramaico e Grego Koiné.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Scroll className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-stone-100">Variantes Textuais</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Comparação transparente entre o Texto Massorético (TM), Septuaginta (LXX), Códice Sinaítico e Qumran.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-stone-100">Apologética Bíblica</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Respostas robustas e fundamentadas para aparentes discrepâncias históricas, numéricas ou doutrinárias.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-stone-100">Harmonia Sinótica</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Quadro sinóptico comparativo dos 4 Evangelhos alinhando milagres, sermões e a Paixão de Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HISTÓRIA, MUNDO & CONCÍLIOS */}
      <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Sincronismo Histórico & Patrística</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Mundo Antigo, Impérios & Tradição da Igreja
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              A revelação bíblica não ocorreu no vácuo. Explore a geopolítica dos impérios contemporâneos 
              (Assíria, Babilônia, Pérsia, Grécia, Roma), a arqueologia que valida os relatos e o desenvolvimento 
              doutrinário nos grandes Concílios Ecumênicos com os Pais da Igreja.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigateRoute('GLOBAL_CONTEXT')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Globe2 className="w-4 h-4" />
              <span>Explorar Impérios & Mundo</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateRoute('HISTORIA')}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-700 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4 text-amber-400" />
              <span>Concílios & Pais da Igreja</span>
            </button>
          </div>
        </div>

        {/* Impérios Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-4 border-t border-zinc-800/80 text-center">
          {[
            { name: 'Egito', period: 'Êxodo & Patriarcas' },
            { name: 'Assíria', period: 'Crise de 722 a.C.' },
            { name: 'Babilônia', period: 'Exílio de 586 a.C.' },
            { name: 'Pérsia', period: 'Retorno & Ciro' },
            { name: 'Grécia', period: '2º Templo & Macabeus' },
            { name: 'Roma', period: 'Novo Testamento' },
            { name: 'Patrística', period: '325–787 d.C.' },
          ].map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/60">
              <span className="block font-serif text-xs font-bold text-amber-400">{item.name}</span>
              <span className="text-[10px] text-zinc-400 block truncate">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CADERNO TEOLÓGICO & CONTA GOOGLE COM SINCRONIZAÇÃO */}
      <section className="p-6 sm:p-10 rounded-3xl bg-zinc-900/90 border border-amber-900/40 relative overflow-hidden space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Cloud className="w-3.5 h-3.5" />
              <span>Sincronização em Nuvem em Tempo Real</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Seu Perfil Teológico, Sempre com Você em Qualquer Dispositivo
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Ao conectar sua <strong>Conta do Google</strong>, todas as suas notas diárias, marcações de leitura, 
              anotações teológicas organizadas por loci sistemáticos e favoritos da história da igreja são salvos no 
              banco de dados em nuvem.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Mesclagem Inteligente:</strong> As anotações que você já fez localmente se unem à sua conta sem perder nada.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Acesso Multiplataforma:</strong> Leia no smartphone pelo PWA e continue seus estudos aprofundados no computador.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Backup Garantido:</strong> Trocou de aparelho ou limpou os dados do navegador? Seus estudos continuam preservados.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleGoogleConnect}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                {user ? (
                  <>
                    <User className="w-4 h-4" />
                    <span>Ver Meu Perfil Sincronizado</span>
                  </>
                ) : (
                  <>
                    <Cloud className="w-4 h-4" />
                    <span>Conectar Conta Google Agora</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Visual Device & Sync Mockup */}
          <div className="w-full lg:w-96 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl space-y-4 shrink-0">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-100">{user?.displayName || 'Leitor da Palavra'}</div>
                  <div className="text-[10px] text-zinc-400">{user?.email || 'Nuvem Desconectada'}</div>
                </div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                user ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {user ? 'Nuvem Ativa' : 'Modo Offline'}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-900 border border-zinc-850">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> Constância Bíblica
                </span>
                <span className="font-bold text-stone-200">Preservada na Nuvem</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-900 border border-zinc-850">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-amber-400" /> Notas Teológicas
                </span>
                <span className="font-bold text-stone-200">7 Loci Sistemáticos</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-900 border border-zinc-850">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-400" /> Suporte PWA
                </span>
                <span className="font-bold text-stone-200">Instalável no Celular</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'A plataforma é gratuita?',
              a: 'Sim, totalmente gratuita. Nosso compromisso é oferecer uma ferramenta de altíssimo padrão teológico, acadêmico e devocional para enriquecer a comunhão do povo de Deus com as Escrituras.'
            },
            {
              q: 'O que acontece com as minhas anotações se eu conectar o Google depois?',
              a: 'Nosso algoritmo de sincronização realiza a mesclagem automática: tudo o que você anotou ou leu localmente é enviado com segurança para a nuvem da sua conta Google, sem nenhuma perda de dados.'
            },
            {
              q: 'Posso usar no celular sem conexão com a internet?',
              a: 'Sim! A plataforma é uma Progressive Web App (PWA) moderna com suporte a cache local. Você pode instalar o ícone na tela inicial do celular ou tablet e ler seus capítulos diários mesmo sem sinal de internet.'
            },
            {
              q: 'Qual é a diferença entre o Plano Cronológico e o Canônico?',
              a: 'No Plano Cronológico, os textos bíblicos são organizados na sequência temporal dos acontecimentos históricos e proféticos (como a crise com a Assíria ou o exílio babilônico). No Plano Canônico, segue-se a ordem clássica consagrada de Gênesis ao Apocalipse. Você pode alternar a qualquer momento.'
            },
            {
              q: 'O que é a gaveta de estudo acadêmico?',
              a: 'É um painel que se abre ao lado do texto bíblico contendo análise versículo por versículo: léxico das palavras em hebraico e grego, arqueologia com fotos e descobertas, variantes dos manuscritos e notas de apologética bíblica.'
            }
          ].map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-stone-100 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ml-2 ${
                    isOpen ? 'rotate-180 text-amber-400' : ''
                  }`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-zinc-900 to-amber-950/60 border border-amber-600/40 p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-stone-100">
            Pronto para transformar sua leitura bíblica?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Inicie agora mesmo sua jornada de 365 dias com todo o contexto histórico, exegético e teológico na ponta dos seus dedos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleStart}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-xl shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Entrar na Plataforma</span>
          </button>

          {!user && (
            <button
              type="button"
              onClick={handleGoogleConnect}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-850 hover:bg-zinc-800 text-stone-200 font-semibold text-sm border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-amber-400" />
              <span>Conectar com Google</span>
            </button>
          )}
        </div>
      </section>

    </div>
  );
};
