'use client';

import { useRef, useState } from 'react';
import { ImageLabel } from '@/lib/image-quiz-types';
import { cn } from '@/lib/utils';

interface Props {
  imageUrl: string;
  labels: ImageLabel[];
  activeMarkerId?: string | null;
  revealedMarkerId?: string | null;
  isCorrect?: boolean | null;
  onMarkerClick?: (label: ImageLabel) => void;
  readonly?: boolean;
}

const MARKER_COLORS = [
  'bg-yellow-400 border-yellow-600',
  'bg-sky-400 border-sky-600',
  'bg-pink-400 border-pink-600',
  'bg-emerald-400 border-emerald-600',
  'bg-violet-400 border-violet-600',
  'bg-orange-400 border-orange-600',
];

export default function ImageViewer({
  imageUrl,
  labels,
  activeMarkerId,
  revealedMarkerId,
  isCorrect,
  onMarkerClick,
  readonly = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(4, Math.max(1, s - e.deltaY * 0.001)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    setDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setDragging(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale === 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };

  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-black select-none">
      {/* Zoom controls */}
      <div className="absolute right-2 top-2 z-20 flex gap-1">
        <button
          onClick={() => setScale((s) => Math.min(4, s + 0.5))}
          className="flex h-8 w-8 items-center justify-center rounded bg-black/65 text-sm text-white hover:bg-black/80 sm:h-7 sm:w-7"
          title="Zoom in"
        >
          +
        </button>
        <button
          onClick={() => setScale((s) => Math.max(1, s - 0.5))}
          className="flex h-8 w-8 items-center justify-center rounded bg-black/65 text-sm text-white hover:bg-black/80 sm:h-7 sm:w-7"
          title="Zoom out"
        >
          −
        </button>
        {scale !== 1 && (
          <button
            onClick={resetZoom}
            className="flex h-8 items-center justify-center rounded bg-black/65 px-2 text-xs text-white hover:bg-black/80 sm:h-7"
          >
            Reset
          </button>
        )}
      </div>

      {/* Image + markers */}
      <div
        ref={containerRef}
        className="relative w-full touch-pan-y"
        style={{
          cursor: dragging ? 'grabbing' : scale > 1 ? 'grab' : 'default',
          touchAction: scale > 1 ? 'none' : 'pan-y',
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            transformOrigin: 'top left',
            transition: dragging ? 'none' : 'transform 0.1s ease',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="Histology slide"
            className="max-h-[72svh] w-full object-contain sm:max-h-none"
            draggable={false}
          />

          {/* Markers */}
          {labels.map((label, i) => {
            const isActive = label.id === activeMarkerId;
            const isRevealed = label.id === revealedMarkerId;
            const colorClass = MARKER_COLORS[i % MARKER_COLORS.length];

            const markerCls = cn(
              'absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-[11px] font-bold text-white shadow-lg transition-transform sm:h-7 sm:w-7 sm:text-xs',
              colorClass,
              isActive && 'ring-4 ring-white scale-125 z-10',
              isRevealed && isCorrect === true && 'ring-4 ring-emerald-400 scale-125 z-10',
              isRevealed && isCorrect === false && 'ring-4 ring-red-400 scale-125 z-10',
              !readonly && 'cursor-pointer hover:scale-110',
            );

            return (
              <button
                key={label.id}
                className={markerCls}
                style={{ left: `${label.xPercent}%`, top: `${label.yPercent}%` }}
                onClick={() => !readonly && onMarkerClick?.(label)}
                title={readonly ? label.marker : `Identify marker ${label.marker}`}
              >
                {label.marker}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
