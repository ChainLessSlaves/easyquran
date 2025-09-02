import QuranClientLayout from '@/components/quran-client-layout';
import type { SurahMetadata } from '@/lib/types';
import { getSurah } from '../actions';

async function getSurahMetadataList(): Promise<SurahMetadata[]> {
  try {
    const res = await fetch('https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/quran.json?shallow=true');
    if (!res.ok) {
      throw new Error('Failed to fetch Surah list');
    }
    const surahIds = Object.keys(await res.json());

    const metadataPromises = surahIds.map(id => 
      fetch(`https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/quran/${id}/metadata.json`)
        .then(res => res.json())
    );

    const metadatas = await Promise.all(metadataPromises);
    return metadatas.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Error fetching surah metadata list:", error);
    return [];
  }
}


export default async function ReadPage() {
  const surahMetadatas = await getSurahMetadataList();
  
  if (!surahMetadatas || surahMetadatas.length === 0) {
    return <div>Loading Quran metadata failed. Please try again later.</div>
  }

  const initialSurah = await getSurah(1);

  if (!initialSurah) {
     return <div>Loading initial Surah data failed. Please try again later.</div>
  }
  
  return <QuranClientLayout surahMetadatas={surahMetadatas} initialSurah={initialSurah} />;
}
