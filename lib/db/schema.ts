import { pgTable, text, integer, timestamp, uuid, real } from 'drizzle-orm/pg-core';

export const quizAttempts = pgTable('quiz_attempts', {
  id: uuid('id').primaryKey().defaultRandom(),
  topic: text('topic').notNull(),
  score: integer('score').notNull(),
  total: integer('total').notNull(),
  percentage: real('percentage').notNull(),
  completedAt: timestamp('completed_at').defaultNow().notNull(),
});

export const quizAnswers = pgTable('quiz_answers', {
  id: uuid('id').primaryKey().defaultRandom(),
  attemptId: uuid('attempt_id').notNull().references(() => quizAttempts.id, { onDelete: 'cascade' }),
  questionId: text('question_id').notNull(),
  topic: text('topic').notNull(),
  selectedIndex: integer('selected_index').notNull(),
  correctIndex: integer('correct_index').notNull(),
  isCorrect: integer('is_correct').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const aiChatMessages = pgTable('ai_chat_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: text('session_id').notNull(),
  role: text('role').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type QuizAttempt = typeof quizAttempts.$inferSelect;
export type NewQuizAttempt = typeof quizAttempts.$inferInsert;
export type QuizAnswer = typeof quizAnswers.$inferSelect;
export type NewQuizAnswer = typeof quizAnswers.$inferInsert;
