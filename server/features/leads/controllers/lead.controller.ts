import type { Request, Response } from 'express';
import { z } from 'zod';

import { leadRepository } from '../repositories/lead.repository';
import { leadSchema } from '../schema/lead';
import { fromErrorToResponse } from '../../../utils/from-error-to-response';

export const leadController = {
  getLeads,
  createLead,
};

async function getLeads(req: Request, res: Response) {
  try {
    const leads = await leadRepository.getLeads();
    res.json({ leads });
  } catch (error) {
    const errorResponse = fromErrorToResponse(error);
    res
      .status(errorResponse.status)
      .json({ message: errorResponse.message });
  }
}

async function createLead(req: Request, res: Response) {
  try {
    const { name, email, status } = leadSchema.parse(req.body);
    const lead = await leadRepository.createLead(name, email, status);
    res.json({ message: 'Lead created successfully', lead });
  } catch (error) {
    const errorResponse = fromErrorToResponse(error);
    res
      .status(errorResponse.status)
      .json({ message: errorResponse.message });
  }
}
