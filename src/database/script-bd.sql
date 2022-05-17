CREATE DATABASE TWD;

USE TWD;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    email VARCHAR(50),
    telefone varchar(15),
	senha VARCHAR(50)

);