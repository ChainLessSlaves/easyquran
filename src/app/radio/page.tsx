
import { MainLayout } from '@/components/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function RadioPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center gap-4">
          <Radio className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Quran Radio</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The Quran Radio feature is currently under development. Stay tuned for live streams of Quran recitation from various reciters around the world.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
