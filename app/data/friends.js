//DATA 
//below data will hold all of the user's details
//Initially it is set as a "dummy" user
//but it's also ok to have an empty array

var userArray = [
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   }
];

// this is how to export the array so that it is accessible to other files using require
module.exports = userArray;