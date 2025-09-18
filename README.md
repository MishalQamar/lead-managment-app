# Lead Management App

A simple lead management application built with Next.js and Node.js.

## Project Structure

```
lead-managment-app/
├── client/          # Next.js frontend
├── server/          # Node.js backend with Express
└── README.md
```

## Tech Stack

**Frontend:**
- Next.js with TypeScript
- Tailwind CSS
- React Hook Form with Zod validation
- TanStack Query for data fetching

**Backend:**
- Node.js with Express
- TypeScript
- Prisma ORM
- PostgreSQL database

## Features

- View all leads in a responsive table
- Add new leads with form validation
- Lead status management (New, Engaged, Closed Won, Closed Lost)
- Mobile-responsive design

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lead-managment-app
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

   Create `.env` file in server directory:
   ```env
   DATABASE_URL="your-postgresql-connection-string"
   ```

   Setup database:
   ```bash
   npm run db:push
   npm run db:seed
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```
   Server runs on `http://localhost:8000`

2. **Start the frontend:**
   ```bash
   cd client
   npm run dev
   ```
   Frontend runs on `http://localhost:3000`

## API Endpoints

- `GET /api/leads` - Get all leads
- `POST /api/leads` - Create a new lead

## Lead Schema

```typescript
{
  id: string
  name: string (required)
  email: string (required, unique)
  status: "new" | "engaged" | "closed_won" | "closed_lost"
  createdAt: Date
}
```