import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, BookOpen, Calendar, Leaf, Mic, Search, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <header className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold font-headline">Quran.com</h1>
          <div className="mt-6 w-full max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search the Quran..." className="pl-12 pr-12 h-14 text-lg rounded-full bg-card border-border" />
            <Mic className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className="mt-4 flex gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/read">
                <BookOpen className="mr-2" /> Navigate Quran
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              <TrendingUp className="mr-2" /> Popular
            </Button>
          </div>
        </header>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Continue Reading</h2>
            <Link href="/read" className="text-sm font-medium text-primary hover:underline">
              My Quran
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-headline">البقرة</p>
                  <p className="text-lg text-muted-foreground">2. Al-Baqarah (The Cow)</p>
                </div>
                <Link href="/read" className="flex items-center gap-2 text-primary hover:underline">
                  Verse 1 <ArrowRight />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-green-200/10 border-green-500/20">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-2">
                  <Leaf className="text-green-500" />
                  <p className="text-2xl font-bold">2 <span className="text-sm font-normal text-muted-foreground">day streak</span></p>
                </div>
                <Button variant="link" className="text-primary mt-2">Set a Goal</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Quran in a Year</h2>
            <Link href="#" className="text-sm font-medium text-primary hover:underline flex items-center gap-2">
              <Calendar className="w-4 h-4"/> Calendar
            </Link>
          </div>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-headline leading-relaxed text-primary" dir="rtl">
                وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ
              </p>
              <p className="mt-4 text-muted-foreground">And 'remember' when your Lord proclaimed, 'If you are grateful, I will certainly give you more. But if you are ungrateful, surely My punishment is severe.'</p>
              <p className="mt-2 text-sm text-muted-foreground/80">- Dr. Mustafa Khattab, The Clear Quran</p>
              <Button variant="outline" className="mt-6">This Week's Reading</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Learning Plans</h2>
            <Link href="#" className="text-sm font-medium text-primary hover:underline">
              See More
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <Image src="https://picsum.photos/600/400?grayscale" alt="Learning Plan" width={600} height={400} className="rounded-t-lg" data-ai-hint="despair journey"/>
              <CardContent className="p-4">
                <h3 className="font-semibold">Do Not Despair: Journeying from the Weight of Guilt to the Doors of Mercy</h3>
              </CardContent>
            </Card>
            <Card>
               <Image src="https://picsum.photos/600/400?grayscale" alt="Learning Plan" width={600} height={400} className="rounded-t-lg" data-ai-hint="screen addiction"/>
              <CardContent className="p-4">
                <h3 className="font-semibold">Screen Addiction: When Screens Steal the Heart</h3>
              </CardContent>
            </Card>
            <Card>
               <Image src="https://picsum.photos/600/400?grayscale" alt="Learning Plan" width={600} height={400} className="rounded-t-lg" data-ai-hint="prayer focus"/>
              <CardContent className="p-4">
                <h3 className="font-semibold">Why can't I focus in my prayer?</h3>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
