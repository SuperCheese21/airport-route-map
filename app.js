const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const getData = require('./api.js');

const app = express();

const DEFAULT_ICAO = 'KPDX';

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('map', {
        icao: DEFAULT_ICAO
    });
});

app.get('/:icao', (req, res, next) => {
    const icao = req.params.icao.toUpperCase();
    const routes = getData.routes(icao);
    if (routes) {
        res.render('map', {
            icao: icao
        });
    }
    else next();
});

app.get('/api/routes/:icao', (req, res, next) => {
    const icao = req.params.icao.toUpperCase();
    const routes = getData.routes(icao);

    if (routes) res.status(200).json(routes);
    else next();
});

app.get('/api/coords/:type/:icao', (req, res, next) => {
    const icao = req.params.icao.toUpperCase();
    const type = req.params.type;
    const coords = getData.coords(icao, type);

    if (coords) res.status(200).json(coords);
    else next();
});

app.get('/api/airlines/:icao1/:icao2', (req, res, next) => {
    const icao1 = req.params.icao1.toUpperCase();
    const icao2 = req.params.icao2.toUpperCase();
    const airlines = getData.airlines(icao1, icao2);

    if (airlines) res.status(200).json(airlines);
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
