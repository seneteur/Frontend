import  { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';

const gameTypes = [
  'Poker',
  'Kajot'
];

const creer_casino = () => {
  const [form, setForm] = useState({
    name: '',
    city: '',
    address: '',
    owner: '',
    phone: '',
    gameType: '',
    openingHours: '',
  });

  const [casinos, setCasinos] = useState<Array<typeof form>>([]);
  const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vérifie si tous les champs sont remplis
    const isEmpty = Object.values(form).some((v) => v.trim() === '');
    if (isEmpty) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    setError('');
    setCasinos([...casinos, form]);
    setForm({
      name: '',
      city: '',
      address: '',
      owner: '',
      phone: '',
      gameType: '',
      openingHours: '',
    });
  };

  return (
    <>
    <Box maxWidth={700} mx="auto" mt={5} p={5} boxShadow={3} borderRadius={2} >
        {error && (
        <div className="mb-4 w-[600px] h-15 p-4 bg-white border-2 border-blue-400 text-red-700 rounded-lg flex  justify-center items-center text-xl font-bold shadow-lg" style={{ position: 'relative', top: 0 }}>
          {error}
        </div>
      )}
      </Box> 
        
        <Box maxWidth={700} mx="auto" mt={5} p={5} boxShadow={3} borderRadius={2} bgcolor="#fff">

        <Typography variant="h3" mb={4} align="center">Créer un Casino de Jeux</Typography>
        <form onSubmit={handleSubmit}>
            <TextField variant="outlined" label="Nom du casino" name="name" value={form.name} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
            <TextField variant="outlined" label="Ville" name="city" value={form.city} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
            <TextField variant="outlined" label="Adresse" name="address" value={form.address} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
            <TextField variant="outlined" label="Propriétaire" name="owner" value={form.owner} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
            <TextField variant="outlined" label="Téléphone" name="phone" value={form.phone} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
            <TextField variant="outlined" select label="Type de jeu principal" name="gameType" value={form.gameType} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }}>
          {gameTypes.map((types) => (
            <MenuItem key={types} value={types} style={{ fontSize: 20, height: 50 }}>{types}</MenuItem>
          ))}
        </TextField>
        <TextField variant="outlined" label="Horaires d'ouverture" name="openingHours" value={form.openingHours} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, height: 60, fontSize: 22 }}>
          Créer le casino
        </Button>
      </form>
    </Box>
        
        {/* Cartes des casinos créés */}
<div className="w-[700px] mt-8 flex flex-col gap-6">
  {casinos.length > 0 && (
    <h2 className="text-2xl font-bold mb-4 text-center">Liste des casinos créés</h2>
  )}
  {casinos.map((casino, index) => (
    <div key={index} className="bg-white border border-blue-300 rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{casino.name}</h3>
        <p className="text-gray-700"><span className="font-semibold">Ville :</span> {casino.city}</p>
        <p className="text-gray-700"><span className="font-semibold">Adresse :</span> {casino.address}</p>
        <p className="text-gray-700"><span className="font-semibold">Propriétaire :</span> {casino.owner}</p>
        <p className="text-gray-700"><span className="font-semibold">Téléphone :</span> {casino.phone}</p>
        <p className="text-gray-700"><span className="font-semibold">Type de jeu :</span> {casino.gameType}</p>
        <p className="text-gray-700"><span className="font-semibold">Horaires :</span> {casino.openingHours}</p>
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default creer_casino;