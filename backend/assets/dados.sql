INSERT INTO areas (nome_area) VALUES ('Ciências Exatas e da Terra');
INSERT INTO areas (nome_area) VALUES ('Ciências Biológicas');
INSERT INTO areas (nome_area) VALUES ('Engenharias');
INSERT INTO areas (nome_area) VALUES ('Ciências da Saúde');
INSERT INTO areas (nome_area) VALUES ('Ciências Agrárias');
INSERT INTO areas (nome_area) VALUES ('Ciências Sociais Aplicadas');

INSERT INTO certificacoes (titulo_certificacao) VALUES ('Desenvolvimento Pessoal');
INSERT INTO certificacoes (titulo_certificacao) VALUES ('Manketing');
INSERT INTO certificacoes (titulo_certificacao) VALUES ('Informática Básica');
INSERT INTO certificacoes (titulo_certificacao) VALUES ('Libras');

INSERT INTO contatos (telefone, email) VALUES ('00000000000', 'exemplo1@exemplos.com');
INSERT INTO contatos (telefone, email) VALUES ('11111111111', 'exemplo2@exemplos.com');
INSERT INTO contatos (telefone, email) VALUES ('22222222222', 'exemplo3@exemplos.com');
INSERT INTO contatos (telefone, email) VALUES ('33333333333', 'exemplo4@exemplos.com');

INSERT INTO empresa (nome_empresa, endereco_id) VALUES ('AAAA', 1);
INSERT INTO empresa (nome_empresa, endereco_id) VALUES ('BBBB', 2);

INSERT INTO enderecos (cep, uf) VALUES ('11111-111', 'XX');
INSERT INTO enderecos (cep, uf) VALUES ('11111-111', 'XX');
INSERT INTO enderecos (cep, uf) VALUES ('11111-111', 'XX');
INSERT INTO enderecos (cep, uf) VALUES ('11111-111', 'XX');

INSERT INTO usuarios (nome, sobrenome, nascimento, endereco_id, imageUrl, mentor, contato_id, perfil) VALUES (
	'Exemplo',
	'Exemplificar',
	'10/10/2000',
	3,
	'http://image.png',
	false,
	3,
	'Desbravador'
);
INSERT INTO usuarios (nome, sobrenome, nascimento, endereco_id, imageUrl, mentor, contato_id, perfil) VALUES (
	'Exemplo2',
	'Exemplificar',
	'10/10/1995',
	4,
	'http://image.png',
	true,
	4,
	'Desbravador'
);

INSERT INTO areas_usuarios (usuario_id, area_id) VALUES (1, 3);
INSERT INTO areas_usuarios (usuario_id, area_id) VALUES (1, 5);
INSERT INTO areas_usuarios (usuario_id, area_id) VALUES (1, 6);
INSERT INTO areas_usuarios (usuario_id, area_id) VALUES (2, 1);
INSERT INTO areas_usuarios (usuario_id, area_id) VALUES (2, 4);

INSERT INTO mentor_empresa (usuario_id, empresa_id) VALUES (2, 1);

INSERT INTO usuario_certificao (usuario_id, certificacao_id) VALUES (1, 1);
INSERT INTO usuario_certificao (usuario_id, certificacao_id) VALUES (2, 2);
INSERT INTO usuario_certificao (usuario_id, certificacao_id) VALUES (2, 3);

INSERT INTO vagas (cidade, vagaUrl, titulo_vaga) VALUES ('São Paulo', 'https://www.vagas.com.br/vagas/v2144415/jovem-aprendiz', 'Jovem Aprendiz');
INSERT INTO vagas (cidade, vagaUrl, titulo_vaga) VALUES ('Rio de Janeiro', 'https://www.vagas.com.br/vagas/v2144415/jovem-aprendiz', 'Jovem Aprendiz');
INSERT INTO vagas (cidade, vagaUrl, titulo_vaga) VALUES ('Belo Horizonte', 'https://www.vagas.com.br/vagas/v2146800/jovem-aprendiz', 'Jovem Aprendiz');
