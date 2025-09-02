'use server';

/**
 * @fileOverview A keyword search tool for the Quran.
 *
 * - keywordSearch - A function that handles the keyword search process.
 * - KeywordSearchInput - The input type for the keywordSearch function.
 * - KeywordSearchOutput - The return type for the keywordSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KeywordSearchInputSchema = z.object({
  query: z.string().describe('The search query, which can be a Surah name, ayah number, or Bangla/Arabic keyword.'),
});
export type KeywordSearchInput = z.infer<typeof KeywordSearchInputSchema>;

const KeywordSearchOutputSchema = z.object({
  results: z.array(
    z.object({
      surah: z.string().describe('The name of the Surah.'),
      ayah: z.number().describe('The ayah number.'),
      arabicText: z.string().describe('The Arabic text of the ayah.'),
      banglaTranslation: z.string().describe('The Bangla translation of the ayah.'),
      englishTranslation: z.string().describe('The English translation of the ayah.'),
    })
  ).describe('An array of search results. Each result contains the Surah name, ayah number, Arabic text, Bangla translation, and English translation.'),
});
export type KeywordSearchOutput = z.infer<typeof KeywordSearchOutputSchema>;

export async function keywordSearch(input: KeywordSearchInput): Promise<KeywordSearchOutput> {
  return keywordSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'keywordSearchPrompt',
  input: {schema: KeywordSearchInputSchema},
  output: {schema: KeywordSearchOutputSchema},
  prompt: `You are an expert Quran search assistant.

  Based on the user's query, search the Quran and return relevant verses.

  The query can be a Surah name, ayah number, or Bangla/Arabic keyword.

  Return an array of search results, each containing the Surah name, ayah number, Arabic text, Bangla translation, and English translation.

  Query: {{{query}}}
  `,
});

const keywordSearchFlow = ai.defineFlow(
  {
    name: 'keywordSearchFlow',
    inputSchema: KeywordSearchInputSchema,
    outputSchema: KeywordSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
