# Lead Management App

A full-stack application for managing leads with separate client and server components.

## Project Structure

```
lead-managment-app/
├── client/          # Frontend application
├── server/          # Backend API server
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the Application

#### Server
```bash
cd server
npm start
```

#### Client
```bash
cd client
npm start
```

## Development

- Server runs on port 3000 (configurable via environment variables)
- Client runs on port 3001 (or next available port)

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
PORT=3000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
