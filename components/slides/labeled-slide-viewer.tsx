'use client';

import { useState } from 'react';
import { HistologyImage, ImageLabel } from '@/lib/image-quiz-types';
import { cn } from '@/lib/utils';

interface Props {
  image: HistologyImage;
}

const MARKER_STYLES = [
  { dot: 'bg-yellow-400 border-yellow-600', ring: 'ring-yellow-300', card: 'border-yellow-300 bg-yellow-50' },
  { dot: 'bg-sky-400 border-sky-600', ring: 'ring-sky-300', card: 'border-sky-300 bg-sky-50' },
  { dot: 'bg-pink-400 border-pink-600', ring: 'ring-pink-300', card: 'border-pink-300 bg-pink-50' },
  { dot: 'bg-emerald-400 border-emerald-600', ring: 'ring-emerald-300', card: 'border-emerald-300 bg-emerald-50' },
  { dot: 'bg-violet-400 border-violet-600', ring: 'ring-violet-300', card: 'border-violet-300 bg-violet-50' },
  { dot: 'bg-orange-400 border-orange-600', ring: 'ring-orange-300', card: 'border-orange-300 bg-orange-50' },
];

export default function LabeledSlideViewer({ image }: Props) {
  const [active, setActive] = useState<ImageLabel | null>(null);

  const toggle = (label: ImageLabel) => {
    setActive((prev) => (prev?.id === label.id ? null : label));
  };

  return (
    <div className="relative">
      {/* Image with always-visible markers */}
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full object-contain"
          draggable={false}
        />

        {/* Markers */}
        {image.labels.map((label, i) => {
          const style = MARKER_STYLES[i % MARKER_STYLES.length];
          const isActive = active?.id === label.id;
          return (
            <button
              key={label.id}
              onClick={() => toggle(label)}
              className={cn(
                'absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 text-xs font-bold text-white shadow-lg transition-all duration-150',
                style.dot,
                isActive && `ring-4 ${style.ring} scale-125 z-20`,
                !isActive && 'hover:scale-110 z-10'
              )}
              style={{ left: `${label.xPercent}%`, top: `${label.yPercent}%` }}
              title={label.options[label.correctIndex]}
            >
              {label.marker}
            </button>
          );
        })}

        {/* Popup card on active marker */}
        {active && (() => {
          const idx = image.labels.findIndex((l) => l.id === active.id);
          const style = MARKER_STYLES[idx % MARKER_STYLES.length];
          const left = active.xPercent;
          const top = active.yPercent;
          // Position card: right of marker if left < 60%, else left
          const cardLeft = left < 60 ? `${Math.min(left + 6, 75)}%` : undefined;
          const cardRight = left >= 60 ? `${Math.min(100 - left + 6, 75)}%` : undefined;
          const cardTop = `${Math.max(top - 5, 2)}%`;

          return (
            <div
              className={cn(
                'absolute z-30 w-56 rounded-xl border-2 p-3 shadow-xl backdrop-blur-sm',
                style.card
              )}
              style={{
                left: cardLeft,
                right: cardRight,
                top: cardTop,
              }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-2 top-2 text-slate-400 hover:text-slate-700 text-xs"
              >
                ✕
              </button>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white',
                    style.dot
                  )}
                >
                  {active.marker}
                </span>
                <span className="pr-4 text-sm font-bold text-slate-900">
                  {active.options[active.correctIndex]}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700">{active.explanation}</p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
