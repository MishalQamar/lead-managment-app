import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.lead.deleteMany();

  const leads = [
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      status: 'new' as Status,
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techcorp.com',
      status: 'engaged' as Status,
    },
    {
      name: 'Mike Chen',
      email: 'mike.chen@startup.io',
      status: 'proposal' as Status,
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@enterprise.com',
      status: 'won' as Status,
    },
    {
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@company.net',
      status: 'lost' as Status,
    },
    {
      name: 'Lisa Wang',
      email: 'lisa.wang@business.org',
      status: 'new' as Status,
    },
    {
      name: 'David Brown',
      email: 'david.brown@corp.com',
      status: 'engaged' as Status,
    },
    {
      name: 'Maria Garcia',
      email: 'maria.garcia@firm.com',
      status: 'proposal' as Status,
    },
  ];

  for (const lead of leads) {
    await prisma.lead.create({
      data: lead,
    });
  }
}

main()
  .catch(() => process.exit(1))
  .finally(() => prisma.$disconnect());
