import { TOPICS, TOPIC_LABELS } from '@/lib/quiz-data';
import { STUDY_NOTES } from '@/lib/study-data';
import StudyClient from '@/components/study/study-client';
import { Badge } from '@/components/ui/badge';

export default async function StudyPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const validTopic = TOPICS.find((t) => t === topic);

  if (validTopic) {
    const note = STUDY_NOTES[validTopic];
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-6">
          <a href="/study" className="text-sm text-primary hover:underline">
            ← All topics
          </a>
        </div>
        <StudyClient note={note} topicLabel={TOPIC_LABELS[validTopic]} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Study Notes</h1>
          <p className="text-muted-foreground">
            Concise identification guides for all histology topics. Click a topic to review.
          </p>
        </div>
        <Badge variant="secondary">{TOPICS.length} topics</Badge>
      </div>
      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {TOPICS.map((t) => {
          const note = STUDY_NOTES[t];
          return (
            <a
              key={t}
              href={`/study?topic=${t}`}
              className="flex flex-col rounded-xl border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <span className="mb-3 text-2xl">🔬</span>
              <span className="mb-1 font-semibold text-foreground text-sm">{TOPIC_LABELS[t]}</span>
              <span className="text-xs text-muted-foreground">
                {note.keyFeatures.length} features · {note.identificationTips.length} tips
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
