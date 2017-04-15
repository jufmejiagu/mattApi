## Getting Started

Install dependencies:
```sh
npm install
```

Set environment (vars):
```sh
Edit file .env
```

Start server:
```sh
# Start server
npm start

# Selectively set DEBUG env var to get logs
DEBUG=matt:* npm start
```
Refer [debug](https://www.npmjs.com/package/debug) to know how to selectively turn on logs.

Lint:
```sh
# Lint code with ESLint
npm run lint

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```
