https://zenn.dev/metallic_kfc/articles/59f3875c950056

npx prisma init

dbからSchemaをschema.prismaに反映する

npx prisma db pull



1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

Schemaをschema.prismaからdbかに反映する

npx prisma generate


npx graphql-codegen --config codegen.ts


npm i @apollo/server @node-libraries/nest-apollo-server graphql graphql-tag


npx nest g co graphql


  // "dependencies": {
  //   "@apollo/client": "^3.10.3",
  //   "@apollo/server": "^4.10.4",
  //   "@as-integrations/next": "^3.0.0",
  //   "@node-libraries/nest-apollo-server": "^0.0.4",
  //   "@prisma/client": "^5.13.0",
  //   "graphql": "^16.8.1",
  //   "graphql-tag": "^2.12.6",
  //   "prisma": "^5.13.0"
  // },
  // "devDependencies": {
  //   "@graphql-codegen/cli": "^5.0.2",
  //   "@graphql-codegen/typescript": "^4.0.6",
  //   "@graphql-codegen/typescript-operations": "^4.2.0",
  //   "@graphql-codegen/typescript-react-apollo": "^4.3.0"
  // }