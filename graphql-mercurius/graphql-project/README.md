GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

npm i @nestjs/common graphql @nestjs/graphql @nestjs/core @nestjs/swagger @nestjs/platform-express prisma-nestjs-graphql nestjs-prisma
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

npm i -D @nestjs/cli @nestjs/schematics @types/node @nestjs/testing typescript eslint ts-node @prisma/client
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

## prisma からDBに適用

npx prisma migrate dev

# prisma からDBに適用

prisma/seed/start.ts に基づき、以下を実行することでDBにデータを入れる。

npx prisma db seed

## スキーマ定義ファイルの更新

スキーマ定義ファイル（schema.prisma）を上書きしてしまうため、まずは更新内容をコンソールで確認する。

npx prisma db pull --print

### DBからprisma schema に適用する

npx prisma db pull

## src/@generatedにGraphQLのコードが生成

npx prisma generate


npx nest g resource modules/users

npx nest g resource modules/posts


# Write your query or mutation here
query{
  users{
   name
  }
}


 npx prisma studio


```
query { user(id: 3) { id } }
```

```
query{
  users{
    id
  }
}
```


```
query{
  posts{
    title
  }
}
```


```
query { post(id: 3) { title } }
```



```
  findAll() {
    return this.prisma.user.findMany({
      include: { posts: true },
    });
  }
```


```
query{
  users{
    id
    email
    posts {
      id
      title
      published
    }
  }
}
```



### prisma schema から dbmlを生成

https://github.com/notiz-dev/prisma-dbml-generator

npm install -D prisma-dbml-generator


add schema.prisma

```
generator dbml {
  provider = "prisma-dbml-generator"
}
```


npx prisma generate


prisma/dbml/schema.dbml に出力される。

