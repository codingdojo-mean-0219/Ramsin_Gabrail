const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(helmet())
  .use(compress())
  .use(cors())
  .use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }));
  
app.use(function(req, res, next) {
  console.log(req.url);
  next();
})



require('./server/config/database');
console.log("before the stuff");
// routes
app.use('/tasks', require('./server/config/routes/task.routes'));



app.listen(port, () => console.log(`express listening on port ${ port }`));