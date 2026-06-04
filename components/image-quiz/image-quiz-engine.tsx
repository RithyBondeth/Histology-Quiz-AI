'use client';

import { useState } from 'react';
import { HistologyImage, ImageLabel } from '@/lib/image-quiz-types';
import ImageViewer from './image-viewer';
import { cn, scoreBg, scoreColor } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  image: HistologyImage;
}

interface Answer {
  labelId: string;
  marker: string;
  selectedIndex: number;
  correctIndex: number;
}

type Phase = 'intro' | 'quiz' | 'results';

export default function ImageQuizEngine({ image }: Props) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const labels = image.labels;
  const currentLabel: ImageLabel | undefined = labels[current];

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (selected === null || !currentLabel) return;
    const newAnswers = [
      ...answers,
      {
        labelId: currentLabel.id,
        marker: currentLabel.marker,
        selectedIndex: selected,
        correctIndex: currentLabel.correctIndex,
      },
    ];
    setAnswers(newAnswers);

    if (current + 1 < labels.length) {
      setCurrent(current + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setPhase('results');
    }
  };

  const restart = () => {
    setPhase('intro');
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
  };

  // ── INTRO ─────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="space-y-6">
        <div>
          <div className="mb-1 text-sm font-medium text-indigo-600">{image.stain}</div>
          <h1 className="text-2xl font-bold text-slate-900">{image.title}</h1>
          {image.description && (
            <p className="mt-1 text-slate-600">{image.description}</p>
          )}
        </div>

        <ImageViewer imageUrl={image.imageUrl} labels={image.labels} readonly />

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-slate-800">
            This slide has {labels.length} labeled structure{labels.length !== 1 ? 's' : ''}
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {labels.map((l) => (
              <span
                key={l.id}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {l.marker}
              </span>
            ))}
          </div>
          <p className="mb-4 text-sm text-slate-600">
            You will be shown the slide and asked to identify each labeled structure one at a time.
          </p>
          <button
            onClick={() => setPhase('quiz')}
            className="rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  // ── RESULTS ───────────────────────────────────────────────────────────
  if (phase === 'results') {
    const score = answers.filter((a) => a.selectedIndex === a.correctIndex).length;
    const pct = Math.round((score / answers.length) * 100);

    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mb-2 text-5xl">{pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</div>
          <h2 className="mb-1 text-2xl font-bold text-slate-900">
            {pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good effort!' : 'Keep practising!'}
          </h2>
          <p className="mb-3 text-slate-600">{image.title}</p>
          <div className={cn('inline-block rounded-full px-6 py-2 text-2xl font-bold', scoreBg(pct))}>
            {score}/{answers.length} · {pct}%
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={restart}
              className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Retry
            </button>
            <Link
              href="/image-quiz"
              className="rounded-lg border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              All Slides
            </Link>
          </div>
        </div>

        {/* Review all answers with image */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-800">Slide with All Answers</h3>
          <ImageViewer imageUrl={image.imageUrl} labels={image.labels} readonly />
          <div className="mt-4 space-y-3">
            {answers.map((a) => {
              const label = labels.find((l) => l.id === a.labelId)!;
              const correct = a.selectedIndex === a.correctIndex;
              return (
                <div
                  key={a.labelId}
                  className={cn(
                    'rounded-lg border p-4',
                    correct ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{correct ? '✅' : '❌'}</span>
                    <span className="font-bold text-slate-800">Marker {label.marker}</span>
                  </div>
                  {!correct && (
                    <p className="mt-1 text-sm text-red-700">
                      Your answer: <strong>{label.options[a.selectedIndex]}</strong>
                    </p>
                  )}
                  <p className="mt-1 text-sm text-emerald-700">
                    Correct: <strong>{label.options[a.correctIndex]}</strong>
                  </p>
                  <p className="mt-2 rounded bg-white/60 p-2 text-xs text-slate-600">{label.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ─────────────────────────────────────────────────────────────
  if (!currentLabel) return null;
  const progress = Math.round((current / labels.length) * 100);
  const isCorrect = revealed ? selected === currentLabel.correctIndex : null;

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{image.title}</span>
        <span>Marker {current + 1} of {labels.length}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Image with active marker highlighted */}
      <ImageViewer
        imageUrl={image.imageUrl}
        labels={image.labels}
        activeMarkerId={!revealed ? currentLabel.id : undefined}
        revealedMarkerId={revealed ? currentLabel.id : undefined}
        isCorrect={isCorrect}
      />

      {/* Question card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-5 text-lg font-semibold text-slate-900">
          What does marker{' '}
          <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 font-bold text-white">
            {currentLabel.marker}
          </span>{' '}
          point to?
        </p>

        <div className="space-y-3">
          {currentLabel.options.map((opt, idx) => {
            let cls =
              'w-full rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-all ';
            if (!revealed) {
              cls +=
                selected === idx
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer';
            } else {
              if (idx === currentLabel.correctIndex) {
                cls += 'border-emerald-500 bg-emerald-50 text-emerald-900';
              } else if (idx === selected && selected !== currentLabel.correctIndex) {
                cls += 'border-red-400 bg-red-50 text-red-900';
              } else {
                cls += 'border-slate-200 bg-slate-50 text-slate-500';
              }
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                <span className="mr-2 font-bold text-slate-400">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt}
                {revealed && idx === currentLabel.correctIndex && ' ✓'}
                {revealed && idx === selected && selected !== currentLabel.correctIndex && ' ✗'}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="mt-4 rounded-lg bg-slate-50 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Explanation
            </p>
            <p className="text-sm text-slate-700">{currentLabel.explanation}</p>
          </div>
        )}

        {revealed && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              {current + 1 < labels.length ? 'Next Marker →' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
