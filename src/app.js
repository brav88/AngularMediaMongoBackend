const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const indexRoutes = require('./routes/index');

mongoose.connect('mongodb://127.0.0.1:27017/AngularMediaBD')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

app.use('/', indexRoutes);

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log(`server on port 3000`);
});            