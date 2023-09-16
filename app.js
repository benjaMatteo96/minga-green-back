import 'dotenv/config.js';
import cors from 'cors'
import './config/database.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//// Importacion los middlewares
import errorHandler from './middleware/error-handler.js'
import notFoundHandler from './middleware/not-found-handler.js'



import indexRouter from './routes/index.js';
/* import usersRouter from './routes/users.js'; */

import { __dirname } from './utils.js'
import { __filename } from './utils.js'

const app = express();

// view engine setup
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// e01-errors//

// Agrega los middlewares a la aplicación
app.use(errorHandler);
app.use(notFoundHandler);
//

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

/*  M01-nav . Modificar la navegación de la app para que:
  Si el usuario está logueado:
  /mangas/:page renderiza Mangas en la página que corresponda
  en la barra de navegación agregar el botón correspondiente con el título Mangas
Si el usuario no está logueado debe re-dirigir hacia NotAllowed	 */

/* const isAuthenticated = checkUserAuthentication(req);
if (isAuthenticated) {
  // Renderizar la página de Mangas
  res.render('mangas');
} else {
  // Redirigir al usuario no autenticado a la página de NotAllowed
  res.redirect('/notallowed');
}

// Ruta para la página de NotAllowed
app.get('/notallowed',
  (req, res) => {
    // Renderizar la página de NotAllowed
    res.render('notallowed');
  }); */


// M01 enpoints (sprint3)//
//enrutador para el registro de usuarios.//

/*const express = require('express');
const registerRouter = express.Router();*/

