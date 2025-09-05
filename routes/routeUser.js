const express = require('express');
const route = express.Router();
//const login = require('../controllers/UserController');


//route.post('/login', login);
const User = require('../models/register');

route.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash du mot de passe
    const passwordHash = await bcrypt.hash(password, 10);

    // Création de l’utilisateur
      await User.create({ name, email, passwordHash });

    res.status(201).json({ message: 'Compte créé avec succès ✅' });
  } catch (err) {
    // Si l’email existe déjà → code Mongo 11000
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({ error: 'Cet email est déjà utilisé ❌' });
    }

    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = route