CREATE DATABASE CosmeticsBD; 

USE CosmeticsBD;
DROP TABLE IF EXISTS producto;
DROP TABLE IF EXISTS compra;

CREATE TABLE producto(
    identificador INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) UNIQUE NOT NULL, 
    precio INT NOT NULL, 
    existencia INT NOT NULL
);

CREATE TABLE compra(
    numeroOrden INT UNSIGNED PRIMARY KEY,
    subtotal FLOAT  UNSIGNED NOT NULL, 
    totalIva FLOAT UNSIGNED NOT NULL,
    totalCompra FLOAT UNSIGNED NOT NULL
);