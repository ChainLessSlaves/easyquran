
import { MainLayout } from '@/components/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center gap-4">
          <Tv className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">For Developers</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Contribute to EasyQuran</CardTitle>
          </CardHeader>
          <CardContent>
            <p>EasyQuran is an open-source project. We welcome contributions from developers. You can find our project on GitHub to get started.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
