const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateToken = (req, res, next) => {
 const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

      if (!token) return res.status(401).json({ message: 'Accès refusé. Token manquant.' });

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
         if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expiré. Veuillez vous reconnecter.' });
    }
        res.status(400).json({ message: 'Token invalide.' });
    }
}

module.exports = authenticateToken;