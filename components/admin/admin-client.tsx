'use client';

import { useState, useRef, useEffect } from 'react';
import { HistologyImage, ImageLabel } from '@/lib/image-quiz-types';
import { TOPICS, TOPIC_LABELS, Topic } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Step = 'list' | 'add-image' | 'place-labels' | 'edit-label';

const MARKER_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function AdminClient() {
  const [step, setStep] = useState<Step>('list');
  const [images, setImages] = useState<HistologyImage[]>([]);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Current image being built
  const [draft, setDraft] = useState<Partial<HistologyImage>>({
    labels: [],
    stain: 'H&E',
  });
  const [editingLabel, setEditingLabel] = useState<ImageLabel | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    fetch('/api/image-quiz')
      .then((r) => r.json())
      .then((d) => setImages(d.images ?? []));
  }, []);

  // ── helpers ──────────────────────────────────────────────────────────────
  const refreshList = async () => {
    const d = await fetch('/api/image-quiz').then((r) => r.json());
    setImages(d.images ?? []);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (step !== 'place-labels') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    const nextMarker = MARKER_LETTERS[(draft.labels?.length ?? 0) % MARKER_LETTERS.length];
    setEditingLabel({
      id: crypto.randomUUID(),
      marker: nextMarker,
      xPercent,
      yPercent,
      answer: '',
      options: ['', '', '', ''],
      correctIndex: 0,
      explanation: '',
    });
    setStep('edit-label');
  };

  const saveLabel = () => {
    if (!editingLabel) return;
    setDraft((d) => ({
      ...d,
      labels: [
        ...(d.labels ?? []).filter((l) => l.id !== editingLabel.id),
        editingLabel,
      ],
    }));
    setEditingLabel(null);
    setStep('place-labels');
  };

  const removeLabel = (id: string) => {
    setDraft((d) => ({ ...d, labels: (d.labels ?? []).filter((l) => l.id !== id) }));
  };

  const editExistingLabel = (label: ImageLabel) => {
    setEditingLabel({ ...label });
    setStep('edit-label');
  };

  const saveImage = async () => {
    if (!draft.imageUrl || !draft.title || !draft.topic) {
      setSaveError('Title, image URL and topic are required.');
      return;
    }
    setSaving(true);
    setSaveError(null);
    const image: HistologyImage = {
      id: draft.id ?? crypto.randomUUID(),
      topic: draft.topic as Topic,
      title: draft.title!,
      imageUrl: draft.imageUrl!,
      description: draft.description ?? '',
      stain: draft.stain ?? 'H&E',
      labels: draft.labels ?? [],
      createdAt: draft.createdAt ?? new Date().toISOString(),
    };
    const res = await fetch('/api/image-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(image),
    });
    const data = await res.json();
    if (data.error) {
      setSaveError(data.error);
    } else {
      await refreshList();
      setDraft({ labels: [], stain: 'H&E' });
      setStep('list');
    }
    setSaving(false);
  };

  const deleteImage = async (id: string) => {
    if (!confirm('Delete this slide?')) return;
    await fetch('/api/image-quiz', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    await refreshList();
  };

  const startEdit = (img: HistologyImage) => {
    setDraft({ ...img });
    setStep('place-labels');
  };

  // ── LIST ─────────────────────────────────────────────────────────────────
  if (step === 'list') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            {images.length} slide{images.length !== 1 ? 's' : ''} in library
          </h2>
          <button
            onClick={() => { setDraft({ labels: [], stain: 'H&E' }); setStep('add-image'); }}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            + Add Slide
          </button>
        </div>

        {images.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-200 p-12 text-center text-slate-500">
            No slides yet. Click <strong>+ Add Slide</strong> to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {images.map((img) => (
              <div
                key={img.id}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="h-16 w-24 shrink-0 rounded-lg object-cover bg-slate-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 truncate">{img.title}</p>
                  <p className="text-sm text-slate-500">
                    {TOPIC_LABELS[img.topic]} · {img.labels.length} marker{img.labels.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link
                    href={`/image-quiz/${img.id}`}
                    className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Preview
                  </Link>
                  <button
                    onClick={() => startEdit(img)}
                    className="rounded-md border border-indigo-200 px-3 py-1.5 text-xs font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteImage(img.id)}
                    className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── ADD IMAGE ─────────────────────────────────────────────────────────────
  if (step === 'add-image') {
    return (
      <div className="max-w-xl space-y-5">
        <button onClick={() => setStep('list')} className="text-sm text-indigo-600 hover:underline">
          ← Back
        </button>
        <h2 className="text-xl font-bold text-slate-900">Add Slide</h2>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Image URL *</span>
          <input
            type="url"
            placeholder="https://example.com/artery-slide.jpg"
            value={draft.imageUrl ?? ''}
            onChange={(e) => setDraft((d) => ({ ...d, imageUrl: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <p className="mt-1 text-xs text-slate-400">
            Paste the direct URL of your H&amp;E slide image (JPG/PNG).
          </p>
        </label>

        {draft.imageUrl && (
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={draft.imageUrl} alt="Preview" className="max-h-48 w-full object-contain" />
          </div>
        )}

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Title *</span>
          <input
            type="text"
            placeholder="e.g. Artery cross-section (H&E)"
            value={draft.title ?? ''}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Topic *</span>
          <select
            value={draft.topic ?? ''}
            onChange={(e) => setDraft((d) => ({ ...d, topic: e.target.value as Topic }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">Select topic…</option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Stain</span>
          <input
            type="text"
            placeholder="H&E"
            value={draft.stain ?? 'H&E'}
            onChange={(e) => setDraft((d) => ({ ...d, stain: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Description</span>
          <textarea
            rows={2}
            placeholder="Brief description of what is shown…"
            value={draft.description ?? ''}
            onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>

        <button
          onClick={() => {
            if (!draft.imageUrl || !draft.title || !draft.topic) {
              alert('Please fill in URL, title, and topic.');
              return;
            }
            setStep('place-labels');
          }}
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors"
        >
          Next: Place Labels on Slide →
        </button>
      </div>
    );
  }

  // ── PLACE LABELS ──────────────────────────────────────────────────────────
  if (step === 'place-labels') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button onClick={() => setStep('add-image')} className="text-sm text-indigo-600 hover:underline">
            ← Back
          </button>
          <h2 className="text-xl font-bold text-slate-900">Place Markers</h2>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          <strong>Click anywhere on the image</strong> to place a marker. Then fill in the label
          details (question + answer options).
        </div>

        {/* Image with existing markers */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={draft.imageUrl}
            alt="Slide"
            className="w-full cursor-crosshair object-contain"
            onClick={handleImageClick}
            draggable={false}
          />
          {(draft.labels ?? []).map((label) => (
            <button
              key={label.id}
              className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-yellow-600 bg-yellow-400 text-xs font-bold text-white shadow-lg hover:scale-110 transition-transform"
              style={{ left: `${label.xPercent}%`, top: `${label.yPercent}%` }}
              onClick={(e) => { e.stopPropagation(); editExistingLabel(label); }}
              title={`Edit marker ${label.marker}`}
            >
              {label.marker}
            </button>
          ))}
        </div>

        {/* Label list */}
        {(draft.labels ?? []).length > 0 && (
          <div>
            <h3 className="mb-2 font-medium text-slate-700">Labels placed:</h3>
            <div className="space-y-2">
              {(draft.labels ?? []).map((l) => (
                <div
                  key={l.id}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-white">
                      {l.marker}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {l.options[l.correctIndex] || <span className="text-red-500">No answer set</span>}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editExistingLabel(l)}
                      className="text-xs text-indigo-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeLabel(l.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {saveError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {saveError}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={saveImage}
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving…' : '✓ Save Slide'}
          </button>
          <button
            onClick={() => { setDraft({ labels: [], stain: 'H&E' }); setStep('list'); }}
            className="rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // ── EDIT LABEL ────────────────────────────────────────────────────────────
  if (step === 'edit-label' && editingLabel) {
    const setOpt = (idx: number, val: string) => {
      setEditingLabel((l) => {
        if (!l) return l;
        const opts = [...l.options];
        opts[idx] = val;
        return { ...l, options: opts };
      });
    };

    return (
      <div className="max-w-lg space-y-5">
        <button onClick={() => { setEditingLabel(null); setStep('place-labels'); }} className="text-sm text-indigo-600 hover:underline">
          ← Back to slide
        </button>
        <h2 className="text-xl font-bold text-slate-900">
          Edit Marker {editingLabel.marker}
        </h2>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Marker letter</span>
          <select
            value={editingLabel.marker}
            onChange={(e) => setEditingLabel((l) => l ? { ...l, marker: e.target.value } : l)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            {MARKER_LETTERS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Answer options (4 options required)</p>
          <div className="space-y-2">
            {editingLabel.options.map((opt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correct"
                  checked={editingLabel.correctIndex === idx}
                  onChange={() => setEditingLabel((l) => l ? { ...l, correctIndex: idx } : l)}
                  className="accent-emerald-600"
                  title="Mark as correct answer"
                />
                <input
                  type="text"
                  placeholder={`Option ${String.fromCharCode(65 + idx)}${editingLabel.correctIndex === idx ? ' (correct)' : ''}`}
                  value={opt}
                  onChange={(e) => setOpt(idx, e.target.value)}
                  className={cn(
                    'flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200',
                    editingLabel.correctIndex === idx
                      ? 'border-emerald-400 bg-emerald-50 focus:border-emerald-500'
                      : 'border-slate-300 focus:border-indigo-400'
                  )}
                />
              </div>
            ))}
            <p className="text-xs text-slate-400">Select the radio button next to the correct answer.</p>
          </div>
        </div>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Explanation</span>
          <textarea
            rows={3}
            placeholder="Why is this the correct answer? What visual clues confirm it?"
            value={editingLabel.explanation}
            onChange={(e) => setEditingLabel((l) => l ? { ...l, explanation: e.target.value } : l)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>

        <button
          onClick={saveLabel}
          disabled={!editingLabel.options[editingLabel.correctIndex]}
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          Save Marker
        </button>
      </div>
    );
  }

  return null;
}
