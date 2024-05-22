

npm i -D prisma
npx prisma init


npx prisma migrate dev --name init

GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

npx prisma generate