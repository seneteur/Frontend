import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';

const roles = [
  'Gérant principal',
  'Assistant',
  'Responsable sécurité',
  'Responsable jeux',
];

const CreerKachika = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmpty = Object.values(form).some((v) => v.trim() === '');
    if (isEmpty) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    setError('');
    alert('Gérant créé !');
  };

  return (
    <div className="flex flex-col items-center w-full">
      {error && (
        <div className="mb-4 w-[700px] h-15 p-4 bg-white border-2 border-blue-400 text-red-700 rounded-lg flex  justify-center items-center text-xl font-bold shadow-lg" style={{ position: 'relative', top: 0 }}>
          {error}
        </div>
      )}
      <Box maxWidth={700} width={700} mx="auto" mt={0} p={5} boxShadow={3} borderRadius={2} bgcolor="#fff">
        <Typography variant="h3" mb={4} align="center">Créer un Gérant de Casino (Kachika)</Typography>
        <form onSubmit={handleSubmit}>
          <TextField variant="outlined" label="Nom complet" name="name" value={form.name} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
          <TextField variant="outlined" label="Email" name="email" value={form.email} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
          <TextField variant="outlined" label="Téléphone" name="phone" value={form.phone} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
          <TextField variant="outlined" select label="Rôle" name="role" value={form.role} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }}>
            {roles.map((role) => (
              <MenuItem key={role} value={role} style={{ fontSize: 20, height: 50 }}>{role}</MenuItem>
            ))}
          </TextField>
          <TextField variant="outlined" label="Mot de passe" name="password" type="password" value={form.password} onChange={handleChange} fullWidth  margin="normal" InputProps={{ style: { fontSize: 22, height: 60 } }} InputLabelProps={{ style: { fontSize: 20 } }} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, height: 60, fontSize: 22 }}>
            Créer le gérant
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CreerKachika;
/*import {Link} from 'react-router-dom'

export const Creer_kachti = () => {
  return (
    <div>
        <Link
            to="/pages/creer_casino"
            className="no-underline"
        >

               <button  className="bg-blue-600 rounded-2xl w-50 h-50 cursor-pointer hover:bg-amber-300 transition-all translate-1.5"><h1 className="text-2xl text-center text-white">Creer Kachika</h1></button> 
          </Link>
    </div>
  )
}
export default Creer_kachti*/
