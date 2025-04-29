import React, { useState } from 'react';
import {Box,TextField,Button,Link,IconButton,InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const backgroundImageUrl = '/professora.png';
const logo = '/image.png';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleLogin = () => {
    const dadosLogin = { email, senha: senha };
  
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosLogin)
    })
      .then((response) => {
        if (!response.ok) throw new Error('Login inválido');
        return response.json();
      })
      .then((data) => {
        console.log('Login bem-sucedido:', data);
        navigate('/login-sucesso');
      })
      
      .catch((error) => {
        console.error('Erro no login:', error);
        alert('Erro no login: ' + error.message); // Exibe o erro no alert para detalhes
      });      
  };  

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <img src={logo} alt="Logo" style={{ width: '500px', height: 'auto' }} />
          </Box>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={senha}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ textAlign: 'right' }}>
            <Link component={RouterLink} to="/forgot-password" underline="hover" variant="body2">
              Esqueci minha senha
            </Link>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            variant="text"
            fullWidth
            sx={{ mt: 1, color: 'green', '&:hover': { backgroundColor: '#f0f0f0' } }}
          >
            Cadastrar-se
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
