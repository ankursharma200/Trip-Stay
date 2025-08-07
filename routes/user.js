const express = require("express");
const wrapAsync = require("../utiles/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router.get("/", (req, res) => {
    res.redirect("/listings");
});

router.route("/signup")
.get(userController.signupForm)
.post(wrapAsync(userController.signup));


router.route("/login")
.get(userController.loginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash: true}),userController.login);

router.get("/logout",userController.logout);

module.exports = router;