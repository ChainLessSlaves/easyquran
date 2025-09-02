
export type TranslationProvider = {
  id: string;
  name: string;
  author: string;
};

export type TranslationInfo = {
  english: { [key: string]: Omit<TranslationProvider, 'id'> };
  bengali: { [key: string]: Omit<TranslationProvider, 'id'> };
};

export type VerseTranslation = {
  text: string;
  author: string;
  name: string;
};

export type Verse = {
  arabic: {
    text_uthmani: string;
    text_imlaei: string;
  };
  transliteration: string;
  translations: {
    english: { [translationId: string]: VerseTranslation };
    bengali: { [translationId: string]: VerseTranslation };
  };
};

export type SurahMetadata = {
  id: number;
  name_arabic: string;
  name_simple: string;
  name_translation: string;
  total_verses: number;
  revelation_place: string;
  revelation_order: number;
};

export type SurahData = {
  metadata: SurahMetadata;
  translations_info: TranslationInfo;
  verses: { [verse_number: string]: Verse };
};

// Simplified types for component props
export type Ayah = {
  id: number;
  surah_id: number;
  text: {
    ar: string;
    [key: string]: string | undefined; // For various translations
  };
  audio: string; // Assuming we might add this back
  transliteration: string;
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
