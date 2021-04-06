CREATE DATABASE CosmeticsBD; 

USE CosmeticsBD;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS purchase;


CREATE TABLE product(
    identifier INT UNSIGNED PRIMARY KEY,
    description VARCHAR(50) UNIQUE NOT NULL, 
    price INT NOT NULL, 
    existence INT NOT NULL
);

CREATE TABLE purchase(
    orderNumber INT UNSIGNED PRIMARY KEY,
    subtotal FLOAT NOT NULL UNSIGNED, 
    totalVat FLOAT UNSIGNED NOT NULL,
    totalOrder FLOAT UNSIGNED NOT NULL
);

