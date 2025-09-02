"use client";

import React, { useState, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import { handleSearch } from '@/app/actions';
import { KeywordSearchOutput } from '@/ai/flows/keyword-search-tool';
import { ScrollArea } from './ui/scroll-area';

export function SearchTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<KeywordSearchOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResults(null);
    startTransition(async () => {
      const searchResult = await handleSearch(query);
      if ('error' in searchResult) {
        setError(searchResult.error);
      } else {
        setResults(searchResult);
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Search className="mr-2 h-4 w-4" />
          <span>Search Quran...</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Keyword Search</DialogTitle>
          <DialogDescription>
            Search by Surah name, Ayah number, or Bangla/Arabic keyword.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSearch}>
          <div className="flex gap-2">
            <Input
              placeholder="e.g., 'Al-Fatiha', '1:1', or 'রহমান'"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isPending}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>
        </form>
        <div className="mt-4">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {results && (
            <ScrollArea className="h-72">
              <div className="space-y-4 pr-4">
                {results.results.length === 0 ? (
                  <p className="text-center text-muted-foreground">No results found.</p>
                ) : (
                  results.results.map((result, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <p className="font-bold text-primary mb-2">{result.surah}:{result.ayah}</p>
                      <p className="text-lg text-right font-headline mb-2" dir="rtl">{result.arabicText}</p>
                      <p className="text-muted-foreground">{result.banglaTranslation}</p>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
