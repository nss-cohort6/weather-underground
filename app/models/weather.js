'use strict';

var request = require('request');

function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      sum += parseInt(forecasts[i].high.fahrenheit);
    }

    var avg = sum / forecasts.length;
    cb(avg);
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      sum += parseInt(forecasts[i].low.fahrenheit);
    }

    var avg = sum / forecasts.length;
    cb(avg);
  });
};

Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var temps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      temps.push(parseInt(forecasts[i].high.fahrenheit));
    }

    cb(temps);
  });
};

Weather.lows = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var temps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      temps.push(parseInt(forecasts[i].low.fahrenheit));
    }

    cb(temps);
  });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var temps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      temps.push(parseInt(forecasts[i].high.fahrenheit) - parseInt(forecasts[i].low.fahrenheit));
    }

    cb(temps);
  });
};

module.exports = Weather;

