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

//swagger
import swaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
//  objeto, donde le pasamos la configuracion inicial//
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:8000",
      }
    ]

  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

//middleware//



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
// /api-doc es la ruta donde me muestra la documentacion//
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))



app.use('/', indexRouter);

//app.use('/', fileServer(urlArchivos))

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

