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


insert into usuario values (null,'Henrique', 'henrique.sz@hotmail.com','11943623708','Henri123', 5),
(null,'Joana', 'jo.silva@hotmail.com','11945765708','Jo123',6),
(null,'Mateus', 'mat.bispo@hotmail.com','11932567898','Mat123',7),
(null,'Gabriel', 'gab.franca@hotmail.com','11942462950','Gab123',8),
(null,'Felipe', 'feh.alencar@hotmail.com','11937332345','fe123',1);

create table protagonista(
id int primary key auto_increment,
nome varchar (30)
);

insert into protagonista values  (null,'Clementine'), (null,'Lee Everett'), (null,'Kenny'), (null,'Ravier Garcia'),
 (null,'Louis'), (null,'Luke'), (null,'Michonne'), (null,'Kate Garcia');


create table aviso (
	id int primary key auto_increment,
	titulo  varchar(100),
	descricao  varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
);

select * from usuario;
select * from protagonista;
select * from aviso;

