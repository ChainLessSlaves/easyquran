"use server";

import { keywordSearch, type KeywordSearchOutput } from "@/ai/flows/keyword-search-tool";
import type { Surah, Ayah, SurahData } from '@/lib/types';


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
    if (!vData) return null; // Add null check here

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
      bn: surahData.metadata.name_translation, // You might need a Bengali translation for the name
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
