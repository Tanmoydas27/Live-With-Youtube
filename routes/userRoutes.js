const express = require('express');
// require('events').EventEmitter.defaultMaxListeners =10;

const router = express.Router();

const passport = require('passport');
var userProfile;

router.use(passport.initialize());
router.use(passport.session());


router.get('/success', (req, res) => res.send(userProfile));

router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

router.get('/',(req,res)=>{
    res.send({success:true, message:'Home Route Of User'});
});

router.get('/auth/google', 
    passport.authenticate('google',{scope:['profile', 'email']}));

router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/error' }),
    function(req, res) {
      // Successful authentication, redirect success.
      res.redirect('/success');
    });



module.exports = router;