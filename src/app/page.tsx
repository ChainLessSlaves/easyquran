import QuranClientLayout from '@/components/quran-client-layout';
import type { QuranData } from '@/lib/types';

async function getQuranData() {
  try {
    const response = await fetch('https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/quran.json');
    if (!response.ok) {
      throw new Error('Failed to fetch Quran data');
    }
    const data = await response.json();
    // The data from firebase is an object with keys, so we convert it to an array, filtering out nulls if any.
    const surahs: QuranData = Object.values(data).filter(Boolean);
    return surahs;
  } catch (error) {
    console.error("Error fetching quran data:", error);
    // Return empty array or handle error as needed
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
