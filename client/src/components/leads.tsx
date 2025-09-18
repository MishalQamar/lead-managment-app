import { getLeads } from '@/features/leads/queries/get-leads';
import { useQuery } from '@tanstack/react-query';

export const Leads = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['leads'],
    queryFn: getLeads,
  });

  if (isLoading) return <div>Loading leads...</div>;
  if (isError) return <div>Oops! Something went wrong</div>;

  const leads = data?.leads || [];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Leads ({leads.length})
      </h1>

      <div className="space-y-2">
        {leads.map((lead) => (
          <div key={lead.id} className="border p-3 rounded">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{lead.name}</div>
                <div className="text-sm text-gray-600">
                  {lead.email}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {lead.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {leads.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No leads found
        </div>
      )}
    </div>
  );
};
