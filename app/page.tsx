import Link from 'next/link';
import { TOPIC_LABELS, Topic } from '@/lib/quiz-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Brain, BookOpen, FlaskConical, BarChart3, Layers, Image, ArrowRight, Zap, Target, Clock } from 'lucide-react';

const TOPIC_GROUPS: { label: string; emoji: string; color: string; topics: Topic[] }[] = [
  {
    label: 'Lecture 1 — Introduction: Histology, Fixation & Lab Safety',
    emoji: '🔬',
    color: 'bg-violet-500/10 text-violet-700 border-violet-200',
    topics: ['history-of-histology', 'specimen-collection', 'fixation-preservation-objectives', 'fixation-methods', 'fixation-antigens', 'fixation-factors', 'lab-safety-overview', 'chemical-hazards-histology', 'physical-biological-hazards'],
  },
  {
    label: 'Lecture 2 — Lab Workflow: Fixation, Processing & Embedding',
    emoji: '🧪',
    color: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
    topics: ['histological-workflow', 'specimen-identification', 'accessioning', 'fixation', 'gross-examination', 'skin-biopsy-types', 'tissue-processing', 'embedding', 'sectioning', 'staining', 'slide-distribution'],
  },
  {
    label: 'Microscopy — Tissue Identification (H&E Slides)',
    emoji: '🔭',
    color: 'bg-sky-500/10 text-sky-700 border-sky-200',
    topics: ['artery', 'vein', 'trachea', 'oesophagus', 'thyroid-gland', 'liver', 'kidney', 'lung', 'bronchus', 'bronchiole', 'ileum', 'thick-skin', 'thin-skin', 'hairy-skin', 'urinary-bladder'],
  },
  {
    label: 'Lecture 3 — Basic Tissue Types',
    emoji: '🧬',
    color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
    topics: ['epithelial-tissue', 'simple-epithelium', 'stratified-epithelium', 'connective-tissue-overview', 'connective-tissue-fibres', 'loose-connective-tissue', 'dense-connective-tissue', 'cartilage', 'bone', 'blood-tissue', 'nervous-tissue', 'muscular-tissue'],
  },
  {
    label: 'Lecture 5 — Cell Injury, Inflammation & Diabetes',
    emoji: '🩺',
    color: 'bg-rose-500/10 text-rose-700 border-rose-200',
    topics: ['cell-injury-concepts', 'reversible-irreversible-injury', 'cellular-adaptations', 'inflammation', 'islets-of-langerhans', 'diabetes-mellitus'],
  },
  {
    label: 'Lecture 6 — Diseases, Neoplasms & Normal Skin Histology',
    emoji: '🫀',
    color: 'bg-red-500/10 text-red-700 border-red-200',
    topics: ['atherosclerosis', 'malignant-melanoma', 'basal-cell-carcinoma', 'squamous-cell-carcinoma', 'skin-epidermis', 'skin-dermis', 'skin-appendages'],
  },
  {
    label: 'Lecture 7 — H&E Staining & Special Stains',
    emoji: '🎨',
    color: 'bg-amber-500/10 text-amber-700 border-amber-200',
    topics: ['he-staining-chemistry', 'he-staining-procedure', 'van-gieson-stain', 'masson-trichrome'],
  },
  {
    label: 'Lecture 8 — Quality Control & Artefacts',
    emoji: '✅',
    color: 'bg-green-500/10 text-green-700 border-green-200',
    topics: ['quality-control-overview', 'qc-three-phases', 'pre-processing-artefacts', 'fixation-artefacts', 'processing-artefacts'],
  },
  {
    label: 'Lecture 10 — Immunohistochemistry (IHC)',
    emoji: '🧫',
    color: 'bg-purple-500/10 text-purple-700 border-purple-200',
    topics: ['ihc-principles', 'ihc-antibody-types', 'ihc-techniques', 'ihc-antigen-retrieval', 'ihc-controls-applications'],
  },
  {
    label: 'Lecture 11 — Cytology',
    emoji: '🦠',
    color: 'bg-orange-500/10 text-orange-700 border-orange-200',
    topics: ['cytology-overview', 'pap-stain-preparation', 'cervical-cancer-hpv', 'pap-smear-results', 'cytology-morphology'],
  },
];

const features = [
  {
    icon: Brain,
    title: 'MCQ Quiz',
    desc: 'Exam-style questions with instant feedback and detailed explanations across all topics.',
    href: '/quiz',
    cta: 'Start Quiz',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: BookOpen,
    title: 'Study Notes',
    desc: 'Concise identification guides, key features, mnemonics and common mistakes.',
    href: '/study',
    cta: 'Open Notes',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: FlaskConical,
    title: 'AI Tutor',
    desc: 'Ask anything about histology — slide identification, exam strategies, concepts.',
    href: '/tutor',
    cta: 'Chat Now',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: BarChart3,
    title: 'Dashboard',
    desc: 'Track scores, identify weak topics, and monitor your improvement over time.',
    href: '/dashboard',
    cta: 'View Progress',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const stats = [
  { icon: Layers, value: '10', label: 'Lectures' },
  { icon: Target, value: '73', label: 'Topics' },
  { icon: Brain, value: '400+', label: 'MCQ Questions' },
  { icon: Zap, value: '24/7', label: 'AI Tutoring' },
];

export default function HomePage() {
  const totalTopics = TOPIC_GROUPS.reduce((s, g) => s + g.topics.length, 0);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 border-pink-400/40 bg-pink-400/10 text-pink-300 text-sm px-4 py-1.5">
            💜 Made just for you, Salyna
          </Badge>
          <Badge variant="outline" className="mb-6 border-violet-400/40 bg-violet-400/10 text-violet-300 text-sm px-4 py-1.5">
            🎓 MMS2200 · ECU Medical Laboratory Science
          </Badge>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Master{' '}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              Histology
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-300">
            Interactive practice quizzes, AI-powered tutoring, and comprehensive study notes for all {totalTopics} topics. Ace your exam.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-slate-400 italic">
            You've got this, Salyna — every slide, every stain, every question. I'm rooting for you. 🔬✨
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quiz" className={cn(buttonVariants({ size: 'lg' }), 'bg-violet-600 hover:bg-violet-700 text-white px-8')}>
              Start Practising <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/study" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'border-slate-600 bg-white/5 text-white hover:bg-white/10 px-8')}>
              Browse Study Notes
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto mt-16 max-w-3xl grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <s.icon className="mx-auto mb-1 h-5 w-5 text-violet-400" />
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Everything you need to succeed</h2>
          <p className="mt-2 text-muted-foreground">Four integrated tools designed for MMS2200 students</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.href} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-border/60">
              <CardHeader className="pb-3">
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}>
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{f.desc}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href={f.href} className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'w-full group-hover:border-primary group-hover:text-primary transition-colors')}>
                  {f.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Topic groups */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">Browse Topics by Lecture</h2>
          <p className="mt-2 text-muted-foreground">Click any topic to jump straight to its quiz</p>
        </div>
        <div className="space-y-10">
          {TOPIC_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="text-lg font-semibold text-foreground">{group.label}</h3>
                </div>
                <Badge variant="secondary" className="text-xs">{group.topics.length} topics</Badge>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.topics.map((topic) => (
                  <Link
                    key={topic}
                    href={`/quiz?topic=${topic}`}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5 ${group.color}`}
                  >
                    <span className="truncate">{TOPIC_LABELS[topic]}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
