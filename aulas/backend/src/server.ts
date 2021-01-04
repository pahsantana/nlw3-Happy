import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
// origin
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler);

app.listen(3333);

//Driver nativo(não oferece abstração- escrever tudo), Query builder(Knex- JS-sintaxe amigável), ORM (classes- SELECT *- instância)
//ORM - Object Relational Mapping
// trocar de bancos qualquer banco de dados

//REQUISIÇÃO / RESPOSTA
//localhost:3333