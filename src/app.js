const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/AngularMediaBD')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

app.use('/', indexRoutes);
app.use('/users', usersRoutes);

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log(`server on port 3000`);
});            