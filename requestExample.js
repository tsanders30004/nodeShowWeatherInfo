// ## Making a network request
//
// Write a program that takes in an URL from the command line, makes a request to it, and prints the response to the terminal. You will use the request module to do it: https://www.npmjs.com/package/request
//
// Example output:
//
// $ node request.js http://hellohappy.org
// ...lots of HTML output...
//
// ## Save request to a file
//
// Extend the previous program to save the body of the response to a file. The name of the file will be taken in as the second command line argument. Example output:
//
// $ node request.js http://hellohappy.org hellohappy.html
//
// Now the file hellohappy.html should contain the HTML content of hellohappy.org.


var request = require('request');

function returnShitFromRequest (myUrl, callbackFunction) {
     request({url: myUrl, qs: {}}, function(err, response, body) {
          if (err) {
               callbackFunction(err);
               return;
          }
          var data = JSON.parse(body);
          // call the callback, passing null for err to signal success
          callback(null, data);
     });
}

returnShitFromRequest(process.argv[2], function(err, data){
     if (err) {
          console.log(err.message);
          return;
     }
     console.log(data.toString());
});
