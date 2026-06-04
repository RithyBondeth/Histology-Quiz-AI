import Link from "next/link";
import { TOPIC_LABELS, Topic } from "@/lib/quiz-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Brain,
  BookOpen,
  FlaskConical,
  BarChart3,
  Layers,
  Image as ImageIcon,
  ArrowRight,
  Target,
  Microscope,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const TOPIC_GROUPS: {
  label: string;
  emoji: string;
  color: string;
  topics: Topic[];
}[] = [
  {
    label: "Lecture 1 — Introduction: Histology, Fixation & Lab Safety",
    emoji: "🔬",
    color: "bg-violet-500/10 text-violet-700 border-violet-200",
    topics: [
      "history-of-histology",
      "specimen-collection",
      "fixation-preservation-objectives",
      "fixation-methods",
      "fixation-antigens",
      "fixation-factors",
      "lab-safety-overview",
      "chemical-hazards-histology",
      "physical-biological-hazards",
    ],
  },
  {
    label: "Lecture 2 — Lab Workflow: Fixation, Processing & Embedding",
    emoji: "🧪",
    color: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
    topics: [
      "histological-workflow",
      "specimen-identification",
      "accessioning",
      "fixation",
      "gross-examination",
      "skin-biopsy-types",
      "tissue-processing",
      "embedding",
      "sectioning",
      "staining",
      "slide-distribution",
    ],
  },
  {
    label: "Microscopy — Tissue Identification (H&E Slides)",
    emoji: "🔭",
    color: "bg-sky-500/10 text-sky-700 border-sky-200",
    topics: [
      "artery",
      "vein",
      "trachea",
      "oesophagus",
      "thyroid-gland",
      "liver",
      "kidney",
      "lung",
      "bronchus",
      "bronchiole",
      "ileum",
      "thick-skin",
      "thin-skin",
      "hairy-skin",
      "urinary-bladder",
    ],
  },
  {
    label: "Lecture 3 — Basic Tissue Types",
    emoji: "🧬",
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    topics: [
      "epithelial-tissue",
      "simple-epithelium",
      "stratified-epithelium",
      "connective-tissue-overview",
      "connective-tissue-fibres",
      "loose-connective-tissue",
      "dense-connective-tissue",
      "cartilage",
      "bone",
      "blood-tissue",
      "nervous-tissue",
      "muscular-tissue",
    ],
  },
  {
    label: "Lecture 5 — Cell Injury, Inflammation & Diabetes",
    emoji: "🩺",
    color: "bg-rose-500/10 text-rose-700 border-rose-200",
    topics: [
      "cell-injury-concepts",
      "reversible-irreversible-injury",
      "cellular-adaptations",
      "inflammation",
      "islets-of-langerhans",
      "diabetes-mellitus",
    ],
  },
  {
    label: "Lecture 6 — Diseases, Neoplasms & Normal Skin Histology",
    emoji: "🫀",
    color: "bg-red-500/10 text-red-700 border-red-200",
    topics: [
      "atherosclerosis",
      "malignant-melanoma",
      "basal-cell-carcinoma",
      "squamous-cell-carcinoma",
      "skin-epidermis",
      "skin-dermis",
      "skin-appendages",
    ],
  },
  {
    label: "Lecture 7 — H&E Staining & Special Stains",
    emoji: "🎨",
    color: "bg-amber-500/10 text-amber-700 border-amber-200",
    topics: [
      "he-staining-chemistry",
      "he-staining-procedure",
      "van-gieson-stain",
      "masson-trichrome",
    ],
  },
  {
    label: "Lecture 8 — Quality Control & Artefacts",
    emoji: "✅",
    color: "bg-green-500/10 text-green-700 border-green-200",
    topics: [
      "quality-control-overview",
      "qc-three-phases",
      "pre-processing-artefacts",
      "fixation-artefacts",
      "processing-artefacts",
    ],
  },
  {
    label: "Lecture 10 — Immunohistochemistry (IHC)",
    emoji: "🧫",
    color: "bg-purple-500/10 text-purple-700 border-purple-200",
    topics: [
      "ihc-principles",
      "ihc-antibody-types",
      "ihc-techniques",
      "ihc-antigen-retrieval",
      "ihc-controls-applications",
    ],
  },
  {
    label: "Lecture 11 — Cytology",
    emoji: "🦠",
    color: "bg-orange-500/10 text-orange-700 border-orange-200",
    topics: [
      "cytology-overview",
      "pap-stain-preparation",
      "cervical-cancer-hpv",
      "pap-smear-results",
      "cytology-morphology",
    ],
  },
];

const features = [
  {
    icon: Brain,
    title: "MCQ Quiz",
    desc: "432 exam-style questions with instant feedback and explanations.",
    href: "/quiz",
    cta: "Start Quiz",
    image: "/slides/kidney-1.jpg",
  },
  {
    icon: BookOpen,
    title: "Study Notes",
    desc: "Concise tissue guides with features, layers, tips, and traps.",
    href: "/study",
    cta: "Open Notes",
    image: "/slides/ileum-1.jpg",
  },
  {
    icon: FlaskConical,
    title: "AI Tutor",
    desc: "Ask slide ID, stain chemistry, and exam strategy questions.",
    href: "/tutor",
    cta: "Chat Now",
    image: "/slides/trachea-1.jpg",
  },
  {
    icon: ImageIcon,
    title: "Image Quiz",
    desc: "Identify labeled structures on real histology slide images.",
    href: "/image-quiz",
    cta: "Test Slides",
    image: "/slides/masson-1.jpg",
  },
];

const stats = [
  { icon: Layers, value: "10", label: "Lectures" },
  { icon: Target, value: "79", label: "Topics" },
  { icon: Brain, value: "432", label: "MCQs" },
  { icon: ImageIcon, value: "42", label: "Slides" },
];

export default function HomePage() {
  const totalTopics = TOPIC_GROUPS.reduce((s, g) => s + g.topics.length, 0);

  return (
    <div className="flex flex-col bg-[linear-gradient(180deg,oklch(0.985_0.012_95),oklch(0.965_0.018_86))]">
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-slate-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/slides/thyroid-2.jpg"
          alt="Histology slide background"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-slate-950/58" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-16">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge className="border-white/20 bg-white/12 px-4 py-1.5 text-sm text-white shadow-sm backdrop-blur">
                MMS2200 Histology
              </Badge>
              <Badge className="border-rose-200/30 bg-rose-200/15 px-4 py-1.5 text-sm text-rose-50 shadow-sm backdrop-blur">
                Made for Salyna
              </Badge>
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              HistoQuiz
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
              A richer study desk for mastering slides, stains, tissue layers,
              and exam-style histology questions across all {totalTopics}{" "}
              topics.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white px-7 text-slate-950 shadow-lg shadow-black/20 hover:bg-stone-100",
                )}
              >
                Start Practising <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/slides"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/35 bg-white/10 px-7 text-white backdrop-blur hover:bg-white/20 hover:text-white",
                )}
              >
                View Labeled Images
              </Link>
            </div>
          </div>

          <div className="mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-white/15 bg-white/12 p-4 text-white shadow-sm backdrop-blur"
              >
                <s.icon className="mb-3 h-5 w-5 text-cyan-100" />
                <div className="text-3xl font-black">{s.value}</div>
                <div className="mt-1 text-xs uppercase text-stone-200">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white/80 px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Microscope className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-950">Slide-first revision</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Real image references are kept close to every practice mode.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-white">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-950">Exam feedback loop</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Quiz, review mistakes, jump into notes, and retry weak areas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-700 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-950">Focused tutor help</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                The AI tutor is prompted around the MMS2200 histology scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-cyan-700">
              Study modes
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              Choose the way you want to revise
            </h2>
          </div>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-slate-300 bg-white text-slate-900 hover:bg-stone-100",
            )}
          >
            <BarChart3 className="mr-2 h-4 w-4" /> View Progress
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group overflow-hidden border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/25" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-950 shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-slate-950">{f.title}</h3>
                <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-cyan-700">
                  {f.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white/75 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-rose-700">
                Lecture map
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                Browse topics by lecture
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Every topic links straight to its quiz, so revision can move from
              broad lecture review to targeted practice.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {TOPIC_GROUPS.map((group) => (
              <section
                key={group.label}
                className="border border-stone-200 bg-stone-50/80 p-5 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                      {group.emoji}
                    </span>
                    <h3 className="text-base font-black leading-snug text-slate-950">
                      {group.label}
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="shrink-0 bg-white text-slate-700"
                  >
                    {group.topics.length}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.topics.map((topic) => (
                    <Link
                      key={topic}
                      href={`/quiz?topic=${topic}`}
                      className="rounded-md border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-900"
                    >
                      {TOPIC_LABELS[topic]}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
