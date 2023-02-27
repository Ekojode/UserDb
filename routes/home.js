const express = require('express');

const router = express.Router();

const users = require('./user');

router.get('/',(req,res)=>{
     res.render('home', {userDirectory: users.userDirectory, title: 'kind'});
     console.log('This is home');
     console.log(users.userDirectory);
});

module.exports = router;