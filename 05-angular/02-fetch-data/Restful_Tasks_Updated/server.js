const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();


app.use(helmet())
app.use(compress())
app.use(cors())
app.use(logger('dev'))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(function(req, res, next) {
    console.log(req.url);
    next();
})
require('./server/config/mongoose');


app.use('/tasks', require('./server/config/routes/routes'));



app.listen(port, () => console.log(`express listening on port ${ port }`));