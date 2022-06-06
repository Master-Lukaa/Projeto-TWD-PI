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

insert into usuario values (null,'Henrique', 'henrique.sz@hotmail.com','11943623708','Henri123', 1),
(null,'Joana', 'jo.silva@hotmail.com','11945765708','Jo123',2),
(null,'Mateus', 'mat.bispo@hotmail.com','11932567898','Mat123',3),
(null,'Gabriel', 'gab.franca@hotmail.com','11942462950','Gab123',4),
(null,'João', 'jo.alencar@hotmail.com','11937332345','fe123',5),
(null,'Luis', 'lu.alencar@hotmail.com','11937332345','fe123',6),
(null,'Maria', 'mari@hotmail.com','11937332345','fe123',7),
(null,'Victor', 'vic@hotmail.com','11937332345','fe123',8);

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

select u.nome as 'Nome do usuário', p.nome as 'Protagonista Preferido' 
from usuario as u
join protagonista as p
on p.id = u.fk_protagonista;

select * from usuario as u
join aviso as a
on a.fk_usuario = u.id

