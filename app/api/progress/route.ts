import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { quizAttempts, quizAnswers } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { topic, score, total, answers } = await request.json();
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const db = getDb();
    if (!db) {
      return NextResponse.json({ ok: true, message: 'No database configured — progress not persisted.' });
    }

    const [attempt] = await db
      .insert(quizAttempts)
      .values({ topic, score, total, percentage })
      .returning();

    if (answers?.length) {
      await db.insert(quizAnswers).values(
        answers.map((a: { questionId: string; selectedIndex: number; correctIndex: number }) => ({
          attemptId: attempt.id,
          questionId: a.questionId,
          topic,
          selectedIndex: a.selectedIndex,
          correctIndex: a.correctIndex,
          isCorrect: a.selectedIndex === a.correctIndex ? 1 : 0,
        }))
      );
    }

    return NextResponse.json({ ok: true, attemptId: attempt.id });
  } catch (err) {
    console.error('Progress API error:', err);
    return NextResponse.json({ error: 'Failed to save progress.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = getDb();
    if (!db) {
      return NextResponse.json({ attempts: [], dbAvailable: false });
    }

    const attempts = await db
      .select()
      .from(quizAttempts)
      .orderBy(desc(quizAttempts.completedAt))
      .limit(50);

    return NextResponse.json({ attempts, dbAvailable: true });
  } catch (err) {
    console.error('Progress GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch progress.' }, { status: 500 });
  }
}
