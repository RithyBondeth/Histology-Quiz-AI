import AdminClient from '@/components/admin/admin-client';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin — Manage Slides</h1>
        <p className="mt-1 text-slate-600">
          Add histology slide images and place labeled markers for the image quiz.
        </p>
      </div>
      <AdminClient />
    </div>
  );
}
