import { TOPICS, TOPIC_LABELS, getQuestionsByTopic } from "@/lib/quiz-data";
import QuizClient from "@/components/quiz/quiz-client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; mode?: string }>;
}) {
  const { topic, mode } = await searchParams;
  const validTopic = TOPICS.find((t) => t === topic);

  if (validTopic) {
    const questions = getQuestionsByTopic(validTopic);
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <QuizClient
          topic={validTopic}
          topicLabel={TOPIC_LABELS[validTopic]}
          initialQuestions={questions}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Practice Quiz</h1>
        <p className="text-muted-foreground">
          Choose a topic below to start practising, or take a mixed quiz across all topics.
        </p>
      </div>

      {/* Mixed quiz */}
      <div className="mb-10">
        <QuizClient mixed />
      </div>

      <Separator className="mb-10" />

      {/* Topic selector */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Choose a specific topic</h2>
        <Badge variant="secondary">{TOPICS.length} topics</Badge>
      </div>
      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {TOPICS.map((t) => {
          const count = getQuestionsByTopic(t).length;
          return (
            <a
              key={t}
              href={`/quiz?topic=${t}`}
              className="flex flex-col rounded-xl border bg-card p-4 shadow-sm hover:border-primary/40 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <span className="mb-2 text-2xl">🔬</span>
              <span className="font-medium text-foreground text-sm">
                {TOPIC_LABELS[t]}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {count} questions
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
