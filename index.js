var express = require('express');
var app = express();
var bodyParser    = require('body-parser');
var session       = require('express-session');
var favicon       = require('serve-favicon');

var config        = require('./config');
var compression   = require('compression');

app.set('port', (process.env.PORT || 3000));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(compression());
app.use(favicon(__dirname + '/public/img/favicon/favicon.ico'));
app.use(express.static(__dirname + '/public', { maxAge: 604800000}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'swank', saveUninitialized: true, resave: true }));

require('./routes.js')(app);

app.listen(app.get('port'));
