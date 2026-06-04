'use client';

import { useEffect, useState } from 'react';
import { TOPIC_LABELS, TOPICS, Topic } from '@/lib/quiz-data';
import { scoreColor, scoreBg, cn } from '@/lib/utils';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface AttemptRecord {
  topic: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

function loadLocal(): AttemptRecord[] {
  try {
    return JSON.parse(localStorage.getItem('histoquiz_progress') ?? '[]');
  } catch {
    return [];
  }
}

function clearLocal() {
  try {
    localStorage.removeItem('histoquiz_progress');
  } catch {}
}

export default function DashboardClient() {
  const [attempts, setAttempts] = useState<AttemptRecord[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAttempts(loadLocal());
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="text-muted-foreground text-sm">Loading…</div>;
  }

  if (attempts.length === 0) {
    return (
      <Card className="border-2 border-dashed">
        <CardContent className="p-12 text-center">
          <div className="mb-3 text-4xl">📊</div>
          <h2 className="mb-2 text-lg font-semibold">No quiz attempts yet</h2>
          <p className="mb-6 text-muted-foreground">Complete a quiz to see your progress here.</p>
          <Link href="/quiz" className={cn(buttonVariants({}))}>Start a Quiz</Link>
        </CardContent>
      </Card>
    );
  }

  const totalQuizzes = attempts.length;
  const avgScore = Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / totalQuizzes);
  const bestScore = Math.max(...attempts.map((a) => a.percentage));

  // Per-topic stats
  const topicStats = TOPICS.map((topic) => {
    const topicAttempts = attempts.filter((a) => a.topic === topic);
    if (topicAttempts.length === 0) return null;
    const avg = Math.round(topicAttempts.reduce((s, a) => s + a.percentage, 0) / topicAttempts.length);
    return { topic, avg, count: topicAttempts.length };
  }).filter(Boolean) as { topic: Topic; avg: number; count: number }[];

  const weakTopics = topicStats.filter((t) => t.avg < 70).sort((a, b) => a.avg - b.avg);
  const recent = [...attempts].reverse().slice(0, 10);

  return (
    <div className="space-y-8">
      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">Total Quizzes</p>
            <p className="mt-1 text-4xl font-bold text-primary">{totalQuizzes}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">Average Score</p>
            <p className={cn('mt-1 text-4xl font-bold', scoreColor(avgScore))}>{avgScore}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">Best Score</p>
            <p className={cn('mt-1 text-4xl font-bold', scoreColor(bestScore))}>{bestScore}%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Per-topic breakdown */}
        <Card>
          <CardHeader><CardTitle className="text-base">Performance by Topic</CardTitle></CardHeader>
          <CardContent>
            {topicStats.length === 0 ? (
              <p className="text-sm text-muted-foreground">No topic-specific attempts yet.</p>
            ) : (
              <div className="space-y-4">
                {topicStats.sort((a, b) => b.avg - a.avg).map(({ topic, avg, count }) => (
                  <div key={topic}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-foreground">{TOPIC_LABELS[topic]}</span>
                      <span className={cn('font-semibold', scoreColor(avg))}>{avg}%</span>
                    </div>
                    <Progress
                      value={avg}
                      className="h-2"
                    />
                    <p className="mt-0.5 text-xs text-muted-foreground">{count} attempt{count > 1 ? 's' : ''}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Weak topics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {weakTopics.length > 0 ? 'Weak Areas to Revise' : 'No Weak Areas'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weakTopics.length === 0 ? (
              <p className="text-sm text-muted-foreground">All practised topics are above 70%. Great work!</p>
            ) : (
              <div className="space-y-3">
                {weakTopics.map(({ topic, avg }) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between rounded-lg border border-red-100 bg-red-50 p-3"
                  >
                    <div>
                      <p className="font-medium text-red-800 text-sm">{TOPIC_LABELS[topic]}</p>
                      <p className="text-xs text-red-600">Average: {avg}%</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/study?topic=${topic}`} className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'h-7 text-xs border-red-200 text-red-700 hover:bg-red-50')}>Study</Link>
                      <Link href={`/quiz?topic=${topic}`} className={cn(buttonVariants({ size: 'sm' }), 'h-7 text-xs bg-red-600 hover:bg-red-700')}>Retry</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent attempts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Recent Attempts</CardTitle>
            <button
              onClick={() => {
                clearLocal();
                setAttempts([]);
              }}
              className="text-xs text-destructive hover:underline"
            >
              Clear history
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recent.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-muted/40 px-4 py-3 text-sm"
              >
                <div>
                  <span className="font-medium text-foreground">
                    {a.topic === 'mixed' ? 'Mixed Quiz' : TOPIC_LABELS[a.topic as Topic] ?? a.topic}
                  </span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {new Date(a.completedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-xs">
                    {a.score}/{a.total}
                  </span>
                  <Badge variant="secondary" className={cn('text-xs font-semibold', scoreBg(a.percentage))}>
                    {a.percentage}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
