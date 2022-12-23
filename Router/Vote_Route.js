const express = require('express');
const passport = require('passport');
const { findVote, getVote } = require('../Controllers/Vote_Controller');
const router = express.Router();

router.post('/vote/:option', passport.authenticate('bearer', { session: false }), findVote);
router.get('/votes', passport.authenticate('bearer', { session: false }), getVote);

module.exports = router;
