const mongoose = require("mongoose")
async function connectDB() {
    await mongoose.connect(process.env.MONGOURL)
    console.log("Database connected")                 


}
module.exports = connectDB