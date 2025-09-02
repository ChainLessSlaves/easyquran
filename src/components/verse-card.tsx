
"use client";

import React from 'react';
import { Ayah } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Copy, PlayCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerseCardProps {
  surahId: number;
  verse: Ayah;
  selectedTranslationKey: string;
  allTranslations: { value: string; label: string; group: string }[];
}

// Helper function to parse and render text with styled superscripts
const renderTextWithFootnotes = (text: string) => {
  const parts = text.split(/(<sup foot_note=\d+>\d+<\/sup>)/g);
  return (
    <p className="text-muted-foreground">
      {parts.map((part, index) => {
        if (part.startsWith('<sup')) {
          const match = part.match(/<sup foot_note=(\d+)>(\d+)<\/sup>/);
          if (match) {
            const footNoteId = match[1];
            const number = match[2];
            return (
              <sup
                key={index}
                className="mx-0.5 cursor-pointer rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-bold text-primary hover:bg-primary/20"
                onClick={() => console.log(`Footnote ${footNoteId} clicked`)} // Placeholder for future footnote functionality
              >
                {number}
              </sup>
            );
          }
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </p>
  );
};


export function VerseCard({ surahId, verse, selectedTranslationKey, allTranslations }: VerseCardProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    const selectedTranslationText = verse.text[selectedTranslationKey] || '';
    const textToCopy = `${verse.text.ar}\n\n${verse.transliteration}\n\n${selectedTranslationText.replace(/<[^>]*>/g, '')}\n\n(Quran ${surahId}:${verse.id})`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: `Verse ${surahId}:${verse.id} has been copied.`,
    });
  };

  const handlePlayAudio = () => {
    if (verse.audio) {
      const audio = new Audio(verse.audio);
      audio.play();
    } else {
       toast({
        title: "Audio not available",
        description: "Audio for this verse is not available.",
        variant: "destructive"
      });
    }
  };

  const handleBookmark = () => {
    // Placeholder for bookmark functionality
    toast({
      title: "Bookmark clicked",
      description: "Bookmark functionality is not yet implemented.",
    });
  };

  const getTranslationAuthor = (key: string) => {
    const translation = allTranslations.find(t => t.value === key);
    return translation ? translation.label : "";
  }
  
  const englishTranslation = verse.text['en_20'] || verse.text['en_131'];
  const selectedTranslationText = verse.text[selectedTranslationKey];

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 space-y-6">
        <div className="flex justify-between items-start">
            <span className="font-bold text-primary">{surahId}:{verse.id}</span>
            <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="w-8 h-8" onClick={handleCopy}>
                    <Copy className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8" onClick={handleBookmark}>
                    <Bookmark className="w-4 h-4" />
                    <span className="sr-only">Bookmark</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8" onClick={handlePlayAudio}>
                    <PlayCircle className="w-4 h-4" />
                    <span className="sr-only">Play audio</span>
                </Button>
            </div>
        </div>
        
        <div className="space-y-6">
            {verse.text.ar && (
              <div className="text-right">
                  <p className="text-3xl md:text-4xl leading-relaxed font-headline text-primary" dir="rtl">
                  {verse.text.ar}
                  </p>
              </div>
            )}

            {verse.transliteration && (
              <div>
                  <p className="text-lg text-foreground font-serif italic">{verse.transliteration}</p>
              </div>
            )}
            
            {englishTranslation && (
              <div>
                {renderTextWithFootnotes(englishTranslation)}
                <p className="text-xs text-muted-foreground/80 mt-1">- {getTranslationAuthor(verse.text['en_20'] ? 'en_20' : 'en_131')}</p>
              </div>
            )}

            {selectedTranslationText && selectedTranslationKey.startsWith('bn_') && (
              <div>
                {renderTextWithFootnotes(selectedTranslationText)}
                <p className="text-xs text-muted-foreground/80 mt-1">- {getTranslationAuthor(selectedTranslationKey)}</p>
              </div>
            )}
        </div>
      </CardContent>
    </Card>
  );
}
