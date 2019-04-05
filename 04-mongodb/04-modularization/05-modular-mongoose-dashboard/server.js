
const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');
  port = 3000;


const app = express();

require('./server/config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


require('./server/config/routes')(app);











app.listen(port, function(){
  console.log("Running on ", port);
});