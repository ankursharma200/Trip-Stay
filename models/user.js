const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Listing = require('./listing.js');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});

// userSchema.post("findOneAndDelete", async (user) => {
//     if (user) {
//         await Listing.deleteMany({ owner: user._id });
//     }
// });

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

module.exports = User;