import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import z from 'zod';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/api/leads', (req: Request, res: Response) => {
  res.send('Hello World');
});

const leadSchema = z.object({
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

app.post('/api/lead', async (req: Request, res: Response) => {
  try {
    const { name, email, status } = leadSchema.parse(req.body);
    const lead = await prisma.lead.create({
      data: { name, email, status },
    });
  } catch {
    res.status(400).json({ message: 'Invalid request body' });
  }

  res.json({ message: 'Lead created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
