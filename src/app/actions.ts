"use server";

import { keywordSearch, type KeywordSearchOutput } from "@/ai/flows/keyword-search-tool";

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
