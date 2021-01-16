-- Database: aprendIn

-- DROP DATABASE "aprendIn";

CREATE TABLE enderecos (
	endereco_Id SERIAL PRIMARY KEY,
	cep varchar(10),
	uf varchar(2)
);

CREATE TABLE contatos (
	contato_Id SERIAL PRIMARY KEY,
	telefone varchar(50) UNIQUE,
	email varchar(100) UNIQUE
);

CREATE TABLE usuarios (
	usuario_Id SERIAL PRIMARY KEY,
	nome varchar(30) NOT NULL,
	sobrenome varchar(30) NOT NULL,
	nascimento date,
	endereco_Id integer UNIQUE,
	imageUrl text NULL,
	mentor boolean,
	contato_Id integer UNIQUE,
	quantidade_conexoes integer NOT NULL,
	perfil varchar(20),
	pontos integer NOT NULL,
	FOREIGN KEY (endereco_Id) REFERENCES enderecos (endereco_Id) ON DELETE CASCADE,
	FOREIGN KEY (contato_Id) REFERENCES contatos (contato_Id) ON DELETE CASCADE
);

CREATE TABLE certificacoes (
	certificacao_Id SERIAL PRIMARY KEY,
	titulo_certificacao varchar(50)
);

CREATE TABLE conexoes_Solicitadas (
	mentorado_Id integer,
	mentor_Id integer,
	CONSTRAINT pk_conexoes_solicitadas PRIMARY KEY (mentorado_Id, mentor_Id),
	FOREIGN KEY (mentorado_Id) REFERENCES usuarios (usuario_Id),
	FOREIGN KEY (mentor_Id) REFERENCES usuarios (usuario_Id)
);

CREATE TABLE conexoes (
	mentorado_Id integer,
	mentor_Id integer,
	CONSTRAINT pk_conexoes PRIMARY KEY (mentorado_Id, mentor_Id),
	FOREIGN KEY (mentorado_Id) REFERENCES usuarios (usuario_Id),
	FOREIGN KEY (mentor_Id) REFERENCES usuarios (usuario_Id)
);

CREATE TABLE areas (
	area_Id SERIAL PRIMARY KEY,
	nome_area varchar(30)
);

CREATE TABLE usuario_certificao (
	usuario_Id integer NOT NULL,
	certificacao_Id integer NOT NULL,
	CONSTRAINT pk_usuario_certificao PRIMARY KEY (usuario_Id, certificacao_Id),
	FOREIGN KEY (usuario_Id) REFERENCES usuarios (usuario_Id),
	FOREIGN KEY (certificacao_Id) REFERENCES certificacoes (certificacao_Id)
);

CREATE TABLE mentor (
	usuario_Id integer PRIMARY KEY,
	area_Id integer,
	profissao varchar(30),
	resumo_de_carreira varchar(255),
	FOREIGN KEY (usuario_Id) REFERENCES usuarios (usuario_Id),
	FOREIGN KEY (area_Id) REFERENCES areas (area_Id)
);

CREATE TABLE empresa (
	empresa_Id SERIAL PRIMARY KEY,
	nome_empresa varchar(30),
	endereco_Id integer,
	FOREIGN KEY (endereco_Id) REFERENCES enderecos (endereco_Id)
);

CREATE TABLE mentor_empresa (
	usuario_Id integer,
	empresa_Id integer,
	CONSTRAINT pk_mentor_empresa PRIMARY KEY (usuario_Id, empresa_Id),
	FOREIGN KEY (usuario_Id) REFERENCES mentor (usuario_Id),
	FOREIGN KEY (empresa_Id) REFERENCES empresa (empresa_Id)
);

CREATE TABLE areas_usuarios (
	usuario_Id integer,
	area_Id integer,
	CONSTRAINT pk_areas_usuarios PRIMARY KEY (usuario_Id, area_Id),
	FOREIGN KEY (usuario_Id) REFERENCES usuarios (usuario_Id),
	FOREIGN KEY (area_Id) REFERENCES areas (area_Id)
);