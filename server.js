/////////////////////////////////////////////////////////
// handle environment variables
/////////////////////////////////////////////////////////

// use dotenv to read .env vars into Node but silence the Heroku log error for production as no .env will exist
require('dotenv').config( { silent: process.env.NODE_ENV === 'production' } );

// process.env.NODE_ENV is set by heroku with a default value of production
if (process.env.NODE_ENV === 'production') {
    console.log("in PROD");
    // connect to the MongoDB on heroku using MONGODB_URI below
  } else {
    console.log("in DEV");
    // use the connection info from the .env file otherwise
    require('dotenv').load();
  }

//////////////////////////
// dependencies
//////////////////////////
const mongoose = require("mongoose");
const express = require('express');
const session = require('express-session');
const path = require("path");
const bodyParser = require("body-parser");

///////////////////////
// configure Express
///////////////////////
const app = express();
// app.use(express.json());

const port = process.env.PORT || 5000;

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////////////
// CORS / Chat-Kit
//////////////////////
const cors = require('cors');
// const Chatkit = require('pusher-chatkit-server');

app.use(cors())

// const chatkit = new Chatkit.default({
//     instanceLocator: "v1:us1:bf8def9e-a084-4d5d-b55c-018e22b58449",
//     key: "e4ca655d-422d-4c06-852f-3ead9e2cd075:INafeTcxNJXMZ1VD7nkxQOLTmPnhfizwRZtcrhKjt0w=",
//     url: `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bf8def9e-a084-4d5d-b55c-018e22b58449/token`
//   });

// serve static folders
app.use(express.static(__dirname + '/public'));

/////////////////////////
// connect to Mongo DB
/////////////////////////
// If deployed, use the deployed database. Otherwise use the local thespacebar database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/thespacebar";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

/////////////////////
// Expess Session
/////////////////////
// console.log("secret: " +  process.env.SECRET_KEY);
app.use(session({
    secret: process.env.SECRET_KEY,     // put this in the heroku environment variables
    saveUninitialized: true,
    resave: true
  }));

//////////////////////
// enable CORS
//////////////////////
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
});

////////////////////////////////
// console log all routes
////////////////////////////////
app.use('/', function (req, res, next) {
  console.log("----------------------------");
  console.log("Original Url: " + req.originalUrl);
  console.log("Base Url: " + req.baseUrl);
  console.log("Path: " + req.path);
  console.log("----------------------------");
  next();
});

////////////////////////////////
//auth required or redirect
////////////////////////////////
//  app.use('/api/account', function(req, res, next) {
//   if ( !req.session.user ) {
//     res.redirect('/login?ref='+req.path);
//   } else {
//     next();
//   }
// });

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/app_controller.js");
app.use(routes);

//////////////////////
// initial route
//////////////////////
// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From Express, Jenni' });
//   });
  
// app.get('/api/art', (req, res) => {
//     res.send({ express: 'My art route!' });
//   });

/////////////////////////////////////
// handle production environment
/////////////////////////////////////
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        console.log("no route hit");
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {

    //////////////////////////////////////////////////////////
    //default for when no other route is hit.  Must be last
    //////////////////////////////////////////////////////////
    app.get('*', (req, res) => {
        console.log("no route hit");
        res.send({ express: 'Hello - No route was hit' });
    })
}

// listen for request
app.listen(port, () => console.log(`Listening on port ${port}`));

// const CHAT_PORT = 3001
// app.listen(CHAT_PORT, err => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(`Chat running on port ${CHAT_PORT}`)
//   }
// })