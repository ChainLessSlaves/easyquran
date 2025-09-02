import QuranClientLayout from '@/components/quran-client-layout';
import type { Surah, Ayah } from '@/lib/types';

interface FirebaseSurahs {
  [key: string]: {
    id: number;
    name_arabic: string;
    name_simple: string;
    name_translations: {
      en: string;
      bn: string;
    };
    revelation_place: string;
    total_verses: number;
  };
}

interface FirebaseVerses {
  [key: string]: {
    surah_id: number;
    ayah_number: number;
    arabic_text: string;
    translations: {
      bn: string;
      en: string;
      [key: string]: string;
    };
    audio: {
      hafs: string;
      [key: string]: string;
    };
  }
}

async function getQuranData(): Promise<Surah[]> {
  try {
    const surahsResponse = await fetch('https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/surahs.json');
    if (!surahsResponse.ok) {
      throw new Error('Failed to fetch Surahs data');
    }
    const fbSurahs: FirebaseSurahs = await surahsResponse.json();

    const versesResponse = await fetch('https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/verses.json');
     if (!versesResponse.ok) {
      throw new Error('Failed to fetch Verses data');
    }
    const fbVerses: FirebaseVerses = await versesResponse.json();

    const versesBySurah: { [key: number]: Ayah[] } = {};
    for (const key in fbVerses) {
        const fbVerse = fbVerses[key];
        if (!versesBySurah[fbVerse.surah_id]) {
            versesBySurah[fbVerse.surah_id] = [];
        }
        versesBySurah[fbVerse.surah_id].push({
            id: fbVerse.ayah_number,
            surah_id: fbVerse.surah_id,
            text: {
                ar: fbVerse.arabic_text,
                en_sahih: fbVerse.translations.en,
                bn_muhiuddin: fbVerse.translations.bn, // Mapping bn to bn_muhiuddin
                bn_tanzil: fbVerse.translations.bn, // Mapping bn to bn_tanzil as placeholder
                en_transliteration: fbVerse.translations.en_transliteration || '',
            },
            audio: fbVerse.audio.hafs,
        });
    }

    // Sort verses within each surah
    for (const surahId in versesBySurah) {
        versesBySurah[surahId].sort((a, b) => a.id - b.id);
    }

    const surahs: Surah[] = Object.values(fbSurahs).map(fbSurah => ({
        id: fbSurah.id,
        name: {
            ar: fbSurah.name_arabic,
            en: fbSurah.name_translations.en,
            bn: fbSurah.name_translations.bn,
            transliteration: fbSurah.name_simple,
        },
        total_verses: fbSurah.total_verses,
        verses: versesBySurah[fbSurah.id] || [],
    })).sort((a, b) => a.id - b.id);
    
    return surahs;

  } catch (error) {
    console.error("Error fetching quran data:", error);
    return [];
  }
}


export default async function Home() {
  const surahs = await getQuranData();

  if (!surahs || surahs.length === 0) {
    return <div>Loading Quran data failed. Please try again later.</div>
  }

  return <QuranClientLayout surahs={surahs} />;
}
