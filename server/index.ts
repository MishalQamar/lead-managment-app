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

app.get('/api/leads', async (req: Request, res: Response) => {
  try {
    const leads = await prisma.lead.findMany();
    res.json({ leads });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
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
    res.json({ message: 'Lead created successfully', lead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues });
      return;
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
