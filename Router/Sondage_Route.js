const express = require('express');
const passport = require('passport');
const { addSondage, deleteSondage, updateSondage, getSondagebyid, getSondage } = require('../Controllers/Sondage_Controller');
const router = express.Router();

router.post('/addSondage', passport.authenticate('bearer', { session: false }), addSondage);
router.get('/getSondage', passport.authenticate('bearer', { session: false }), getSondage);
router.get('/getSondagebyid/:idSondage', passport.authenticate('bearer', { session: false }), getSondagebyid);
router.put('/updateSondage/:idSondage', passport.authenticate('bearer', { session: false }), updateSondage);
router.delete('/deleteSondage/:idSondage', passport.authenticate('bearer', { session: false }), deleteSondage);

module.exports = router;