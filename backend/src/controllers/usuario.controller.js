/**
* Arquivo: src/controller/products.controller.js
* Descrição: arwuivo responsável pela lógica do CRUD da API 'Product'.
* Data: 16/01/2021
* Autor: Pedro Emanuel
*/

const db = require('../config/database');

// ==> Método responsavel por criar um novo 'Usuário'
// 	nome, sobrenome, nascimento, endereco_Id, imageUrl, mentor, contato_Id,
// quantidade_conexoes, perfil, pontos
exports.createUser = async(req, res) => {
    const { nome, sobrenome, nascimento, imageUrl,
        mentor,  cep, uf, telefone, email, perfil } = req.body;
    try {
        const endereco = await db.query(
            'INSERT INTO enderecos (cep, uf) VALUES ($1, $2) RETURNING endereco_id',
            [cep, uf]
        );
        
        const contato = await db.query(
            'INSERT INTO contatos (telefone, email) VALUES ($1, $2) RETURNING contato_id',
            [telefone, email]
        );
        
        const endereco_Id = endereco.rows[0].endereco_id;
        const contato_Id =  contato.rows[0].contato_id;

        const responde = await db.query(
            'INSERT INTO usuarios (nome, sobrenome, nascimento, endereco_Id, imageUrl, mentor, contato_Id, perfil) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [nome, sobrenome, nascimento, endereco_Id, imageUrl, mentor, contato_Id, perfil]
        );
        await db.query('COMMIT');

    } catch(e) {
        await db.query('ROLLBACK')
        throw e
    }

    res.status(201).send({
        message: 'Product added succesfully!',
        // body: {
        //     product: { product_name, quantity, price }
        // },
    });
};

//==> Metodo responsável por adicionar 'areas' ao perfil
exports.AddArea = async(req, res) => {

    const { usuario_Id, area_Id } = req.body;

    const responde = await db.query(
        'INSERT INTO areas_usuarios (usuario_Id, area_Id) VALUES ($1, $2)',
        [usuario_Id, area_Id]
    );

    res.status(201).send();
}

//==> Metodo responsável por listar todos os 'Usuário' com suas informações
exports.listUsers = async(req, res) => {
    const response = await db.query('SELECT * FROM usuarios ORDER BY nome ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Usuário' pelo 'Id'
exports.findUserById = async(req, res) => {
    const userId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM usuarios WHERE usuario_Id = $1', [userId]);

    const certificados = await db.query('SELECT titulo_certificacao FROM usuario_certificao UC, certificacoes C WHERE UC.certificacao_Id = C.certificacao_Id AND UC.usuario_Id =$1', [userId]);
    const areas = await db.query('SELECT nome_area FROM areas_usuarios AU, areas A WHERE AU.area_Id = A.area_Id AND AU.usuario_Id =$1', [userId]);
    
    const retorno = [[...response.rows], areas.rows, certificados.rows]
    
    res.status(200).send(
        retorno
    );
}

// ==> Método responsável por deletar 'Usuário' pelo 'Id'
exports.deleteUserById = async (req, res) => {
    const UserId = parseInt(req.params.id);
    await db.query('DELETE FROM usuarios WHERE usuario_Id = $1', [UserId]);

    res.status(200).send({ message: 'User deleted successfully!', UserId });
};

// ==> Método responsável para encrementar pontuação de um 'Usuário' pelo 'Id'
exports.increasePoints = async (req, res) => {

    const usuarioId = parseInt(req.params.id);

    const response = await db.query(
        "UPDATE usuarios SET pontos = pontos + 5 WHERE pontos < 200 AND usuario_Id = $1 ",
        [usuarioId]
    );

    res.status(200).send();
}