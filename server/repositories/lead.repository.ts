import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

export function getLeads() {
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
