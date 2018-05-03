var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


//register
router.post('/user', function(req, res) {
  res.send('home page');
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