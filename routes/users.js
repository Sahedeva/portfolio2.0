var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /routes/users.js
router.get('/:name', function(req, res, next) {
    res.render('users/show', {
        name: req.params.name,
        favorite: null
    });
});

// /routes/users.js
router.get('/new', function(req, res, next) {
    res.render('users/new');
});

// /routers/users.js
router.post('/', function(req, res, next) {
     res.render('users/show', {
        name: req.body.name,
        favorite: req.body.favorite
    });
});

module.exports = router;
