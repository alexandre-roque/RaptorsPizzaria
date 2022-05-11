INSERT INTO cardapio values('Pizza de calabresa','Médio',20,1,'pizza');
insert into cardapio values('Pizza de calabresa','Grande',26.50,2,'pizza');

INSERT INTO cardapio values('Pizza de pepperoni', 'Médio', 22, 3,'pizza');

INSERT INTO cardapio VALUES ('Pizza portuguesa', 'Grande', 28.50, 4,'pizza');

INSERT INTO cardapio VALUES ('Pizza à moda', 'Médio', 22, 5,'pizza');

INSERT INTO cardapio VALUES ('Pizza de frango', 'Grande', 27.50, 6,'pizza');

INSERT INTO cardapio VALUES ('Pizza quatro queijos', 'Médio', 24, 7,'pizza');

INSERT INTO cardapio VALUES ('Pizza vegetariana', 'Grande', 22, 8,'pizza');

INSERT INTO cardapio VALUES ('Pizza vegana', 'Médio', 18.50, 9,'pizza');

INSERT INTO cardapio VALUES ('Pizza de strogonoff', 'Grande', 32, 10,'pizza');

insert into cardapio values ('Pizza marguerita','Grande',29.0,11,'pizza');
insert into cardapio values ('Coca-Cola lata','350 ml',5.0,12,'bebida');
insert into cardapio values ('Coca-Cola litro','1 litro',10.5,13,'bebida');
insert into cardapio values ('Guaraná Antarctica litro','1 litro',8.5,14,'bebida');
insert into cardapio values ('Fanta laranja lata','350 ml',3.5,15,'bebida');
insert into cardapio values ('Limonada','500 ml',6.5,16,'bebida');
insert into cardapio values ('(C) Pizza de pepperoni + Coca lata','NA',24.5,17,'combo');
insert into cardapio values ('(C) Pizza à moda + Coca litro','NA',30.0,18,'combo');
insert into cardapio values ('(C) Pizza vegana + Limonada','NA',21.5,19,'combo');
insert into cardapio values ('(C) Pizza de frango + Pizza à moda','NA',45.0,20,'combo');


SELECT c.id_endereco  FROM cadastro c WHERE c.email='vitor@teste.com'

SELECT  c.nome ,c.telefone,c.cpf,e.cep,e.complemento,e.numero,e.id 
FROM Endereco e INNER JOIN cadastro c ON c.id_endereco = e.id 
WHERE e.id  = 1

SELECT 



select *  from  public.cadastro c 
SELECT * FROM cardapio c INNER JOIN pedido p ON c.id=p.id_item  
SELECT * FROM public.cardapio
INSERT INTO endereco values('39230000','FREI HUMBERTO BRISTOL','NOVO HORIZONTE',120,'CASA','Buenopolis','Minas Gerais',1)
INSERT INTO endereco values('35702295','CUBA','Nova Cidade',872,'CASA','Sete Lagoas','Minas Gerais',2)
INSERT INTO cadastro values('Vitor Santana','12345678901','vitor@teste.com','31998543023','123456',1,1)
INSERT INTO cadastro values('Erick Santana','12345678902','erick@teste.com','31998754540','123456',2,2)

SELECT * 
FROM public.cardapio c 
WHERE c.id = 4

DELETE FROM cardapio 
WHERE id=21

SELECT * FROM pedido  


