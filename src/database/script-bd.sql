CREATE DATABASE TWD;

USE TWD;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    email VARCHAR(50),
    telefone varchar(15),
	senha VARCHAR(50)

);

create table temporada_curtida(
id int primary key auto_increment,
nome varchar (30),
season int,
qtd_curtida int
);

create table temporada_preferida(
fk_usuario int,
foreign key (fk_usuario) references  usuario(id),
fk_temporada int,
foreign key (fk_usuario) references  temporada_curtida(id)
 
);

create table aviso (
	id int primary key auto_increment,
	titulo  varchar(100),
	descricao  varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
);