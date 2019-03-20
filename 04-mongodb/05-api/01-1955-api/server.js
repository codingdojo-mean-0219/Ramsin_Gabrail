const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => {
    console.log(`Express server listening on port ${ port }`)
}
);