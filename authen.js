var express = require('express');
var router = express.Router();
var request = require("request");
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


//register
router.post('/user', function(req, res) {

    // var options = { method: 'POST',
    // url: 'https://tnk.auth0.com/oauth/token',
    // headers: { 'content-type': 'application/json' },
    // body: '{"client_id":"DEgjSOxq9pBJJIv6hbuIUDAYf0QwjIV5","client_secret":"5mtNz2NxBf-jIPABvMZV14j7FIEtqD3p9lYJ-YaWkv-lJqSptONtLLSArkERoZ7i","audience":"https://tnk.auth0.com/api/v2/","grant_type":"client_credentials","json":"true"' };

    var options = { method: 'POST',
  url: 'https://tnk.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'client_credentials',
     client_id: 'DEgjSOxq9pBJJIv6hbuIUDAYf0QwjIV5',
     client_secret: '5mtNz2NxBf-jIPABvMZV14j7FIEtqD3p9lYJ-YaWkv-lJqSptONtLLSArkERoZ7i',
     audience: 'https://tnk.auth0.com/api/v2/' },
  json: true };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

        // res.send(JSON.parse(body).access_token);
        // res.send(body.access_token);
        var form_data= {
            "user_id": "",
            "connection": "Username-Password-Authentication",
            "email": "john.doe@gmail.com",
            "password": "secret"
          }

        var options = { method: 'POST',
        url: 'https://tnk.auth0.com/api/v2/users',
        headers: { 'content-type': 'Content-Type: application/json',authorization: 'Bearer '+body.access_token } ,
        form:form_data};
        
        
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        
            res.send(body);
        });

//         request.post({url:'https://tnk.auth0.com/api/v2/users', formData: form_data}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   res.send(body);
// });
    });
});

//get user info
router.get('/user', function(req, res) {
    res.send('home page');
  });

//delete user
router.delete('/user', function(req, res) {
  res.send('home page');
});

//update user
router.put('/user', function(req, res) {
    res.send('home page');
});

// Define the about route
router.get('/login', function(req, res) {
  res.send('About us');
});


module.exports = router;