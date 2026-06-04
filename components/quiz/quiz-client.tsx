'use client';

import { useState, useCallback } from 'react';
import { Topic, TOPIC_LABELS, Question, ALL_QUESTIONS, getQuestionsByTopic } from '@/lib/quiz-data';
import { cn, scoreColor, scoreBg } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, XCircle, RotateCcw, BookOpen, ChevronRight, Brain }  from 'lucide-react';

interface Props {
  topic?: Topic;
  topicLabel?: string;
  initialQuestions?: Question[];
  mixed?: boolean;
}

type Phase = 'intro' | 'quiz' | 'results';

interface Answer {
  questionId: string;
  selectedIndex: number;
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function saveProgressLocally(topic: string, score: number, total: number, answers: Answer[]) {
  try {
    const key = 'histoquiz_progress';
    const existing = JSON.parse(localStorage.getItem(key) ?? '[]');
    existing.push({
      topic,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      completedAt: new Date().toISOString(),
      answers,
    });
    localStorage.setItem(key, JSON.stringify(existing.slice(-200)));
  } catch {}
}

async function saveProgressRemote(topic: string, score: number, total: number, answers: Answer[]) {
  try {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, score, total, answers }),
    });
  } catch {}
}

export default function QuizClient({ topic, topicLabel, initialQuestions, mixed }: Props) {
  const [phase, setPhase] = useState<Phase>(mixed ? 'intro' : 'intro');
  const [questions, setQuestions] = useState<Question[]>(initialQuestions ?? []);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [questionCount, setQuestionCount] = useState(10);

  const startQuiz = useCallback((count: number) => {
    let pool: Question[];
    if (mixed) {
      pool = shuffle(ALL_QUESTIONS).slice(0, count);
    } else {
      pool = shuffle(initialQuestions ?? []).slice(0, count);
    }
    setQuestions(pool);
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
    setPhase('quiz');
  }, [mixed, initialQuestions]);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (selected === null) return;
    const q = questions[current];
    const newAnswers = [...answers, { questionId: q.id, selectedIndex: selected, correctIndex: q.correctIndex }];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      const score = newAnswers.filter((a) => a.selectedIndex === a.correctIndex).length;
      const t = topic ?? 'mixed';
      saveProgressLocally(t, score, newAnswers.length, newAnswers);
      saveProgressRemote(t, score, newAnswers.length, newAnswers);
      setPhase('results');
    }
  };

  const reset = () => {
    setPhase('intro');
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
  };

  const DIFFICULTY_COLORS = {
    easy: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    hard: 'bg-red-100 text-red-700 border-red-200',
  };

  // ── INTRO ────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    const counts = mixed
      ? [5, 10, 15, 20]
      : [5, 10, initialQuestions?.length ?? 0].filter((n, i, arr) => n <= (initialQuestions?.length ?? 0) && arr.indexOf(n) === i);
    return (
      <Card className="mx-auto max-w-2xl shadow-sm">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{mixed ? 'Mixed Quiz' : topicLabel}</CardTitle>
          <CardDescription className="text-base">
            {mixed
              ? 'Random questions from all histology topics.'
              : `${initialQuestions?.length ?? 0} questions available. Choose how many to attempt:`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-3 pt-2">
          {counts.map((n) => (
            <Button key={n} onClick={() => startQuiz(n)} size="lg" className="min-w-32">
              {!mixed && n === (initialQuestions?.length ?? 0) ? `All ${n}` : `${n} Questions`}
            </Button>
          ))}
        </CardContent>
      </Card>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (phase === 'results') {
    const score = answers.filter((a) => a.selectedIndex === a.correctIndex).length;
    const pct = Math.round((score / answers.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
    const label = pct >= 80 ? 'Excellent work!' : pct >= 60 ? 'Good effort!' : 'Keep practising!';
    const resultColor = pct >= 80 ? 'text-emerald-600' : pct >= 60 ? 'text-amber-600' : 'text-red-600';

    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Card className="shadow-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-4 text-6xl">{emoji}</div>
            <h2 className="mb-1 text-2xl font-bold">{label}</h2>
            <p className="mb-6 text-muted-foreground">{topicLabel ?? 'Mixed Quiz'} · {score}/{answers.length} correct</p>
            <div className={`mb-6 text-5xl font-extrabold ${resultColor}`}>{pct}%</div>
            <Progress value={pct} className="mb-6 h-3" />
            <div className="flex justify-center gap-3">
              <Button onClick={() => startQuiz(answers.length)} className="gap-2">
                <RotateCcw className="h-4 w-4" /> Retry
              </Button>
              <Button onClick={reset} variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" /> Change Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Review Answers</h3>
          <div className="space-y-3">
            {answers.map((a, i) => {
              const q = questions[i];
              const correct = a.selectedIndex === a.correctIndex;
              return (
                <Card key={a.questionId} className={cn('border', correct ? 'border-emerald-200 bg-emerald-50/50' : 'border-red-200 bg-red-50/50')}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      {correct
                        ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />}
                      <p className="text-sm font-medium">{q.question}</p>
                    </div>
                    {!correct && (
                      <p className="mb-1 ml-8 text-sm text-red-700">Your answer: <strong>{q.options[a.selectedIndex]}</strong></p>
                    )}
                    <p className="mb-2 ml-8 text-sm text-emerald-700">Correct: <strong>{q.options[a.correctIndex]}</strong></p>
                    <p className="ml-8 rounded-lg bg-background/80 p-3 text-xs text-muted-foreground">{q.explanation}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  const q = questions[current];
  const progress = Math.round(((current) / questions.length) * 100);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{topicLabel ?? 'Mixed Quiz'}</span>
          <span className="font-medium">{current + 1} / {questions.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question card */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Badge className={cn('text-xs font-medium border', DIFFICULTY_COLORS[q.difficulty])}>
              {q.difficulty}
            </Badge>
            <span className="text-xs text-muted-foreground">{TOPIC_LABELS[q.topic]}</span>
          </div>

          <p className="mb-6 text-lg font-medium leading-relaxed">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let extraClass = '';
              if (!revealed) {
                extraClass = selected === idx
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:border-primary/50 hover:bg-accent';
              } else {
                if (idx === q.correctIndex) {
                  extraClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 hover:bg-emerald-50';
                } else if (idx === selected && selected !== q.correctIndex) {
                  extraClass = 'border-red-400 bg-red-50 text-red-900 hover:bg-red-50';
                } else {
                  extraClass = 'border-border bg-muted/40 text-muted-foreground hover:bg-muted/40 cursor-default';
                }
              }

              return (
                <button
                  key={idx}
                  className={cn(
                    'w-full rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-all',
                    extraClass
                  )}
                  onClick={() => handleSelect(idx)}
                >
                  <span className="mr-2.5 font-bold text-muted-foreground">{String.fromCharCode(65 + idx)}.</span>
                  {opt}
                  {revealed && idx === q.correctIndex && <CheckCircle2 className="ml-2 inline h-4 w-4 text-emerald-600" />}
                  {revealed && idx === selected && selected !== q.correctIndex && <XCircle className="ml-2 inline h-4 w-4 text-red-600" />}
                </button>
              );
            })}
          </div>

          {revealed && (
            <>
              <Separator className="my-4" />
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Explanation</p>
                <p className="text-sm text-foreground/80">{q.explanation}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={handleNext} className="gap-2">
                  {current + 1 < questions.length ? 'Next Question' : 'See Results'}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
