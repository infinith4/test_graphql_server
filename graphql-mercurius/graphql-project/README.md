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


npm i @dbml/cli
npx dbml2sql dbml/ecommerce_mysql.dbml -o dbml/ecommerce_mysql.sql --mysql


## seed

npx prisma db seed


## prisma to graphql

npx prisma generate

src/@generated/prisma-nestjs-graphql に生成される


### modules 生成

npx nest g resource modules/xxx

npx nest g resource modules/users
npx nest g resource modules/products

node ➜ /graphql-project $ npx nest g resource modules/products
? What transport layer do you use? GraphQL (code first)
? Would you like to generate CRUD entry points? Yes

CREATE src/modules/products/products.module.ts (246 bytes)
CREATE src/modules/products/products.resolver.spec.ts (555 bytes)
CREATE src/modules/products/products.resolver.ts (1217 bytes)
CREATE src/modules/products/products.service.spec.ts (474 bytes)
CREATE src/modules/products/products.service.ts (667 bytes)
CREATE src/modules/products/dto/create-product.input.ts (199 bytes)
CREATE src/modules/products/dto/update-product.input.ts (255 bytes)
CREATE src/modules/products/entities/product.entity.ts (190 bytes)
UPDATE src/app.module.ts (1312 bytes)


https://zenn.dev/mano_r/articles/8d25be4b4452dd

まとめ
以上の手順に従うことで、schema.prismaの内容を考慮したNestJSリソースを手動で設定できます。自動化ツールが直接的に対応していない場合でも、この方法を使用すれば、Prismaスキーマに基づいたリソースを構築することができます。今後のバージョンでは、さらに簡単に統合できるツールや機能が提供される可能性がありますが、現時点ではこのように手動で対応するのが一般的です。


npx nest g resource modules/articles
npx nest g resource modules/cart-items
npx nest g resource modules/carts
npx nest g resource modules/categories
npx nest g resource modules/customer-addresses
npx nest g resource modules/customers
npx nest g resource modules/order-items
npx nest g resource modules/orders
npx nest g resource modules/payments
npx nest g resource modules/product-categories
npx nest g resource modules/products
npx nest g resource modules/users


cat src/@generated/prisma-nestjs-graphql/products/products.model.ts > src/modules/products/entities/product.entity.ts
cat src/@generated/prisma-nestjs-graphql/cart-items/cart-items.model.ts > src/modules/cart-items/entities/cart-item.entity.ts
cat src/@generated/prisma-nestjs-graphql/order-items/order-items.model.ts > src/modules/order-items/entities/order-item.entity.ts
cat src/@generated/prisma-nestjs-graphql/product-categories/product-categories.model.ts > src/modules/product-categories/entities/product-category.entity.ts
cat src/@generated/prisma-nestjs-graphql/products/products.model.ts > src/modules/products/entities/product.entity.ts
cat src/@generated/prisma-nestjs-graphql/articles/articles.model.ts > src/modules/articles/entities/article.entity.ts
cat src/@generated/prisma-nestjs-graphql/cart-items/cart-items.model.ts > src/modules/cart-items/entities/cart-item.entity.ts
cat src/@generated/prisma-nestjs-graphql/carts/carts.model.ts > src/modules/carts/entities/cart.entity.ts
cat src/@generated/prisma-nestjs-graphql/categories/categories.model.ts > src/modules/categories/entities/category.entity.ts
cat src/@generated/prisma-nestjs-graphql/customer-addresses/customer-addresses.model.ts > src/modules/customer-addresses/entities/customer-address.entity.ts
cat src/@generated/prisma-nestjs-graphql/customers/customers.model.ts > src/modules/customers/entities/customer.entity.ts
cat src/@generated/prisma-nestjs-graphql/order-items/order-items.model.ts > src/modules/order-items/entities/order-item.entity.ts
cat src/@generated/prisma-nestjs-graphql/orders/orders.model.ts > src/modules/orders/entities/order.entity.ts
cat src/@generated/prisma-nestjs-graphql/payments/payments.model.ts > src/modules/payments/entities/payment.entity.ts
cat src/@generated/prisma-nestjs-graphql/product-categories/product-categories.model.ts > src/modules/product-categories/entities/product-category.entity.ts
cat src/@generated/prisma-nestjs-graphql/product-categories/product-categories.model.ts > src/modules/product-categories/entities/product-category.entity.ts
cat src/@generated/prisma-nestjs-graphql/products/products.model.ts > src/modules/products/entities/product.entity.ts
cat src/@generated/prisma-nestjs-graphql/users/users.model.ts > src/modules/users/entities/user.entity.ts



cp src/@generated/prisma-nestjs-graphql/prisma/products-status.enum.ts src/modules/products/entities

cp src/@generated/prisma-nestjs-graphql/prisma/categories-count.output.ts src/modules/categories/entities

cp src/@generated/prisma-nestjs-graphql/prisma/customers-count.output.ts src/modules/customers/entities

cp src/@generated/prisma-nestjs-graphql/prisma/users-count.output.ts src/modules/users/entities
cp src/@generated/prisma-nestjs-graphql/prisma/orders-status.enum.ts src/modules/orders/entities
cp src/@generated/prisma-nestjs-graphql/prisma/orders-count.output.ts src/modules/orders/entities
cp src/@generated/prisma-nestjs-graphql/prisma/carts-count.output.ts src/modules/carts/entities
cp src/@generated/prisma-nestjs-graphql/prisma/articles-status.enum.ts src/modules/articles/entities


cp src/@generated/prisma-nestjs-graphql/prisma/articles-status.enum.ts src/modules/articles/entities




import { products_status } from '../prisma/products-status.enum';

npm run start:dev