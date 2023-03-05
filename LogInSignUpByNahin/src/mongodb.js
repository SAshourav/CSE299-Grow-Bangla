const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LogInSignUpByNahin")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})


const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection