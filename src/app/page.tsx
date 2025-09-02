import QuranClientLayout from '@/components/quran-client-layout';
import { quranData } from '@/lib/quran-data';

export default function Home() {
  const surahs = quranData;
  return <QuranClientLayout surahs={surahs} />;
}
