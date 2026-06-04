import { readFileSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';
import { ImageQuizStore } from '@/lib/image-quiz-types';
import { TOPIC_LABELS } from '@/lib/quiz-data';

function getStore(): ImageQuizStore {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'lib', 'image-quiz-data.json'), 'utf-8'));
  } catch {
    return { images: [] };
  }
}

export const dynamic = 'force-dynamic';

export default function ImageQuizPage() {
  const store = getStore();
  const images = store.images;

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">Image Quiz</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          Identify labeled structures on real H&E histology slides.
        </p>
      </div>

      {images.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-8 text-center sm:p-16">
          <div className="mb-3 text-5xl">🔬</div>
          <h2 className="mb-2 text-lg font-semibold text-slate-700">No slides available</h2>
          <p className="text-slate-500">Check back later.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {images.map((img) => (
            <Link
              key={img.id}
              href={`/image-quiz/${img.id}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/11]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                  {img.labels.length} marker{img.labels.length !== 1 ? 's' : ''}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-1 text-xs font-medium text-indigo-600">{img.stain}</div>
                <h3 className="mb-1 font-semibold leading-snug text-slate-800">{img.title}</h3>
                <p className="mb-3 flex-1 text-xs leading-5 text-slate-500 line-clamp-2">{img.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="max-w-full rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {TOPIC_LABELS[img.topic] ?? img.topic}
                  </span>
                  <span className="text-sm font-medium text-indigo-600 group-hover:underline">
                    Start →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
