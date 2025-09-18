import { CreateForm } from '@/features/leads/components/createform';
import { LeadsList } from '@/features/leads/components/leads-list';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Lead Management System
          </h1>
          <p className="text-gray-600">
            Create and manage your sales leads efficiently
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Add New Lead
            </h2>
            <CreateForm />
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 max-w-3xl mx-auto">
            <LeadsList />
          </div>
        </div>
      </div>
    </div>
  );
}
