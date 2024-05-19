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
import { ProductCategoriesModule } from './modules/product-categories/product-categories.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { CartsModule } from './modules/carts/carts.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CustomerAddressesModule } from './modules/customer-addresses/customer-addresses.module';
import { CustomersModule } from './modules/customers/customers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { UsersModule } from './modules/users/users.module';

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
    ProductCategoriesModule,
    ArticlesModule,
    CartsModule,
    CategoriesModule,
    CustomerAddressesModule,
    CustomersModule,
    OrdersModule,
    PaymentsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
