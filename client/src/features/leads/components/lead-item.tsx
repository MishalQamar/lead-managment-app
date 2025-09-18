import { format, parseISO } from 'date-fns';

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

const LeadItem = ({ lead }: LeadItemProps) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-4 py-3">
        <span className="font-medium text-gray-900">{lead.name}</span>
      </td>
      <td className="px-4 py-3 text-gray-600">{lead.email}</td>
      <td className="px-4 py-3">
        <StatusBadge status={lead.status} />
      </td>
      <td className="px-4 py-3 text-gray-500 text-sm">
        {format(parseISO(lead.createdAt), 'MMM dd')}
      </td>
    </tr>
  );
};

export { LeadItem };
export type { Lead, LeadItemProps };
