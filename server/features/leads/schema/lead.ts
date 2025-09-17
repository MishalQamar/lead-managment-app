import z from 'zod';

export const leadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  status: z.enum([
    'new',
    'engaged',
    'proposal_sent',
    'closed_won',
    'closed_lost',
  ]),
});
