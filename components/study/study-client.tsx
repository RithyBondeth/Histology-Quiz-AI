'use client';

import { StudyNote } from '@/lib/study-data';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Lightbulb, AlertTriangle, Brain, Layers, Sparkles } from 'lucide-react';

interface Props {
  note: StudyNote;
  topicLabel: string;
}

export default function StudyClient({ note, topicLabel }: Props) {
  return (
    <div>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{topicLabel}</h1>
          {note.epithelium && (
            <p className="mt-2 text-muted-foreground">
              <span className="font-medium text-foreground">Epithelium:</span> {note.epithelium}
            </p>
          )}
          {note.supportingStructures && (
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Supporting structure:</span> {note.supportingStructures}
            </p>
          )}
        </div>
        <Link href={`/quiz?topic=${note.topic}`} className={cn(buttonVariants({}), 'shrink-0')}>Practice Quiz →</Link>
      </div>

      <Tabs defaultValue="features">
        <TabsList className="mb-6 h-auto flex-wrap gap-1 bg-muted p-1">
          <TabsTrigger value="features" className="gap-1.5 text-xs sm:text-sm"><CheckCircle2 className="h-3.5 w-3.5" />Key Features</TabsTrigger>
          <TabsTrigger value="layers" className="gap-1.5 text-xs sm:text-sm"><Layers className="h-3.5 w-3.5" />Layers</TabsTrigger>
          <TabsTrigger value="tips" className="gap-1.5 text-xs sm:text-sm"><Lightbulb className="h-3.5 w-3.5" />ID Tips</TabsTrigger>
          <TabsTrigger value="mistakes" className="gap-1.5 text-xs sm:text-sm"><AlertTriangle className="h-3.5 w-3.5" />Mistakes</TabsTrigger>
          <TabsTrigger value="mnemonics" className="gap-1.5 text-xs sm:text-sm"><Brain className="h-3.5 w-3.5" />Mnemonics</TabsTrigger>
        </TabsList>

        <TabsContent value="features">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Key Histological Features
              </h2>
              <ul className="space-y-2.5">
                {note.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layers">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" /> Layers / Structure
              </h2>
              {note.layers?.length ? (
                <div className="space-y-3">
                  {note.layers.map((layer, i) => (
                    <div key={i} className="rounded-lg border bg-muted/30 p-4">
                      <p className="mb-1 font-semibold text-primary">{layer.name}</p>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No detailed layer breakdown for this tissue.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" /> Identification Tips
              </h2>
              <ul className="space-y-3">
                {note.identificationTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm text-foreground/80">
                    <Badge variant="default" className="mt-0.5 shrink-0 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px]">{i + 1}</Badge>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mistakes">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" /> Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3">
                {note.commonMistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/60 p-3 text-sm text-amber-900">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mnemonics">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-violet-500" /> Memory Aid
              </h2>
              {note.mnemonics ? (
                <div className="rounded-xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-8 text-center">
                  <Sparkles className="mx-auto mb-3 h-8 w-8 text-violet-400" />
                  <p className="text-xl font-semibold text-violet-900">{note.mnemonics}</p>
                </div>
              ) : (
                <p className="text-muted-foreground">No mnemonic available for this topic yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
