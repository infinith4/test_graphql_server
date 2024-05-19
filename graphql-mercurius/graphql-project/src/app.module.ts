// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { RecipesModule } from './recipes/recipes.module';

// @Module({
//   imports: [
//     RecipesModule,
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: 'schema.gql',
//     }),
//   ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './modules/products/products.module';
import { CartItemsModule } from './modules/cart-items/cart-items.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { ProductItemsModule } from './modules/product-items/product-items.module';
import { ProductCategoriesModule } from './modules/product-categories/product-categories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: './src/schema.graphql',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    ProductsModule,
    CartItemsModule,
    OrderItemsModule,
    ProductItemsModule,
    ProductCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
