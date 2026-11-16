# x0

in progress

## Project structure

```text
client/                  React + Vite frontend
server/gateway/          API gateway
server/services/auth/    Authentication service
```

## Getting started

Install dependencies in each app:

```bash
cd client && npm install
cd ../server/gateway && npm install
cd ../server/services/auth && npm install
cd ../server/services/chat && npm install
cd ../server/services/agent && npm install
```

Create environment files from the provided examples:

```bash
cp client/.env.example client/.env
cp server/gateway/.env.example server/gateway/.env
```

The auth service also needs a `.env` containing at least `PORT`,
`MONGODB_URI`, and `FRONTEND_URL`.

Start each part in a separate terminal:

```bash
cd client && npm run dev
cd server/gateway && npm run dev
cd server/services/auth && npm run dev
```

The gateway proxies `/auth` requests to the authentication service. Configure
`AUTH_SERVICE` in `server/gateway/.env` to point to the auth service URL.

## Available scripts

### Client

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build
```

### Gateway and auth service

```bash
npm run dev       # Start with nodemon
```