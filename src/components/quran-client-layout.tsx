"use client";

import React, { useState, useTransition } from 'react';
import type { Surah, SurahMetadata } from '@/lib/types';
import { getSurah } from '@/app/actions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select";
import { BookOpen, Languages, Loader2, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { VerseCard } from '@/components/verse-card';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { MainLayout } from './main-layout';

interface QuranClientLayoutProps {
  surahMetadatas: SurahMetadata[];
  initialSurah: Surah;
}

type TranslationOption = { value: string; label: string; group: string };

const tajweedRules = [
    { name: "Silent letter", color: "text-gray-400" },
    { name: "Normal madd (2)", color: "text-yellow-500" },
    { name: "Separated madd (2/4/6)", color: "text-orange-500" },
    { name: "Connected madd (4/5)", color: "text-red-500" },
    { name: "Necessary madd (6)", color: "text-red-600" },
    { name: "Ghunna/ikhfa'", color: "text-green-500" },
    { name: "Qalqala (echo)", color: "text-blue-400" },
    { name: "Tafkhim (heavy)", color: "text-blue-600" }
];

export default function QuranClientLayout({ surahMetadatas, initialSurah }: QuranClientLayoutProps) {
  const [currentSurah, setCurrentSurah] = useState<Surah>(initialSurah);
  const [selectedTranslation, setSelectedTranslation] = useState<string>('bn_164'); // Rawai Al-bayan
  const [isPending, startTransition] = useTransition();
  const [showTajweed, setShowTajweed] = useState(false);
  const [isTajweedLegendOpen, setIsTajweedLegendOpen] = useState(false);

  const handleSurahChange = (surahId: number) => {
    startTransition(async () => {
      const newSurahData = await getSurah(surahId);
      if (newSurahData) {
        setCurrentSurah(newSurahData);
      }
    });
  };
  
  const translationOptions: TranslationOption[] = [
      { value: 'en_131', label: 'The Clear Quran', group: 'English' },
      { value: 'en_20', label: 'Saheeh International', group: 'English' },
      { value: 'bn_161', label: 'Taisirul Quran', group: 'Bengali' },
      { value: 'bn_162', label: 'Dr. Abu Bakr Zakaria', group: 'Bengali' },
      { value: 'bn_163', label: 'Sheikh Mujibur Rahman', group: 'Bengali' },
      { value: 'bn_164', label: 'Rawai Al-bayan', group: 'Bengali' },
  ];
  
  const groupedTranslations = translationOptions.reduce((acc, option) => {
      if (!acc[option.group]) {
        acc[option.group] = [];
      }
      acc[option.group].push(option);
      return acc;
    }, {} as Record<string, TranslationOption[]>);


  return (
    <MainLayout
      sidebarContent={
        <ScrollArea className="flex-1">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Surahs</h2>
              <div className="space-y-2">
                {surahMetadatas.map((surah) => {
                  if (!surah || !surah.name) {
                    return null;
                  }
                  return (
                    <Button
                      key={surah.id}
                      variant={currentSurah.id === surah.id ? "secondary" : "ghost"}
                      onClick={() => handleSurahChange(surah.id)}
                      className="w-full justify-start h-auto py-2"
                    >
                      <div className="flex items-center gap-3">
                          <span className="bg-primary/10 text-primary text-xs font-bold rounded-md h-7 w-7 flex items-center justify-center">
                            {surah.id}
                          </span>
                          <div className="text-left">
                            <p className="font-semibold">{surah.name.transliteration}</p>
                            <p className="text-xs text-muted-foreground">{surah.name.en}</p>
                          </div>
                        </div>
                        <p className="text-lg font-headline text-primary ml-auto">{surah.name_arabic.split(' ').pop()}</p>
                    </Button>
                  )
                })}
              </div>
            </div>
        </ScrollArea>
      }
    >
        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-2 flex items-center justify-between gap-4">
              {currentSurah && currentSurah.name && (
                <div className="flex-1">
                  <h2 className="text-xl font-headline font-bold">{currentSurah.name.transliteration}</h2>
                  <p className="text-sm text-muted-foreground">{currentSurah.name.en}</p>
                </div>
              )}

              <div className="flex items-center gap-2">
                 <Collapsible open={isTajweedLegendOpen} onOpenChange={setIsTajweedLegendOpen}>
                    <CollapsibleTrigger asChild>
                       <Button variant={showTajweed ? "default" : "outline"} onClick={() => setShowTajweed(!showTajweed)}>
                        Tajweed
                        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isTajweedLegendOpen && 'rotate-180'}`} />
                       </Button>
                    </CollapsibleTrigger>
                  </Collapsible>
                <Select onValueChange={(value: string) => setSelectedTranslation(value)} defaultValue={selectedTranslation}>
                  <SelectTrigger className="w-auto gap-2 hidden sm:flex">
                    <Languages className="w-4 h-4" />
                    <SelectValue placeholder="Select Translation" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(groupedTranslations).map(([group, options]) => (
                      <SelectGroup key={group}>
                        <SelectLabel>{group}</SelectLabel>
                        {options.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                <ThemeToggle />
              </div>
          </header>
          
          <div className="p-2 sm:p-4 md:p-6 flex-1">
             {isPending ? (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                </div>
              ) : currentSurah && currentSurah.name ? (
              <>
                <div className="sm:hidden mb-4">
                    <Select onValueChange={(value: string) => setSelectedTranslation(value)} defaultValue={selectedTranslation}>
                        <SelectTrigger className="w-full gap-2">
                          <Languages className="w-4 h-4" />
                          <SelectValue placeholder="Select Translation" />
                        </SelectTrigger>
                        <SelectContent>
                         {Object.entries(groupedTranslations).map(([group, options]) => (
                            <SelectGroup key={group}>
                              <SelectLabel>{group}</SelectLabel>
                              {options.map(opt => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                </div>

                {showTajweed && isTajweedLegendOpen && (
                  <Card className="mb-4">
                    <CardContent className="p-4">
                      <p className="text-sm font-bold mb-2">Tajweed Colors</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {tajweedRules.map(rule => (
                          <div key={rule.name} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${rule.color.replace('text-', 'bg-')}`}></span>
                            <span className="text-xs">{rule.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="mb-4 bg-primary/5 border-primary/20">
                    <CardContent className="p-6 text-center">
                        <h3 className="text-3xl font-headline text-primary">{currentSurah.name.ar}</h3>
                        <p className="text-muted-foreground mt-1">{currentSurah.name.transliteration}</p>
                        <p className="text-sm text-muted-foreground">{currentSurah.total_verses} Verses</p>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                  {currentSurah.verses && currentSurah.verses.map((verse) => (
                    <VerseCard 
                        key={verse.id} 
                        verse={verse} 
                        surahId={currentSurah.id} 
                        selectedTranslationKey={selectedTranslation} 
                        allTranslations={translationOptions}
                        showTajweed={showTajweed}
                    />
                  ))}
                </div>
              </>
            ) : (
               <div>Surah data could not be loaded.</div>
            )}
          </div>
        </main>
    </MainLayout>
  );
}
