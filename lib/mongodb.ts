import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI as string;

if(!MONGO_URI){
    throw new Error("MOGODB URI , not found or INVALID")
}

mongoose.connect(MONGO_URI)
.then(()=>console.log("connected to DB"))
.catch((e)=>console.error(e))