const PORT = 8080;
const express = require('express');
const app = express();


//models:
var Model = require('./models/Model');

//Body-Parser
//this will let us get the data from a POST
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json());


// get an instance of the express Router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('');
    console.log('###### Request Triggered ######');

    console.log('From :' + req.url);
    if (req.body !== null) {
        console.log('With a body content :' + JSON.stringify(req.body));
    }
    console.log('###############################');
    console.log('');

    next(); // make sure we go to the next routes and don't stop here
});

//api health
router.get('/', function (req, res) {
    res.status(200).json({message: 'Node Server API is running ... !', Status: "green"});
});

// /api/route
router.route('/route').post(function (req, res) {

    req.body.forEach(function (log) {
        console.log(log);
    });

    res.status(200).json({response: "success"});

});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(PORT);

console.log('Server is running at port: ' + PORT);

