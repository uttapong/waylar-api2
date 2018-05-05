require('babel-register');
var request = require("request");

export const getToken = new Promise((resolve,reject)=>{
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
      if (error) reject(error);
      resolve(body.access_token)
          // res.send(JSON.parse(body).access_token);
          // res.send(body.access_token);
  
  
      });
   
})

