require('babel-register');
var express = require('express');
var router = express.Router();
var request = require("request");

import {
  getToken
} from './lib'
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


//register
router.post('/user', (req, res) => {

  getToken.then((token) => {
    // res.send(token);
    let form_data = {
      "user_id": "",
      "connection": "Username-Password-Authentication",
      "email": "uttapong@gmail.com",
      "password": "secret"
    }

    let options = {
      method: 'POST',
      url: 'https://tnk.auth0.com/api/v2/users',
      headers: {
        'content-type': 'Content-Type: application/json',
        authorization: 'Bearer ' + token
      },
      form: form_data
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      res.send(body);
    });
  }).catch((error) => {
    res.send(error);
  })

});

//get user info
router.get('/user', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//delete user
router.delete('/user', function (req, res) {
  res.send('home page');
});

//update user
router.put('/user', function (req, res) {
  res.send('home page');
});

// Define the about route
router.get('/login', function (req, res) {
  res.send('About us');
});


module.exports = router;