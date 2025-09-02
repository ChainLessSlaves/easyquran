"use client";

import { Ayah, TranslationKey } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    const textToCopy = `${verse.text.ar}\n\n${verse.text[selectedTranslation]}\n\n(Quran ${surahId}:${verse.id})`;
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

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-primary">{surahId}:{verse.id}</span>
        </div>
        <p className="text-3xl md:text-4xl leading-relaxed text-right font-headline mb-6" dir="rtl">
          {verse.text.ar}
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {verse.text[selectedTranslation]}
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="p-2 justify-end bg-muted/30">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleCopy}>
            <Copy className="w-4 h-4" />
            <span className="sr-only">Copy</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleBookmark}>
            <Bookmark className="w-4 h-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={handlePlayAudio}>
            <PlayCircle className="w-4 h-4" />
            <span className="sr-only">Play audio</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
