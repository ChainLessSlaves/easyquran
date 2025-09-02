"use client";

import { Ayah, TranslationKey } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Copy, PlayCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerseCardProps {
  surahId: number;
  verse: Ayah;
  selectedTranslation: TranslationKey;
}

export function VerseCard({ surahId, verse, selectedTranslation }: VerseCardProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    const textToCopy = `${verse.text.ar}\n\n${verse.text.en_sahih}\n\n${verse.text[selectedTranslation]}\n\n(Quran ${surahId}:${verse.id})`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: `Verse ${surahId}:${verse.id} has been copied.`,
    });
  };

  const handlePlayAudio = () => {
    const audio = new Audio(verse.audio);
    audio.play();
  };

  const handleBookmark = () => {
    // Placeholder for bookmark functionality
    toast({
      title: "Bookmark clicked",
      description: "Bookmark functionality is not yet implemented.",
    });
  };

  const getTranslationAuthor = (key: TranslationKey) => {
    switch (key) {
      case "bn_muhiuddin":
        return "Muhiuddin Khan";
      case "bn_tanzil":
        return "Tanzil";
      case "en_sahih":
        return "Sahih International";
      default:
        return "";
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-16 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <span className="font-bold text-primary">{surahId}:{verse.id}</span>
            <div className="flex flex-col">
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
          <div className="flex-1 flex justify-between gap-4">
            <div className="flex-1 space-y-4 pt-1">
              {verse.text.en_transliteration && (
                <div>
                  <p className="text-lg text-foreground">{verse.text.en_transliteration}</p>
                </div>
              )}
              <div>
                <p className="text-muted-foreground">{verse.text.en_sahih}</p>
                <p className="text-xs text-muted-foreground/80 mt-1">- Sahih International</p>
              </div>
              <div>
                <p className="text-muted-foreground">{verse.text[selectedTranslation]}</p>
                <p className="text-xs text-muted-foreground/80 mt-1">- {getTranslationAuthor(selectedTranslation)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl md:text-4xl leading-relaxed font-headline text-primary" dir="rtl">
                {verse.text.ar}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
