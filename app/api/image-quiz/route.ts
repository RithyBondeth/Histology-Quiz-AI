import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { ImageQuizStore, HistologyImage } from '@/lib/image-quiz-types';

const DATA_PATH = join(process.cwd(), 'lib', 'image-quiz-data.json');

function readStore(): ImageQuizStore {
  try {
    return JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
  } catch {
    return { images: [] };
  }
}

function writeStore(store: ImageQuizStore) {
  writeFileSync(DATA_PATH, JSON.stringify(store, null, 2), 'utf-8');
}

export async function GET() {
  const store = readStore();
  return NextResponse.json(store);
}

export async function POST(request: NextRequest) {
  const body: HistologyImage = await request.json();
  const store = readStore();

  const existing = store.images.findIndex((img) => img.id === body.id);
  if (existing >= 0) {
    store.images[existing] = body;
  } else {
    store.images.push(body);
  }

  try {
    writeStore(store);
  } catch {
    return NextResponse.json(
      { error: 'Cannot write to file system. This feature requires running the app locally.' },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const store = readStore();
  store.images = store.images.filter((img) => img.id !== id);
  try {
    writeStore(store);
  } catch {
    return NextResponse.json({ error: 'Cannot write to file system.' }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}
