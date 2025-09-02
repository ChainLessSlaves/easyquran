
import { MainLayout } from '@/components/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookUser } from 'lucide-react';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center gap-4">
          <BookUser className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>About EasyQuran</CardTitle>
          </CardHeader>
          <CardContent>
            <p>EasyQuran is a modern, responsive Quran web app with a focus on the Bangla language, featuring multiple translations, audio playback, and search functionality. Our mission is to make the Quran accessible and easy to understand for everyone.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
