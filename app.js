const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const homeRoute = require('./routes/home');
const user = require('./routes/user');

const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoute);
app.use('/user',user.route);

app.listen(port, () => {
    console.log('App has started');
})