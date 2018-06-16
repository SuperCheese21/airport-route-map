const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const getData = require('./getData.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'IND Route Map'
    });
});

app.get('/api/routes/:iata', (req, res, next) => {
    const iata = req.params.iata.toUpperCase();
    const routes = getData.routes(iata);
    if (routes) res.status(200).send(routes);
    else next();
});

app.get('/api/coords/:type/:iata', (req, res, next) => {
    const iata = req.params.iata.toUpperCase();
    const type = req.params.type;

    let coords = {};
    if (type == 'airports') coords = getData.airportCoords(iata);
    else if (type == 'routes') coords = getData.routeCoords(iata);
    else next();

    if (coords) res.status(200).send(coords);
    else next();
});

app.get('*', (req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
