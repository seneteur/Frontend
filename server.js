const express = require('express');
const cors = require('cors');
const app = express();
const auth = require('./routes/routeUser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Register = require('./models/register')
const bcrypt = require('bcrypt')
dotenv.config();
const PORT = process.env.PORT || 5000;  

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("MongoDB connected"))
.catch((err) => console.error(err));



app.use(cors());
app.use(express.json())

app.use('/api', auth);
app.post('/register',async (req, res)=>{
              
const { name, email, password } = req.body;    
         try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await Register.create({ name, email, password:passwordHash });
    res.json(user);
  } catch (err) {
    console.error("Erreur lors de l'enregistrement :", err);
    res.status(500).json({ erreur: "Erreur de serveur" });
  }
       });

       app.post('/login', (req, res)=>{

               
       })



app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port: ${PORT}`);
});