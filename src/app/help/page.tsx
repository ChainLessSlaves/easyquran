
import { MainLayout } from '@/components/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center gap-4">
          <HelpCircle className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Help Center</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Need Assistance?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you need help navigating the app or have any questions, please visit our FAQ page or contact our support team through the feedback form.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
