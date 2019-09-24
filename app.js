const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')


const app = express();

//DBconfig
const db = require('./config/keys').MongoURI;

//Connecet to Mongo
mongoose.connect(db, { useNewUrlParser: true})
.then (()=> console.log('MonggoDB Connected ....'))
.catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body parser
app.use(express.urlencoded({extended: false}));



//Routes
app.use('/', require('./routes/index')),
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));