"use server";

import { keywordSearch, type KeywordSearchOutput } from "@/ai/flows/keyword-search-tool";
import type { Surah, Ayah, SurahData, TajweedAyah } from '@/lib/types';


export async function handleSearch(query: string): Promise<KeywordSearchOutput | { error: string }> {
  if (!query) {
    return { error: "Please enter a search query." };
  }
  try {
    const results = await keywordSearch({ query });
    return results;
  } catch (e) {
    console.error(e);
    return { error: "An error occurred during the search." };
  }
}


async function getFullSurahData(surahId: number): Promise<SurahData | null> {
   try {
    const res = await fetch(`https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app/quran/${surahId}.json`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data for Surah ${surahId}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching full data for Surah ${surahId}:`, error);
    return null;
  }
}

// Helper to transform SurahData into the simplified Surah type for the client
function transformSurahData(surahData: SurahData): Surah {
  const verses: Ayah[] = Object.entries(surahData.verses || {}).map(([vNumber, vData]) => {
    if (!vData) return null;

    const ayah: Ayah = {
      id: parseInt(vNumber),
      surah_id: surahData.metadata.id,
      transliteration: vData.transliteration,
      audio: '', // Placeholder for audio
      text: {
        ar: vData.arabic.text_uthmani,
      },
    };

    // Add English translations
    if (vData.translations.english) {
      for (const [id, translation] of Object.entries(vData.translations.english)) {
        ayah.text[`en_${id}`] = translation.text;
      }
    }

    // Add Bengali translations
    if (vData.translations.bengali) {
      for (const [id, translation] of Object.entries(vData.translations.bengali)) {
        ayah.text[`bn_${id}`] = translation.text;
      }
    }
    
    return ayah;
  }).filter((ayah): ayah is Ayah => ayah !== null) // Filter out nulls
  .sort((a, b) => a.id - b.id);

  return {
    id: surahData.metadata.id,
    name: {
      ar: surahData.metadata.name_arabic,
      en: surahData.metadata.name_translation,
      bn: surahData.metadata.name_translation,
      transliteration: surahData.metadata.name_simple,
    },
    total_verses: surahData.metadata.total_verses,
    verses: verses,
  };
}

export async function getSurah(id: number) {
  const surahData = await getFullSurahData(id);
  if (!surahData) return null;
  return transformSurahData(surahData);
}


export async function getTajweedVerse(surahId: number, verseId: number): Promise<TajweedAyah | null> {
  try {
    const res = await fetch(`https://api.qurancdn.com/api/qdc/verses/by_key/${surahId}:${verseId}?fields=text_uthmani&words=true&word_fields=text_uthmani,qpc_uthmani`);
    if (!res.ok) {
      throw new Error(`Failed to fetch tajweed verse for ${surahId}:${verseId}`);
    }
    const data = await res.json();
    const verse = data.verse;
    
    const tajweedHtml = verse.words.map((word: any) => 
        `<span class="tajweed-word" style="color: ${word.text_uthmani_tajweed || 'inherit'}">${word.qpc_uthmani}</span>`
    ).join(' ');

    return {
      id: verse.id,
      verse_key: verse.verse_key,
      text_uthmani_tajweed: tajweedHtml,
    };
  } catch (error) {
    console.error(`Error fetching Tajweed verse ${surahId}:${verseId}:`, error);
    return null;
  }
}