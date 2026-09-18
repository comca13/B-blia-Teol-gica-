import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../data/bibleBooks';
import { ScriptureChapter, ScriptureVerse } from '../types';

export interface ResolvedChapterTarget {
  bookNumber: number; // 1 to 66
  bookNamePt: string;
  bookNameEn: string;
  abbrevPt: string;
  chapter: number;
  startVerse?: number;
  endVerse?: number;
  label: string;
}

// In-memory cache for loaded chapters
const memoryCache = new Map<string, ScriptureVerse[]>();

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

/**
 * Robust Bible book matcher with support for Portuguese and English variations,
 * abbreviations, and common abbreviations found in reading plans.
 */
export function findBookByName(text: string): BibleBookInfo | null {
  const norm = normalize(text);
  if (!norm) return null;

  // Specific canonical aliases
  if (norm === 'atos' || norm.startsWith('atos')) {
    return ALL_BIBLE_BOOKS.find(b => b.number === 44) || null;
  }
  if (norm.includes('salmo')) {
    return ALL_BIBLE_BOOKS.find(b => b.number === 19) || null;
  }
  if (norm.includes('corintio')) {
    return norm.includes('2') 
      ? ALL_BIBLE_BOOKS.find(b => b.number === 47) || null 
      : ALL_BIBLE_BOOKS.find(b => b.number === 46) || null;
  }
  if (norm.includes('tessalonicense')) {
    return norm.includes('2') 
      ? ALL_BIBLE_BOOKS.find(b => b.number === 53) || null 
      : ALL_BIBLE_BOOKS.find(b => b.number === 52) || null;
  }
  if (norm.includes('timoteo')) {
    return norm.includes('2') 
      ? ALL_BIBLE_BOOKS.find(b => b.number === 55) || null 
      : ALL_BIBLE_BOOKS.find(b => b.number === 54) || null;
  }
  if (norm.includes('pedro')) {
    return norm.includes('2') 
      ? ALL_BIBLE_BOOKS.find(b => b.number === 61) || null 
      : ALL_BIBLE_BOOKS.find(b => b.number === 60) || null;
  }
  if (norm.includes('cantares') || norm.includes('canticos')) {
    return ALL_BIBLE_BOOKS.find(b => b.number === 22) || null;
  }

  // Exact match on Portuguese, English, or abbreviation
  const exact = ALL_BIBLE_BOOKS.find(
    b => normalize(b.namePt) === norm || normalize(b.nameEn) === norm || normalize(b.abbrevPt) === norm
  );
  if (exact) return exact;

  // Sorted by length desc to match "1 João" before "João", "1 Samuel" before "Samuel", etc.
  const sorted = [...ALL_BIBLE_BOOKS].sort((a, b) => b.namePt.length - a.namePt.length);
  for (const book of sorted) {
    const bNorm = normalize(book.namePt);
    if (
      norm === bNorm ||
      norm.startsWith(bNorm + ' ') ||
      norm.endsWith(' ' + bNorm) ||
      norm.includes(' ' + bNorm + ' ') ||
      norm.includes(bNorm)
    ) {
      return book;
    }
  }

  // Abbreviation word boundary match
  for (const book of sorted) {
    const abNorm = normalize(book.abbrevPt);
    if (new RegExp(`\\b${abNorm}\\b`, 'i').test(norm)) {
      return book;
    }
  }

  return null;
}

/**
 * Parses any list of passages from either Chronological or Canonical plans
 * into a definitive list of chapters to be read for that day.
 */
export function parseDayPassagesToTargets(
  passages: Array<{ book: string; reference: string; testament: 'AT' | 'NT' }>
): ResolvedChapterTarget[] {
  const targets: ResolvedChapterTarget[] = [];

  for (const p of passages) {
    const rawBook = p.book.trim();
    const rawRef = p.reference.trim();

    // Special overarching day cases
    if (rawRef.includes('Visão Geral') || rawBook.includes('Visão')) {
      const apoc = ALL_BIBLE_BOOKS.find(b => b.number === 66)!;
      targets.push({
        bookNumber: apoc.number,
        bookNamePt: apoc.namePt,
        bookNameEn: apoc.nameEn,
        abbrevPt: apoc.abbrevPt,
        chapter: 21,
        label: 'Apocalipse 21'
      });
      targets.push({
        bookNumber: apoc.number,
        bookNamePt: apoc.namePt,
        bookNameEn: apoc.nameEn,
        abbrevPt: apoc.abbrevPt,
        chapter: 22,
        label: 'Apocalipse 22'
      });
      continue;
    }

    if (rawBook === '1, 2 e 3 João') {
      [62, 63, 64].forEach(bNum => {
        const bk = ALL_BIBLE_BOOKS.find(b => b.number === bNum)!;
        targets.push({
          bookNumber: bk.number,
          bookNamePt: bk.namePt,
          bookNameEn: bk.nameEn,
          abbrevPt: bk.abbrevPt,
          chapter: 1,
          label: `${bk.namePt} 1`
        });
      });
      continue;
    }

    if (rawBook === '1 e' && rawRef.includes('Tessalonicenses')) {
      const b1 = ALL_BIBLE_BOOKS.find(b => b.number === 52)!;
      const b2 = ALL_BIBLE_BOOKS.find(b => b.number === 53)!;
      targets.push({
        bookNumber: b1.number,
        bookNamePt: b1.namePt,
        bookNameEn: b1.nameEn,
        abbrevPt: b1.abbrevPt,
        chapter: 4,
        label: '1 Tessalonicenses 4'
      });
      targets.push({
        bookNumber: b1.number,
        bookNamePt: b1.namePt,
        bookNameEn: b1.nameEn,
        abbrevPt: b1.abbrevPt,
        chapter: 5,
        label: '1 Tessalonicenses 5'
      });
      targets.push({
        bookNumber: b2.number,
        bookNamePt: b2.namePt,
        bookNameEn: b2.nameEn,
        abbrevPt: b2.abbrevPt,
        chapter: 1,
        label: '2 Tessalonicenses 1'
      });
      targets.push({
        bookNumber: b2.number,
        bookNamePt: b2.namePt,
        bookNameEn: b2.nameEn,
        abbrevPt: b2.abbrevPt,
        chapter: 2,
        label: '2 Tessalonicenses 2'
      });
      continue;
    }

    if ((rawBook === '1 e' && rawRef.includes('Timóteo')) || rawRef.includes('Timóteo / Tito')) {
      const b1 = ALL_BIBLE_BOOKS.find(b => b.number === 54)!;
      const b2 = ALL_BIBLE_BOOKS.find(b => b.number === 55)!;
      const tit = ALL_BIBLE_BOOKS.find(b => b.number === 56)!;
      targets.push({
        bookNumber: b1.number,
        bookNamePt: b1.namePt,
        bookNameEn: b1.nameEn,
        abbrevPt: b1.abbrevPt,
        chapter: 3,
        label: '1 Timóteo 3'
      });
      targets.push({
        bookNumber: b2.number,
        bookNamePt: b2.namePt,
        bookNameEn: b2.nameEn,
        abbrevPt: b2.abbrevPt,
        chapter: 4,
        label: '2 Timóteo 4'
      });
      targets.push({
        bookNumber: tit.number,
        bookNamePt: tit.namePt,
        bookNameEn: tit.nameEn,
        abbrevPt: tit.abbrevPt,
        chapter: 2,
        label: 'Tito 2'
      });
      continue;
    }

    // Split compound references by "/"
    const segments = rawRef.split('/').map(s => s.trim());
    for (const seg of segments) {
      // Determine book for this segment (could be specified inside segment, like "Ageu 1:1 - 15" or "Lucas 2")
      let segBook = findBookByName(seg);
      let segRef = seg;
      if (segBook) {
        segRef = seg.replace(new RegExp(segBook.namePt, 'i'), '').trim();
      } else {
        segBook = findBookByName(rawBook);
      }

      if (!segBook) continue;

      // Check sub-parts separated by " e " or commas (e.g. "34:1-22 e 142:1-7" or "23 e 24")
      const subParts = segRef.split(/\s+e\s+|\s*,\s*/).map(s => s.trim()).filter(Boolean);
      for (const sub of subParts) {
        let subBook = findBookByName(sub) || segBook;
        let cleanSub = sub;
        if (subBook !== segBook) {
          cleanSub = sub.replace(new RegExp(subBook.namePt, 'i'), '').trim();
        }

        // Pattern 1: Chapter range with verses: "1:1 - 3:24" or "21:1 - 22:23"
        const rangeVersesMatch = cleanSub.match(/(\d+):(\d+)\s*[-–—]\s*(\d+):(\d+)/);
        if (rangeVersesMatch) {
          const startCap = parseInt(rangeVersesMatch[1], 10);
          const endCap = parseInt(rangeVersesMatch[3], 10);
          for (let c = startCap; c <= Math.min(endCap, subBook.totalChapters); c++) {
            targets.push({
              bookNumber: subBook.number,
              bookNamePt: subBook.namePt,
              bookNameEn: subBook.nameEn,
              abbrevPt: subBook.abbrevPt,
              chapter: c,
              label: `${subBook.namePt} ${c}`
            });
          }
          continue;
        }

        // Pattern 2: Single chapter with verse range: "28:10-22" or "34:1-22"
        const singleCapVersesMatch = cleanSub.match(/(\d+):(\d+)\s*[-–—]\s*(\d+)/);
        if (singleCapVersesMatch) {
          const cap = parseInt(singleCapVersesMatch[1], 10);
          targets.push({
            bookNumber: subBook.number,
            bookNamePt: subBook.namePt,
            bookNameEn: subBook.nameEn,
            abbrevPt: subBook.abbrevPt,
            chapter: Math.min(cap, subBook.totalChapters),
            startVerse: parseInt(singleCapVersesMatch[2], 10),
            endVerse: parseInt(singleCapVersesMatch[3], 10),
            label: `${subBook.namePt} ${cap}`
          });
          continue;
        }

        // Pattern 3: Chapter range without verses: "1-3" or "1 a 3"
        const chapterRangeMatch = cleanSub.match(/(\d+)\s*(?:[-–—]|a)\s*(\d+)/);
        if (chapterRangeMatch) {
          const startCap = parseInt(chapterRangeMatch[1], 10);
          const endCap = parseInt(chapterRangeMatch[2], 10);
          for (let c = startCap; c <= Math.min(endCap, subBook.totalChapters); c++) {
            targets.push({
              bookNumber: subBook.number,
              bookNamePt: subBook.namePt,
              bookNameEn: subBook.nameEn,
              abbrevPt: subBook.abbrevPt,
              chapter: c,
              label: `${subBook.namePt} ${c}`
            });
          }
          continue;
        }

        // Pattern 4: Single chapter number: "1" or "23" or "1:1"
        const singleCapMatch = cleanSub.match(/(\d+)/);
        if (singleCapMatch) {
          const cap = parseInt(singleCapMatch[1], 10);
          if (cap >= 1 && cap <= subBook.totalChapters) {
            targets.push({
              bookNumber: subBook.number,
              bookNamePt: subBook.namePt,
              bookNameEn: subBook.nameEn,
              abbrevPt: subBook.abbrevPt,
              chapter: cap,
              label: `${subBook.namePt} ${cap}`
            });
          }
        }
      }
    }
  }

  // Deduplicate targets by bookNumber + chapter
  const unique: ResolvedChapterTarget[] = [];
  for (const t of targets) {
    if (!unique.some(u => u.bookNumber === t.bookNumber && u.chapter === t.chapter)) {
      unique.push(t);
    }
  }

  return unique;
}

/**
 * Fetches all verses of a single chapter from the Bolls Bible engine
 * with local caching and secondary fallback.
 */
export async function fetchChapterVerses(
  bookNumber: number,
  chapter: number,
  translation: 'ARA' | 'WEB' = 'ARA'
): Promise<ScriptureVerse[]> {
  const cacheKey = `bible_ch_${translation}_${bookNumber}_${chapter}`;

  // 1. Check memory cache
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  // 2. Check localStorage cache
  try {
    const local = localStorage.getItem(cacheKey);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryCache.set(cacheKey, parsed);
        return parsed;
      }
    }
  } catch (e) {
    // ignore localStorage errors
  }

  // 3. Fetch from Bolls API
  try {
    const url = `https://bolls.life/get-chapter/${translation}/${bookNumber}/${chapter}/`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const verses: ScriptureVerse[] = data.map((item: any) => ({
          verse: Number(item.verse),
          text: String(item.text || '').replace(/<[^>]+>/g, '').trim()
        }));

        // Store in caches
        memoryCache.set(cacheKey, verses);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(verses));
        } catch (storageErr) {
          // localStorage full or disabled, memory cache will suffice
        }

        return verses;
      }
    }
  } catch (err) {
    console.warn(`Bolls API failed for Book ${bookNumber}, Chapter ${chapter}:`, err);
  }

  // 4. Secondary fallback: bible-api.com
  try {
    const book = ALL_BIBLE_BOOKS.find(b => b.number === bookNumber);
    if (book) {
      const querySlug = translation === 'ARA' ? book.queryPt : book.queryEn;
      const transSlug = translation === 'ARA' ? 'almeida' : 'web';
      const fbUrl = `https://bible-api.com/${encodeURIComponent(querySlug)}+${chapter}?translation=${transSlug}`;
      const fbRes = await fetch(fbUrl);
      if (fbRes.ok) {
        const fbData = await fbRes.json();
        if (fbData && Array.isArray(fbData.verses) && fbData.verses.length > 0) {
          const verses: ScriptureVerse[] = fbData.verses.map((v: any) => ({
            verse: Number(v.verse),
            text: String(v.text || '').trim()
          }));

          memoryCache.set(cacheKey, verses);
          return verses;
        }
      }
    }
  } catch (fallbackErr) {
    console.warn(`Fallback API failed for Book ${bookNumber}, Chapter ${chapter}:`, fallbackErr);
  }

  return [];
}

/**
 * Loads all chapters and verses assigned for any day of the reading plan.
 */
export async function getScriptureForPlanDay(
  day: number,
  passages: Array<{ book: string; reference: string; testament: 'AT' | 'NT' }>,
  translation: 'ARA' | 'WEB' = 'ARA'
): Promise<ScriptureChapter[]> {
  const targets = parseDayPassagesToTargets(passages);

  if (targets.length === 0) {
    return [];
  }

  // Load all targets in parallel
  const loadedChapters = await Promise.all(
    targets.map(async (target) => {
      const verses = await fetchChapterVerses(target.bookNumber, target.chapter, translation);
      return {
        book: target.bookNamePt,
        chapter: target.chapter,
        verses: verses,
        startVerse: target.startVerse,
        endVerse: target.endVerse,
        bookNumber: target.bookNumber,
        label: target.label
      } as ScriptureChapter;
    })
  );

  return loadedChapters.filter(ch => ch.verses.length > 0);
}
