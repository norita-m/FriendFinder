//DEPENDENCIES
//npm packages that we need to give our server useful functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================

//EXPRESS CONFIGURATION
//Sets up basic properties we need for our express server
 
//tells node we are creating an "express" server
var app = express();

//sets an intial port (will be used later in listener)
var PORT = process.env.PORT || 8080;

//bodyParser makes it possible for server to interpret data sent to it
//standard code below
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ==============================================================================

//ROUTER
//below code points our server to a series of "route" files
//these routes give our server a "map" of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================

//LISTENER
//this code starts our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});