const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

main().
    then(()=>{
        console.log("Database connection successful");
    })
    .catch((err)=>{
        console.log(err)
    });

async function main(){
    await mongoose.connect("mongodb://localhost:27017/tripstay");
}

const initDB = async ()=> {
    await Listing.deleteMany({});
    data.data = data.data.map((obj) => ({
        ...obj,owner: '667e5e952983ec35f8218645',
    }))
    await Listing.insertMany(data.data);
    console.log("data initialized successfully");
}

initDB();