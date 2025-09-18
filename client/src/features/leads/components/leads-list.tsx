'use client';

import { getLeads } from '@/features/leads/queries/get-leads';
import { useQuery } from '@tanstack/react-query';

import { LeadItem } from './lead-item';
import { LucideLoader } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'engaged':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed_won':
        return 'bg-green-100 text-green-800';
      case 'closed_lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
        status
      )}`}
    >
      {status.replace('_', ' ')}
    </span>
  );
};

export const LeadsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['leads'],
    queryFn: getLeads,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <LucideLoader className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 font-medium">
            Oops! Something went wrong
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Please try again later
          </p>
        </div>
      </div>
    );
  }

  const leads = data?.leads || [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            All Leads
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {leads.length} {leads.length === 1 ? 'lead' : 'leads'} in
            your pipeline
          </p>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📋</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No leads yet
          </h3>
          <p className="text-gray-500">
            Add your first lead to get started
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <LeadItem key={lead.id} lead={lead} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">
                      {lead.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 truncate">
                      {lead.email}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <StatusBadge status={lead.status} />
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500">
                    {format(parseISO(lead.createdAt), 'MMM dd')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
