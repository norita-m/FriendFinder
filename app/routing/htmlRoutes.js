//DEPENDENCIES
//we need to include path package to get the correct file path for our HTML
var path = require("path");

//ROUTING
// ==============================================================================
module.exports = function(app) {
	//HTML GET Requests
	//this code handles when users visit a page
 	//in each case below the user is shown an HTML page of content

 	//QUESTION: DO I NEED THIS ONE OR NAH SINCE IT'S HOME?
 	// app.get("/home", function(req, res) {
 	// 	res.sendFile(path.join(__dirname, "/../public/home.html"));
 	// });

 	app.get("/survey", function(req, res) {
 		res.sendFile(path.join(__dirname, "/../public/survey.html"));
 	});

 	app.use(function(req, res) {
 		res.sendFile(path.join(__dirname, "/../public/home.html"));
 	});

};