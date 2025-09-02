
import { MainLayout } from '@/components/main-layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function FaqPage() {
  return (
    <MainLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center gap-4">
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I change the translation?</AccordionTrigger>
                <AccordionContent>
                  You can change the translation language and author from the select menu at the top right of the reading page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a dark mode?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can toggle between light and dark mode using the sun/moon icon in the header or sidebar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I listen to the audio recitation?</AccordionTrigger>
                <AccordionContent>
                  Click the play icon on any verse card to listen to the audio recitation for that verse.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
