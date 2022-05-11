drop table cardapio;
drop table endereco;
drop table cadastro; 
drop table pedido;

CREATE TABLE Cardapio (
	Nome VARCHAR(248) NOT NULL,
	Tamanho VARCHAR(16),
	Preco FLOAT(4) NOT NULL,
	id Numeric (4,0) NOT NULL,
	Categoria VARCHAR(64),
	CONSTRAINT "Cardapio_pk" PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Endereco (
	CEP VARCHAR(9) NOT NULL,
	Nome_da_rua VARCHAR(64) NOT NULL,
	Bairro VARCHAR(64) NOT NULL,
	Numero NUMERIC(4,0) NOT NULL,
	Complemento VARCHAR(64),
	Cidade VARCHAR(64),
	Estado VARCHAR(64),
	id Numeric (4,0) NOT NULL,
	CONSTRAINT "Endereco_pk" PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Cadastro (
	Nome VARCHAR(64) NOT NULL,
	CPF VARCHAR(16) NOT NULL,
	email VARCHAR(64) NOT NULL UNIQUE,
	Telefone VARCHAR(11) NOT NULL UNIQUE,
	Senha VARCHAR(64) NOT NULL,
	id Numeric (4,0) NOT NULL,
	id_endereco Numeric (4,0) NOT NULL ,
	CONSTRAINT "Cadastro_pk" PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Pedido (
	id_Item Numeric (4,0) NOT NULL,
	Quantidade Numeric (4,0) NOT NULL,
	id Numeric (4,0)  NOT NULL,
	id_Usuario Numeric (4,0) NOT NULL,
	CONSTRAINT "Pedido_pk" PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);


ALTER TABLE Cadastro  ADD CONSTRAINT "Cadastro_fk0" FOREIGN KEY (id_endereco) REFERENCES Endereco(id);


ALTER TABLE Pedido ADD CONSTRAINT "Pedido_fk0" FOREIGN KEY (id_Item) REFERENCES Cardapio(id);
ALTER TABLE Pedido ADD CONSTRAINT "Pedido_fk1" FOREIGN KEY (id_Usuario) REFERENCES Cadastro(id);





