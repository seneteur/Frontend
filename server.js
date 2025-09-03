const express = require('express');
const cors = require('cors');
const app = express();
const auth = require('./routes/routeUser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const PORT = process.env.PORT || 5000;  

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("MongoDB connected"))
.catch((err) => console.error(err));

const corsoption ={
    origin:"http://localhost:3000",
}

app.use(cors(corsoption));
app.use(express.json())

app.get('/api', (req, res) => {
  // Exemple de données à renvoyer
  const fruits = ['Banane', 'Orange', 'Mangue','pomme','Ananas'];
  res.json(fruits);
});

app.use('/api/user', auth);
app.get('/api/user', (req, res) => {
  res.json({ presonne :[ "John Doe",  "john@example.com" ]});
});
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port: ${PORT}`);
});