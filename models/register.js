const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
    name:{type:String},
    email:{
      type: String,
      unique: true
        // normalise pour l’unicité insensible à la casse
      
        },

    password:{
        type:String,
        require:true
    }

},

  { timestamps: true }

)

const Useregister = mongoose.model("Useregister", userSchema)
module.exports= Useregister