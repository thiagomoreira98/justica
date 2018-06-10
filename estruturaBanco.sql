CREATE DATABASE JUSTICA;
USE JUSTICA;

CREATE TABLE ADVOGADO(
    adv_codigo int primary key not null AUTO_INCREMENT,
    adv_nome varchar(20),
    adv_apelido varchar(10),
    adv_sexo char(1),
    adv_faculdade varchar(10),
    adv_dtformatura date
);

CREATE TABLE PROCESSO(
    pro_codigo int primary key not null AUTO_INCREMENT,
    pro_nomereu varchar(20),
    pro_descricao varchar(20),
    pro_varatribunal varchar(15),
    pro_dataprocesso varchar(10),
    adv_codigo int,
    constraint fk_advogado_processo foreign key(adv_codigo) references ADVOGADO(adv_codigo)
);

INSERT INTO ADVOGADO(
    adv_codigo, 
    adv_nome, 
    adv_apelido, 
    adv_sexo, 
    adv_faculdade,
    adv_dtformatura
)
VALUES(1, 'Advogado 1', 'adv 1', 'M', 'FATEC', '2018-12-10'),
    (2, 'Advogado 2', 'adv 2', 'M', 'FATEC', '2018-12-10'),
    (3, 'Advogado 3', 'adv 3', 'F', 'FATEC', '2018-12-10');

INSERT INTO PROCESSO(
    pro_codigo,
    pro_nomereu,
    pro_descricao,
    pro_varatribunal,
    pro_dataprocesso,
    adv_codigo
)
VALUES(1, 'Reu 1', 'transito', 'tribunal 1', '2018-05-01', 1),
    (2, 'Reu 2', 'roubo', 'tribunal 2', '2018-06-01', 2),
    (3, 'Reu 3', 'homicidio', 'tribunal 3', '2018-06-10', 3);