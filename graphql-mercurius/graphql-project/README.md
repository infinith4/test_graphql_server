npm i @nestjs/common graphql @nestjs/graphql @nestjs/core @nestjs/swagger @nestjs/platform-express prisma-nestjs-graphql nestjs-prisma
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

npm i -D @nestjs/cli @nestjs/schematics @types/node @nestjs/testing typescript eslint ts-node @prisma/client

npx prisma migrate dev

npx prisma db seed


src/@generatedにGraphQLのコードが生成

npx prisma generate


npx nest g resource modules/users

npx nest g resource modules/posts


# Write your query or mutation here
query{
  users{
   name
  }
}