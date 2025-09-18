import { Status } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export const leadRepository = {
  getLeads,
  createLead,
};

function getLeads() {
  return prisma.lead.findMany();
}

async function createLead(
  name: string,
  email: string,
  status: Status
) {
  // Check if email already exists
  const existingLead = await prisma.lead.findUnique({
    where: { email },
  });

  if (existingLead) {
    throw new Error('Email already exists');
  }

  return prisma.lead.create({
    data: { name, email, status },
  });
}
