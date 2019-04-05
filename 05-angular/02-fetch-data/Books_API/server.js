const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const mongoose = require('./server/config/mongoose')();


const { PORT: port = 8000 } = process.env;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/authors', require('./server/config/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));