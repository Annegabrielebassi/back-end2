const express = require('express');
const colecaoUf = require('./cores/cores.js');

const app = express ();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf.colecaoUf)
});

app.get('/ufs/:iduf', (req, res) => {
     const idUF = parseInt(req.params.iduf)
     const uf = colecaoUf.colecaoUf.find(u => u.id === idUF)
     res.json(uf)
});