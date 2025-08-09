const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: __dirname + "/../.env" });

main().
    then(()=>{
        console.log("Database connection successful");
    })
    .catch((err)=>{
        console.log(err)
    });

async function main(){
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async ()=> {
    await Listing.deleteMany({});
    data.data = data.data.map((obj) => ({
        ...obj,owner: '6896dbee92e8d3e66eb63a7a',
    }))
    await Listing.insertMany(data.data);
    console.log("data initialized successfully");
}

initDB();