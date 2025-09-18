import { format, parseISO } from 'date-fns';
import { LucideMail, LucideUser } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';

type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
};

type LeadItemProps = {
  lead: Lead;
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
      {status.replace('_', ' ')}
    </span>
  );
};

const LeadItem = ({ lead }: LeadItemProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
              <LucideUser className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-lg truncate">
                {lead.name}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                <div className="flex items-center gap-2">
                  <LucideMail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 truncate">
                    {lead.email}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {format(parseISO(lead.createdAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 sm:ml-3">
            <StatusBadge status={lead.status} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export { LeadItem };
export type { Lead, LeadItemProps };
