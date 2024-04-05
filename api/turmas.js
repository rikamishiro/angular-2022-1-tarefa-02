const express = require('express');
const router = express.Router();

const LIVROS = [
  {
    "_id": "613be41ddb9c47fb90d20d98",
    "genero": "Crônicas",
    "livros": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 111,
        "nome": "Seminário dos Ratos",
        "autor": "Lygia Fagundes Telles",
        "ano": 1997,
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 333,
        "nome": "Antes Que o Café Esfrie",
        "autor": "Toshikazu Kawaguchi",
        "ano": 2022,
      },
    ],
  },

  {
    "_id": "613be41ddb9c47fb90d20d98",
    "genero": "Horror",
    "livros": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 222,
        "nome": "A Vegetariana",
        "autor": "Han Kang",
        "ano": 2007,
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 444,
        "nome": "Saboroso Cadáver",
        "autor": "Agustina Bazterrica",
        "ano": 2017,
      },
    ],
  },

  {
    "_id": "613be41ddb9c47fb90d20d98",
    "genero": "Fantasia",
    "livros": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 555,
        "nome": "O Circo da Noite",
        "autor": "Erin Morgenstern",
        "ano": 2011,
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 666,
        "nome": "O Caminho dos Reis",
        "autor": "Brandon Sanderson",
        "ano": 2010,
      },
    ],
  },

  {
    "_id": "613be41ddb9c47fb90d20d98",
    "genero": "Realismo Mágico",
    "livros": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 777,
        "nome": "O Parque das Irmãs Magníficas",
        "autor": "Camila Sosa Villada",
        "ano": 2019,
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 888,
        "nome": "O Nariz",
        "autor": "Nikolai Gógol",
        "ano": 1836,
      },
    ],
  },

  {
    "_id": "613be41ddb9c47fb90d20d98",
    "genero": "Ficção",
    "livros": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 999,
        "nome": "Noites Brancas",
        "autor": "Fiodor Dostoiévski",
        "ano": 1848,
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 112,
        "nome": "Um Sopro de Vida",
        "autor": "Clarice Lispector",
        "ano": 1978,
      },
    ],
  },

];

router.get('/', function(req, res, next){
  res.json(TURMAS.map(g => ({
    _id: g._id,
    nome: g.nome,
    autor: g.autor,
    ano: g.ano,
    generoliterario_codigo: g.generoliterario_codigo.codigo,
  })));
});

router.get('/:_id', function(req, res, next){
  const _id = req.params._id;
  const generoliterario = GENEROLITERARIO.find(g => g._id === _id);
  res.json(generoliterario);
});

module.exports = router;
