export type TranslationKey = 'bn_muhiuddin' | 'bn_tanzil' | 'en_sahih';

export type Ayah = {
  id: number;
  text: {
    ar: string;
    bn_muhiuddin: string;
    bn_tanzil: string;
    en_sahih: string;
    en_transliteration?: string;
  };
  audio: string;
};

export type Surah = {
  id: number;
  name: {
    ar: string;
    en: string;
    bn: string;
    transliteration: string;
  };
  total_verses: number;
  verses: Ayah[];
};

export type QuranData = Surah[];
