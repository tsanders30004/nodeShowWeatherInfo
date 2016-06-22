/* requires request module; install via 'npm install request' if necessary. */


var request = require('request');

// extract my own asynchronous function
function getWeather(city, callback) {
     request({
          url: 'http://api.openweathermap.org/data/2.5/weather',
          qs: {
               q: city,
               units: 'imperial',
               APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
          }
     }, function(err, response, body) {
          if (err) {
               // call the callback
               callback(err);
               return;
          }
          // convert the body in JSON format to a JS object
          var data = JSON.parse(body);
          // call the callback, passing null for err to signal success
          callback(null, data);
     });
}

getWeather('Atlanta, GA', function(err, data) {
     if (err) {
          console.error(err.message);
          return;
     }
     console.log('Weather:', data.weather[0].description);
     console.log('Temperature:', data.main.temp + '°');
});
