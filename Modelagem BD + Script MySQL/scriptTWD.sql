CREATE DATABASE TWD;
USE TWD;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30),
	email VARCHAR(30),
    telefone varchar(15),
    senha VARCHAR(30),
    fk_protagonista int,
    foreign key (fk_protagonista) references protagonista(id)
);

create table protagonista(
id int primary key auto_increment,
nome varchar (30)
);

create table aviso (
	id int primary key auto_increment,
	titulo  varchar(100),
	descricao  varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
);
