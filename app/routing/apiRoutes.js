//LOAD DATA
//linking our routes to a series of "data" sources
//these data sources hold arrays of information on survey

var surveyData = require("../data/surveyData");

// ===============================================================================

//ROUTING

module.exports = function(app) {
    //API GET requests
    //this code handles when users "visit" a page
    //in the case below, when a user visits a link they are shown
    // a JSON of the data in the table 
    app.get("/api/survey", function(req, res) {
        res.json(surveyData);
    });
};

//API POST REQUEST
//below code handles when a user submits a form and thus submits data to the server
//in the case bwlo, when user submits form data (a JSON object)
// ... the JSON is pushed to the appropriate JS array
// (ex: user fills out survey, this data is then sent to server...
// ...then the server saves the data to the surveyData array

app.post("/api/friends", function(req, res) {
    //this code is used so that server can respond to requests and let user 
    // ...know who their match is. HW instructions: "This will be used to handle incoming survey results. 
    // ...This route will also be used to handle the compatibility logic."

    ///WRITE CODE

	};
});

//code below is so we can clear out table while working with functionality
app.post("/api/clear", function() {
    //empty out array of data
    surveyData = [];

    console.log(surveyData);
});
};
