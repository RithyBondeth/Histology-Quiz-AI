import TutorClient from '@/components/tutor/tutor-client';

export default function TutorPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col px-4 py-10" style={{ height: 'calc(100vh - 120px)' }}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">AI Histology Tutor</h1>
        <p className="mt-1 text-muted-foreground">
          Ask anything about histology — tissue identification, exam tips, structure comparisons.
        </p>
      </div>
      <TutorClient />
    </div>
  );
}
