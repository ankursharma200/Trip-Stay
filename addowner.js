const mongoose = require("mongoose");
const Listing = require("./models/listing");

const dbUrl = "mongodb://localhost:27017/tripstay";

async function main() {
    await mongoose.connect(dbUrl);
    const ownerId = "68947dd3ad2e491b3d856c35"; // Replace with your actual user _id
    await Listing.updateMany({}, { owner: ownerId });
    console.log("All listings now have an owner.");
    await mongoose.connection.close();
}

main().catch(console.error);
