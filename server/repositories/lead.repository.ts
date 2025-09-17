import { Status } from '../generated/prisma';
import { prisma } from '../lib/prisma';

export const leadRepository = {
  getLeads,
  createLead,
};

function getLeads() {
  return prisma.lead.findMany();
}

export function createLead(
  name: string,
  email: string,
  status: Status
) {
  return prisma.lead.create({
    data: { name, email, status },
  });
}
