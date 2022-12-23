const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const passport = require('passport');
const dotenv = require('dotenv');


dotenv.config();
require('./Connect/Connect');
require('./passport/bearer');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('express-session')({ secret: process.env.JWT_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const UserRoute = require('./Router/User_Route');
app.use(UserRoute);
const SondageRoute = require('./Router/Sondage_Route')
app.use(SondageRoute);

const VoteRoute = require('./Router/Vote_Route')
app.use(VoteRoute);

app.listen(port, function () { console.log(`server is listetning on port${port}`) });

