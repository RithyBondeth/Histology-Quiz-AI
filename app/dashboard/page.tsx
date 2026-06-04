import DashboardClient from '@/components/dashboard/dashboard-client';

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold">Progress Dashboard</h1>
      <p className="mb-8 text-muted-foreground">
        Track your quiz performance and identify areas for improvement.
      </p>
      <DashboardClient />
    </div>
  );
}
