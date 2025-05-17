# Agent Slide Builder

This project implements a prototype based on the requirements in `spec.md`.
It provides a Node/Express backend and a React/Vite frontend. Data is stored in
memory for now but the server includes a placeholder Drizzle/Postgres setup.

## Getting Started

Install dependencies:

```bash
npm install
cd server && npm install
cd ../client && npm install
```

### Development

Run the server in development mode:

```bash
cd server
npm run dev
```

Run the client in development mode:

```bash
cd client
npm run dev
```

### Tests

There are currently no automated tests. Running `npm test` will output an error
as a placeholder.
