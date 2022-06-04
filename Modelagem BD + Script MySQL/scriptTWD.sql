create database TWD;
use TWD;

create table usuario (
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

insert into protagonista values  (null,'Clementine'), (null,'Lee Everett'), (null,'Kenny'), (null,'Ravier Garcia'),
 (null,'Louis'), (null,'Luke'), (null,'Michonne'), (null,'Kate Garcia');

create table aviso (
	id int primary key auto_increment,
	titulo  varchar(100),
	descricao  varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
);

select * from aviso;
select * from protagonista;
select * from usuario;


