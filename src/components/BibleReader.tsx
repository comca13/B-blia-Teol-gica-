import React, { useState, useEffect } from 'react';

export const BibleReader: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [book, setBook] = useState('gn'); 
  const [chapter, setChapter] = useState(1);
  const [verses, setVerses] = useState<{ number: number; text: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const VERSES_PER_PAGE = 20;

  // Reset pagination when book or chapter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [book, chapter]);

  const totalPages = Math.ceil(verses.length / VERSES_PER_PAGE);
  const currentVerses = verses.slice(
    currentPage * VERSES_PER_PAGE,
    (currentPage + 1) * VERSES_PER_PAGE
  );

  // Lista de livros simplificada com códigos para API
  const books = [
    { name: 'Gênesis', id: 'gn' },
    { name: 'Êxodo', id: 'ex' },
    { name: 'Salmos', id: 'sl' },
    { name: 'Isaías', id: 'is' },
    { name: 'Mateus', id: 'mt' },
    { name: 'João', id: 'jo' },
  ];

  // Versão padrão baseada no idioma selecionado
  // pt: almeida (ACF/ARC) | en: kjv (King James Version)
  const version = language === 'pt' ? 'acf' : 'kjv';

  useEffect(() => {
    async function fetchBibleChapter() {
      setLoading(true);
      setError(null);
      try {
        // Exemplo usando a API pública abibliadigital.com.br (ótima para português e inglês)
        const response = await fetch(
          `https://www.abibliadigital.com.br/api/verses/${version}/${book}/${chapter}`
        );
        
        if (!response.ok) {
          throw new Error('Não foi possível carregar o capítulo.');
        }

        const data = await response.json();
        // O formato retornado traz um array de versículos
        setVerses(data.verses);
      } catch (err) {
        setError('Erro ao buscar o texto bíblico. Verifique sua conexão.');
        // Fallback simulado caso a API esteja instável
        setVerses([
          { number: 1, text: "Não foi possível carregar os versículos online no momento." }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchBibleChapter();
  }, [language, book, chapter, version]);

  return (
    <div className="pb-24 pt-4 px-4 max-w-2xl mx-auto text-zinc-100 space-y-6">
      {/* Controles de Navegação e Idioma */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Seletor de Livro */}
            <select 
              value={book}
              onChange={(e) => {
                setBook(e.target.value);
                setChapter(1); // Reseta para o capítulo 1 ao trocar de livro
              }}
              className="bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500"
            >
              {books.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>

            {/* Seletor de Capítulo */}
            <select 
              value={chapter}
              onChange={(e) => setChapter(Number(e.target.value))}
              className="bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500"
            >
              {[1, 2, 3, 4, 5, 10, 20, 50].map((num) => (
                <option key={num} value={num}>Capítulo {num}</option>
              ))}
            </select>
          </div>

          {/* Seletor de Idioma (Português / Inglês) */}
          <div className="flex bg-zinc-800 p-1 rounded-lg border border-zinc-700">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                language === 'pt' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                language === 'en' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Caixa de Exibição do Texto Bíblico */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-bold text-amber-400 font-serif uppercase">
            {books.find(b => b.id === book)?.name} {chapter}
          </h2>
          <span className="text-xs text-zinc-400 uppercase tracking-wider">
            Versão: {version.toUpperCase()}
          </span>
        </div>

        {loading ? (
          <div className="py-12 text-center text-zinc-400 animate-pulse">
            Carregando palavras sagradas...
          </div>
        ) : error ? (
          <div className="py-8 text-center text-red-400 text-sm">
            {error}
          </div>
        ) : (
          <div className="space-y-3 font-serif text-zinc-200 leading-loose">
            {currentVerses.map((v) => (
              <p key={v.number} className="hover:bg-zinc-800/50 p-1.5 rounded transition-colors cursor-pointer text-justify">
                <sup className="text-amber-500 font-sans text-xs font-bold mr-2">{v.number}</sup>
                {v.text}
              </p>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
            <button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg text-sm font-semibold disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="text-sm text-zinc-400">
              Página {currentPage + 1} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg text-sm font-semibold disabled:opacity-50"
            >
              Próximo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
