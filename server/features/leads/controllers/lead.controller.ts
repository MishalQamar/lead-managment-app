import type { Request, Response } from 'express';
import { z } from 'zod';

import { leadRepository } from '../repositories/lead.repository';
import { leadSchema } from '../schema/lead';

export const leadController = {
  getLeads,
  createLead,
};

async function getLeads(req: Request, res: Response) {
  try {
    const leads = await leadRepository.getLeads();
    res.json({ leads });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function createLead(req: Request, res: Response) {
  try {
    const { name, email, status } = leadSchema.parse(req.body);
    const lead = await leadRepository.createLead(name, email, status);
    res.json({ message: 'Lead created successfully', lead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues });
      return;
    }
    if (
      error instanceof Error &&
      error.message === 'Email already exists'
    ) {
      res.status(409).json({ message: 'Email already exists' });
      return;
    }
    res.status(500).json({ message: 'Internal server error' });
  }
}
