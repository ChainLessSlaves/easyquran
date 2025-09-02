"use client";

import React, { useState, useMemo } from 'react';
import type { Surah, TranslationKey } from '@/lib/types';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, Languages, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { VerseCard } from '@/components/verse-card';
import { SearchTool } from '@/components/search-tool';

interface QuranClientLayoutProps {
  surahs: Surah[];
}

export default function QuranClientLayout({ surahs }: QuranClientLayoutProps) {
  const [currentSurah, setCurrentSurah] = useState<Surah>(surahs.find(s => s && s.name) || surahs[0]);
  const [selectedTranslation, setSelectedTranslation] = useState<TranslationKey>('bn_muhiuddin');
  
  const translationOptions: { value: TranslationKey; label: string }[] = [
    { value: 'bn_muhiuddin', label: 'Bangla (Muhiuddin Khan)' },
    { value: 'bn_tanzil', label: 'Bangla (Tanzil)' },
    { value: 'en_sahih', label: 'English (Sahih International)' },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-headline font-semibold">কুরআন বাংলা</h1>
          </div>
        </SidebarHeader>
        <SidebarContent asChild>
          <ScrollArea className="flex-1">
            <SidebarGroup>
              <SearchTool />
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Surahs</SidebarGroupLabel>
              <SidebarMenu>
                {surahs.map((surah) => {
                  if (!surah || !surah.name) {
                    return null;
                  }
                  return (
                    <SidebarMenuItem key={surah.id}>
                      <SidebarMenuButton
                        onClick={() => setCurrentSurah(surah)}
                        isActive={currentSurah.id === surah.id}
                        className="justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="bg-primary/10 text-primary text-xs font-bold rounded-md h-6 w-6 flex items-center justify-center">
                            {surah.id}
                          </span>
                          <div>
                            <p className="font-semibold">{surah.name.transliteration}</p>
                            <p className="text-xs text-muted-foreground">{surah.name.en}</p>
                          </div>
                        </div>
                        <p className="text-lg font-headline text-primary">{surah.name.ar.split(' ').pop()}</p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroup>
          </ScrollArea>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-2 flex items-center justify-between gap-4">
              <SidebarTrigger className="md:hidden" />
              {currentSurah && currentSurah.name && (
                <div className="flex-1">
                  <h2 className="text-xl font-headline font-bold">{currentSurah.name.transliteration}</h2>
                  <p className="text-sm text-muted-foreground">{currentSurah.name.bn}</p>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Select onValueChange={(value: TranslationKey) => setSelectedTranslation(value)} defaultValue={selectedTranslation}>
                  <SelectTrigger className="w-auto gap-2 hidden sm:flex">
                    <Languages className="w-4 h-4" />
                    <SelectValue placeholder="Select Translation" />
                  </SelectTrigger>
                  <SelectContent>
                    {translationOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ThemeToggle />
              </div>
          </header>
          
          {currentSurah && currentSurah.name && (
            <div className="p-2 sm:p-4 md:p-6 flex-1">
              <div className="sm:hidden mb-4">
                  <Select onValueChange={(value: TranslationKey) => setSelectedTranslation(value)} defaultValue={selectedTranslation}>
                      <SelectTrigger className="w-full gap-2">
                        <Languages className="w-4 h-4" />
                        <SelectValue placeholder="Select Translation" />
                      </SelectTrigger>
                      <SelectContent>
                        {translationOptions.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
              </div>

              <Card className="mb-4 bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                      <h3 className="text-3xl font-headline text-primary">{currentSurah.name.ar}</h3>
                      <p className="text-muted-foreground mt-1">{currentSurah.name.transliteration}</p>
                      <p className="text-sm text-muted-foreground">{currentSurah.total_verses} Verses</p>
                  </CardContent>
              </Card>

              <div className="space-y-4">
                {currentSurah.verses && currentSurah.verses.map((verse) => (
                  <VerseCard key={verse.id} verse={verse} surahId={currentSurah.id} selectedTranslation={selectedTranslation} />
                ))}
              </div>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
