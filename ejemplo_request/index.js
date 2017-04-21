'use strict';

const request = require('request');

request({ url: 'http://swapi.co/api/people/1/', json: true }, (err, response, body) => {
    if (err || response.statusCode >= 400) {
        console.log(err, response.statusCode, response.body);
    }

    console.log(response.body);
});