const express = require("express");
const routes = express.Router();
const path = require('path')
const { readFile } = require('fs');

routes.get('/', (req, res) => {
    const pathFile = path.dirname(__dirname)
    const caminho = pathFile + '/files/words.txt'
    const letras = []

    readFile( caminho, 'utf8',(err, data) => {
        if(err){
            res.status(500).send(err);
            return
        }

        letras.push(data.split('\r\n').splice(0, 1500))

        res.json(letras)

    })


})


module.exports = routes;