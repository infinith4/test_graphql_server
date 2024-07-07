This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#

yarn dev

yarn add -D @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-simple-import-sort prettier npm-run-all

yarn format

yarn lint

https://tailwindcss.com/docs/guides/nextjs

yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

# prisma

yarn add -D prisma

# generate

npx prisma generate

# openssl rand -base64 32

npx prisma migrate dev --name init

npx prisma migrate reset

## seed

package.json

npx prisma db seed

npx prisma studio

## next-auth

yarn add next-auth@beta

yarn add zod

yarn add graphql @graphql-tools/graphql-file-loader @graphql-tools/load @graphql-tools/schema micro micro-cors @apollo/server

yarn add @graphql-codegen/cli

yarn add @graphql-codegen/typescript-resolvers

yarn add apollo-server
yarn add @as-integrations/next

yarn add @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo

yarn add @apollo/client

curl -v http://localhost:4210/my-api-auth

# login

https://zenn.dev/terass_dev/articles/d45415a31694ea

yarn add next-auth@beta

https://zenn.dev/takubii/articles/ad93ca8966a213

yarn add @types/bcrypt --save-dev

curl -v http://localhost:4210/my-api-auth

yarn add -D @graphql-codegen/client-preset

yarn add -D @graphql-codegen/typescript-graphql-request

## codegen

yarn codegen

base file: codegen.ts
generate file: src/graphql/dist/graphql_codegen.ts

GQLArticleList
-> api/graphql src/libs/client.ts
-> src/graphql/resolvers/index.ts context is null

yarn add @radix-ui/react-separator lucide-react react-icons resend
