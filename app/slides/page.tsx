import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { ImageQuizStore, ImageLabel } from "@/lib/image-quiz-types";
import { TOPIC_LABELS, TOPICS, Topic } from "@/lib/quiz-data";
import LabeledSlideViewer from "@/components/slides/labeled-slide-viewer";

export const dynamic = "force-dynamic";

function getStore(): ImageQuizStore {
  try {
    return JSON.parse(
      readFileSync(join(process.cwd(), "lib", "image-quiz-data.json"), "utf-8"),
    );
  } catch {
    return { images: [] };
  }
}

const MARKER_COLORS = [
  "border-yellow-300 bg-yellow-50",
  "border-sky-300 bg-sky-50",
  "border-pink-300 bg-pink-50",
  "border-emerald-300 bg-emerald-50",
  "border-violet-300 bg-violet-50",
  "border-orange-300 bg-orange-50",
];

const DOT_COLORS = [
  "bg-yellow-400",
  "bg-sky-400",
  "bg-pink-400",
  "bg-emerald-400",
  "bg-violet-400",
  "bg-orange-400",
];

export default async function SlidesPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const store = getStore();

  const activeTopics = TOPICS.filter((t) =>
    store.images.some((img) => img.topic === t),
  );
  const selectedTopic = (
    topic && activeTopics.includes(topic as Topic) ? topic : null
  ) as Topic | null;

  const visibleImages = store.images.filter(
    (img) => !selectedTopic || img.topic === selectedTopic,
  );

  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-5 sm:mb-6">
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Labeled Images — Exam Review
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          All structures are labeled. Click any marker on the image to read
          about it.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Sidebar */}
        <aside className="lg:w-52 lg:shrink-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Filter by topic
          </p>
          <nav className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-2 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0">
            <Link
              href="/slides"
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:block ${
                !selectedTopic
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              All tissues
            </Link>
            {activeTopics.map((t) => (
              <Link
                key={t}
                href={`/slides?topic=${t}`}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:block ${
                  selectedTopic === t
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {TOPIC_LABELS[t]}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-10 sm:space-y-12">
          {visibleImages.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-slate-200 p-8 text-center text-slate-500 sm:p-12">
              No slides available.
            </div>
          ) : (
            visibleImages.map((img) => (
              <section key={img.id} id={img.id} className="scroll-mt-20">
                {/* Section header */}
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <span className="mb-0.5 block text-xs font-semibold uppercase tracking-wide text-indigo-500">
                      {TOPIC_LABELS[img.topic]} · {img.stain}
                    </span>
                    <h2 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {img.title}
                    </h2>
                    {img.description && (
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {img.description}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/image-quiz/${img.id}`}
                    className="inline-flex min-h-10 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100 sm:ml-4 sm:shrink-0"
                  >
                    Test yourself →
                  </Link>
                </div>

                {/* Labeled image (client component) */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm">
                  <LabeledSlideViewer image={img} />
                </div>

                {/* Legend cards */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {img.labels.map((label: ImageLabel, i: number) => (
                    <div
                      key={label.id}
                      className={`rounded-lg border p-3 ${MARKER_COLORS[i % MARKER_COLORS.length]}`}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${DOT_COLORS[i % DOT_COLORS.length]}`}
                        >
                          {label.marker}
                        </span>
                        <span className="min-w-0 text-sm font-semibold leading-snug text-slate-800 break-words">
                          {label.options[label.correctIndex]}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600 break-words">
                        {label.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
