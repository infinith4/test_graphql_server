CREATE USER 'prisma_user'@'%' IDENTIFIED WITH caching_sha2_password BY 'rpannaNXks92jX';GRANT USAGE ON *.* TO 'prisma_user'@'%';ALTER USER 'prisma_user'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;

GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;