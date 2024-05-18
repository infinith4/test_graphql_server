import { PrismaClient, articles_status, products_status, orders_status } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

// export namespace $Enums {
//   export const articles_status: {
//   draft: 'draft',
//   published: 'published',
//   private: 'private',
//   deleted: 'deleted'
// };
// }


// export namespace $Enums {
//   export let articles_status: {
//     draft: 'draft',
//     published: 'published',
//     private: 'private',
//     deleted: 'deleted'
//   };


//   export let orders_status: {
//     pending: 'pending',
//     processing: 'processing',
//     completed: 'completed',
//     cancelled: 'cancelled'
//   }

//   export let products_status: {
//     active: 'active',
//     inactive: 'inactive',
//     deleted: 'deleted',
//     out_of_stock: 'out_of_stock',
//     in_stock: 'in_stock',
//     running_low: 'running_low',
//   }
// }

async function main() {
  // Users
  const users = await Promise.all(
    [
      { name: 'Alice Smith', username: 'alice', email: 'alice@example.com', password: 'password1', hashed_password: hash('password1', 10) },
      { name: 'Bob Johnson', username: 'bob', email: 'bob@example.com', password: 'password1', hashed_password: hash('password1', 10)  },
      { name: 'Carol Williams', username: 'carol', email: 'carol@example.com', password: 'password1', hashed_password: hash('password1', 10)  },
      { name: 'David Brown', username: 'david', email: 'david@example.com', password: 'password1', hashed_password: hash('password1', 10) },
      { name: 'Eve Davis', username: 'eve', email: 'eve@example.com', password: 'password1', hashed_password: hash('password1', 10)  }
    ].map(async (user) => ({
      ...user,
      hashed_password: await hash(user.password, 10)
    }))
  ).then(users => Promise.all(users.map(userData => prisma.users.create({ data: {
    hashed_password: userData.hashed_password,
    name: userData.name,
    username: userData.username,
    email: userData.email,
  }
 }))));

//  users.forEach(user => {
//   console.log("user.email: " + user.email);
  
//  });

  // await Promise.all(usersData.map(userData => prisma.users.create({ data: userData })));
  // const users = await Promise.all(
  //   [
  //     { name: 'Alice Smith', username: 'alice', email: 'alice@example.com', password: 'password1' },
  //     { name: 'Bob Johnson', username: 'bob', email: 'bob@example.com', password: 'password2' },
  //     { name: 'Carol Williams', username: 'carol', email: 'carol@example.com', password: 'password3' },
  //     { name: 'David Brown', username: 'david', email: 'david@example.com', password: 'password4' },
  //     { name: 'Eve Davis', username: 'eve', email: 'eve@example.com', password: 'password5' }
  //   ].map(async (user) => ({
  //     ...user,
  //     hashed_password: await hash(user.password, 10)
  //   }))
  // ).then(usersData => Promise.all(usersData.map(userData => prisma.users.create({ data: userData }))));

  // Articles
  const articlesData = [
    { title: 'Introduction to Prisma', content: 'Prisma is a modern ORM...', user_id: users[0].id },
    { title: 'Advanced TypeScript', content: 'TypeScript offers advanced features...', user_id: users[1].id },
    { title: 'GraphQL Best Practices', content: 'GraphQL is a query language...', user_id: users[2].id },
    { title: 'Node.js Performance Tips', content: 'Node.js is a powerful JavaScript runtime...', user_id: users[3].id },
    { title: 'Secure Your Express App', content: 'Express is a minimal web framework...', user_id: users[4].id }
  ];
  await Promise.all(articlesData.map(article => prisma.articles.create({ data: {
    title: article.title,
    content: article.content,
    status: articles_status.deleted,
    user_id: article.user_id,
  }
 })));

  // Categories
  const categories = await Promise.all(
    ['Technology', 'Science', 'Health', 'Sports', 'Arts'].map(name => prisma.categories.create({ data: { name } }))
  );

  // Products
  const productsData = [
    { name: 'Laptop', description: 'A high-performance laptop.', status: products_status.active, price: 1000, stock: 50 },
    { name: 'Smartphone', description: 'A latest model smartphone.', status: products_status.active, price: 800, stock: 100 },
    { name: 'Headphones', description: 'Noise-cancelling headphones.', status: products_status.active, price: 200, stock: 150 },
    { name: 'Smartwatch', description: 'A smartwatch with various features.', status: products_status.active, price: 300, stock: 75 },
    { name: 'Tablet', description: 'A powerful tablet for all your needs.', status: products_status.active, price: 600, stock: 60 }
  ];
  const products = await Promise.all(productsData.map(product => prisma.products.create({ data: {
    name: product.name,
    description: product.description,
    status: product.status,
    price: product.price,
    stock: product.stock
  } })));

  // Product Categories
  await Promise.all(products.map((product, i) => prisma.product_categories.create({ data: { product_id: product.id, category_id: categories[i % categories.length].id } })));

  // Customers
  const customers = await Promise.all(
    users.map((user, i) => prisma.customers.create({
      data: {
        user_id: user.id,
        address: `123 Main St, City ${i + 1}`,
        phone: `555-000${i + 1}`
      }
    }))
  );

  // Customer Addresses
  await Promise.all(
    customers.map((customer, i) => prisma.customer_addresses.create({
      data: {
        customer_id: customer.id,
        address_line1: `123 Main St, Apt ${i + 1}`,
        address_line2: `Suite ${i + 1}`,
        city: `City ${i + 1}`,
        state: `State ${i + 1}`,
        postal_code: `12345${i}`,
        country: `Country ${i + 1}`
      }
    }))
  );

  // Carts
  const carts = await Promise.all(
    users.map(user => prisma.carts.create({ data: { user_id: user.id } }))
  );

  // Cart Items
  await Promise.all(
    carts.map((cart, i) => prisma.cart_items.create({
      data: {
        cart_id: cart.id,
        product_id: products[i % products.length].id,
        quantity: (i % 5) + 1
      }
    }))
  );

  // Orders
  const orders = await Promise.all(
    users.map((user, i) => prisma.orders.create({
      data: {
        user_id: user.id,
        status: orders_status.pending,
        total: (i + 1) * 150
      }
    }))
  );

  // Order Items
  await Promise.all(
    orders.map((order, i) => prisma.order_items.create({
      data: {
        order_id: order.id,
        product_id: products[i % products.length].id,
        quantity: (i % 5) + 1,
        price: products[i % products.length].price
      }
    }))
  );

  // Payments
  await Promise.all(
    orders.map((order, i) => prisma.payments.create({
      data: {
        order_id: order.id,
        amount: (i + 1) * 150,
        payment_method: 'Credit Card',
        payment_status: 'Completed'
      }
    }))
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
