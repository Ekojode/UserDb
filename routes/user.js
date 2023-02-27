const express = require('express');

const router = express.Router();

var users = [];

router.get('/', (req, res)=>{
    res.render('user');
});

router.post('/addUser', (req,res)=>{
    users.push(req.body.user);
    console.log(users);
    res.redirect('/');
});

module.exports.route = router;
module.exports.userDirectory = users;