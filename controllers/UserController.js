//const bycrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
//const existingUEmail = await User.find

const checkemail= "yvonnd152@gmail";
const checkpassword= "yvonnd152";

 const login= async(req, res)=>{
    const {email, password} = req.body;
    try{
     const user = await User.findOne({email})
    if(existingUEmail !== checkemail) return res.status(400).json({message:"l'email incorrecte "});
    if(existingUPassword !== checkpassword) return res.status(400).json({message:"le mot de passe incorrecte "});
    const Token = jwt.sign({email},process.env.JWT_SECRET, {expiresIn:"1h"});

    res.status(200).json({
        message:"vous etes bien connecté",
        Token,
        redirect: "/dashboard"
    })

}
catch(err){
    console.error(err);
    res.status(500).json({message:"Erreur serveur"});
    }

}
module.exports= login;

