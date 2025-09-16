const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const auth = require('./routes/routeUser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Register = require('./models/register')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const  middlewareLogin = require('./middleware/login')
dotenv.config();
const PORT = process.env.PORT || 5000;  

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("MongoDB connected"))
.catch((err) => {
   console.error(err)
   console.log('Mongodb not connected')
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.post('/register',async (req, res)=>{
              
  const { email, password} = req.body;    
    try {
    const passwordHash = await bcrypt.hash(password, 10);
    const emailExists = await Register.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ erreur: "Email déjà utilisé" });
    }
    const user = await Register.create({  email:email, password:passwordHash });
    res.json(user);
        console.log(user)

  } catch (err) {
    console.error("Erreur lors de l'enregistrement :", err);
    res.status(500).json({ erreur: "Erreur de serveur" });
  }
       });


app.post('/login',  async (req, res) => {
  
  console.log("le corps du devoir ", req.body)
  try {
    const { email, password } = req.body;

    const user = await Register.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Utilisateur non existant" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    // genérer un token JWT ici si nécessaire

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Authentification réussie
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});




// login with function asyc and await

  app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port: ${PORT}`);
});