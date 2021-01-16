/**
* Arquivo: src/routes/products.routes.js
* Descrição: arwuivo responsável pelas rotas da api relacionando a classe 'Product.
* Data: 16/01/2021
* Autor: Pedro Emanuel
*/

const router = require('express-promise-router')();
const userController = require('../controllers/usuario.controller');

// Criação de um 'usuario': (POST)
router.post('/user', userController.createUser)

// Listagem de todos os 'usuarios'
router.get('/users', userController.listUsers)

// Adicionar área
router.post('/area', userController.AddArea);

// Selecionar determinado 'usuarios' pelo 'Id'
router.get('/user/:id', userController.findUserById);

// Excluir 'usuarios' pelo 'Id'
router.delete('/user/:id', userController.deleteUserById);


// Aumentar a pontuação do usuario pelo 'Id'
router.put('/userPoint/:id', userController.increasePoints);

module.exports = router;