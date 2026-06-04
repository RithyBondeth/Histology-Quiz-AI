import { readFileSync } from 'fs';
import { join } from 'path';
import { notFound } from 'next/navigation';
import { ImageQuizStore } from '@/lib/image-quiz-types';
import ImageQuizEngine from '@/components/image-quiz/image-quiz-engine';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

function getStore(): ImageQuizStore {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'lib', 'image-quiz-data.json'), 'utf-8'));
  } catch {
    return { images: [] };
  }
}

export default async function ImageQuizDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = getStore();
  const image = store.images.find((img) => img.id === id);

  if (!image) notFound();

  return (
    <div className="mx-auto max-w-5xl px-3 py-5 sm:px-4 sm:py-8">
      <div className="mb-4 sm:mb-6">
        <Link href="/image-quiz" className="inline-flex min-h-10 items-center text-sm text-indigo-600 hover:underline">
          ← All Slides
        </Link>
      </div>
      <ImageQuizEngine image={image} />
    </div>
  );
}
