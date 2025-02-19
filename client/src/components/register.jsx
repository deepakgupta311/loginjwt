import { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered with Name: ${formData.name}, Email: ${formData.email}`);
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center',  marginTop: '150px' }}>
        <Typography variant="h6" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Register</Button>
        </form>
      </Box>
    </Container>
  );
}