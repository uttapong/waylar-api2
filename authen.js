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
console.log(req.body);
  getToken.then((token) => {
    // res.send(token);
    let form_data = {
      "user_id": "",
      "connection": "Username-Password-Authentication",
      "email": req.body.email,
      "password": req.body.password
    }
   console.log(form_data);

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
  // console.log(req.query);
  // res.send(req.query.id);

  getToken.then((token) => {
    // res.send(token);

    let options = {
      method: 'GET',
      url: 'https://tnk.auth0.com/api/v2/users/'+req.query.id,
      headers: {
        'content-type': 'Content-Type: application/json',
        authorization: 'Bearer ' + token
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      res.send(body);
    });
  }).catch((error) => {
    res.send(error);
  })
});

//delete user
router.delete('/user', function (req, res) {
  getToken.then((token) => {
    // res.send(token);
    let options = {
      method: 'DELETE',
      url: 'https://tnk.auth0.com/api/v2/users/'+req.query.id,
      headers: {
        'content-type': 'Content-Type: application/json',
        authorization: 'Bearer ' + token
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      res.send(body);
    });
  }).catch((error) => {
    res.send(error);
  })
});

//update user
router.patch('/user', function (req, res) {
  getToken.then((token) => {
    // res.send(token);
    let form_data = 
      {
        "blocked": false,
        "email_verified": false,
        "email": req.query.email,
        "verify_email": false,
        "phone_number": req.query.phone,
        "phone_verified": false,
        "verify_phone_number": false,
        "password": req.query.password,
        "user_metadata": {},
        "app_metadata": {},
        "connection": "Initial-Connection",
        "username": req.query.username,
        "client_id": "DEgjSOxq9pBJJIv6hbuIUDAYf0QwjIV5"
      }
    
   console.log(form_data);

    let options = {
      method: 'PATCH',
      url: 'https://tnk.auth0.com/api/v2/users'+req.query.id,
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

// Define the about route
router.get('/login', function (req, res) {
  res.send('About us');
});


module.exports = router;