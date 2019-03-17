
module.exports = function Route(app) {
    app.get('/', function(req, res) {
        res.render("index");
       });
    const axios = require('axios');
    app.get('/people', function(req,res){
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        axios.get('https://swapi.co/api/people/')
        .then(data => {
            console.log(data.data);
             res.send(data.data);
            //res.render('index', {data:data.data})
        })
        .catch(error => {
            // log the error before moving on!
            console.log(error);
            res.json(error);
        })
        res.redirect('/');
    });
    // app.get()
};


