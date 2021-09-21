const mongoose=require("mongoose")


const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
    console.log("successfully connected to database :) ")
    } catch (error) {
        console.log('cannot connect '+ error)
    }
}
module.exports=connectdb