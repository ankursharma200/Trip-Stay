const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");

const dbUrl = process.env.ATLASDB_URL || "mongodb://localhost:27017/tripstay";

main().then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error(err);
});

async function main() {
    await mongoose.connect(dbUrl);

    const user1 = await User.findOne({ username: "ankur" });
    const user2 = await User.findOne({ username: "ankur2" });

    if (!user1 || !user2) {
        console.log("Users not found");
        return;
    }

    const listings = await Listing.find({});

    for (let i = 0; i < listings.length; i++) {
        const listing = listings[i];
        listing.owner = i % 2 === 0 ? user1._id : user2._id; // alternate owners
        await listing.save();
        console.log(`Updated listing ${listing._id} with owner ${listing.owner}`);
    }

    console.log("All listings updated.");
    mongoose.connection.close();
}
