'use strict'
const express = require('express');
const config = require('./helpers/config');
const expresslayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/email-routes');


const app = express();
app.use(expresslayouts);
app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(emailRoutes.routes);




const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));