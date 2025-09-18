import { CreateForm } from '@/features/leads/components/createform';
import { LeadsList } from '@/features/leads/components/leads-list';

export default function Home() {
  return (
    <>
      <CreateForm />
      <LeadsList />
    </>
  );
}
