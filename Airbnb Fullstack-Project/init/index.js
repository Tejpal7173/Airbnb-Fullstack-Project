const mongoose=require("mongoose");
const initData = require("./data.js");
const Listing=require("../models/listing.js");

async function main() { 
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  }  
main().then(()=>{
    console.log("connected  to db");
}).catch(()=>{
    console.log(err);
});

const initDb = async () =>{
    await Listing.deleteMany({});
   initData.data =  initData.data.map((obj)=>({...obj,
          owner: "67a88d4e90143abf9bde5029" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDb();


