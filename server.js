const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('pruebaCobrando', require('./routes/pruebaC.js'));

module.exports = app 