'use client';

import { getLeads } from '@/features/leads/queries/get-leads';
import { useQuery } from '@tanstack/react-query';
import { LucideLoader } from 'lucide-react';
import { LeadItem } from './lead-item';

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
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
          Lead Management
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Manage your sales pipeline with {leads.length} leads
        </p>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-300 text-8xl mb-6">📋</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            No leads found
          </h3>
          <p className="text-gray-500 text-lg">
            Start by adding your first lead
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:gap-6">
          {leads.map((lead) => (
            <LeadItem key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
};
