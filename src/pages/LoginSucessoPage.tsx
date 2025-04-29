import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginSucessoPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>Login realizado com sucesso!</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Sair
      </Button>
    </Box>
  );
};

export default LoginSucessoPage;
