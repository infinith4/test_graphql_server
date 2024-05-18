-- SQL dump generated using DBML (dbml.dbdiagram.io)
-- Database: MySQL
-- Generated at: 2024-05-18T03:34:22.407Z

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `customers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `address` varchar(255),
  `phone` varchar(255),
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `status` ENUM ('active', 'inactive', 'deleted', 'out_of_stock', 'in_stock', 'running_low'),
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `product_categories` (
  `product_id` int,
  `category_id` int,
  PRIMARY KEY (`product_id`, `category_id`)
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `status` ENUM ('pending', 'processing', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
  `total` decimal(10,2) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `order_items` (
  `order_id` int,
  `product_id` int,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now()),
  PRIMARY KEY (`order_id`, `product_id`)
);

CREATE TABLE `customer_addresses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255),
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `payments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `payment_status` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `carts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `cart_items` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `cart_id` int,
  `product_id` int,
  `quantity` int NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `articles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `status` ENUM ('draft', 'published', 'private', 'deleted'),
  `user_id` int,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE UNIQUE INDEX `ui_users_id` ON `users` (`id`);

CREATE UNIQUE INDEX `ui_users_username` ON `users` (`username`);

CREATE INDEX `idx_users_email` ON `users` (`email`);

CREATE UNIQUE INDEX `ui_customers_id` ON `customers` (`id`);

CREATE UNIQUE INDEX `ui_customers_user_id` ON `customers` (`user_id`);

CREATE UNIQUE INDEX `ui_products_id` ON `products` (`id`);

CREATE UNIQUE INDEX `ui_categories_id` ON `categories` (`id`);

CREATE UNIQUE INDEX `ui_orders_id` ON `orders` (`id`);

CREATE INDEX `idx_orders_user_id` ON `orders` (`user_id`);

CREATE INDEX `idx_order_items_order_id` ON `order_items` (`order_id`);

CREATE INDEX `idx_order_items_product_id` ON `order_items` (`product_id`);

CREATE UNIQUE INDEX `ui_customer_addresses_id` ON `customer_addresses` (`id`);

CREATE INDEX `idx_customer_addresses_customer_id` ON `customer_addresses` (`customer_id`);

CREATE UNIQUE INDEX `ui_payments_id` ON `payments` (`id`);

CREATE INDEX `idx_payments_order_id` ON `payments` (`order_id`);

CREATE UNIQUE INDEX `ui_carts_id` ON `carts` (`id`);

CREATE INDEX `idx_carts_user_id` ON `carts` (`user_id`);

CREATE UNIQUE INDEX `ui_cart_items_id` ON `cart_items` (`id`);

CREATE INDEX `idx_cart_items_cart_id` ON `cart_items` (`cart_id`);

CREATE INDEX `idx_cart_items_product_id` ON `cart_items` (`product_id`);

CREATE UNIQUE INDEX `ui_articles_id` ON `articles` (`id`);

CREATE INDEX `idx_articles_user_id` ON `articles` (`user_id`);

ALTER TABLE `product_categories` ADD CONSTRAINT `fk_product_categories_product_id_products_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_categories` ADD CONSTRAINT `fk_product_categories_category_id_categories_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `order_items` ADD CONSTRAINT `fk_order_items_order_id_orders_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD CONSTRAINT `fk_order_items_product_id_products_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `customer_addresses` ADD CONSTRAINT `fk_customer_addresses_customer_id_customers_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `payments` ADD CONSTRAINT `fk_payments_order_id_orders_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `carts` ADD CONSTRAINT `fk_carts_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `fk_cart_items_cart_id_carts_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `fk_cart_items_product_id_products_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `articles` ADD CONSTRAINT `fk_articles_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `customers` ADD CONSTRAINT `fk_customers_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
