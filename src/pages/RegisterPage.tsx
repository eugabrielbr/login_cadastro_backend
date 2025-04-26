import React, { useState } from 'react';
import { Box, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const formatCpf = (value: string) => {
    // Remove tudo que não é número
    const numericValue = value.replace(/\D/g, '');
  
    // Aplica máscara para exibir cpf
    return numericValue
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
      .slice(0, 14); 
  };
  


const backgroundImageUrl = '/professora.png';
const logo = '/image.png';

const RegisterPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const dadosCadastro = { nome, email, cpf, senha: password };
  
    fetch('http://localhost:3333/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCadastro)
    })
      .then((response) => {
        if (!response.ok) throw new Error('Erro na resposta do servidor');
        return response.json();
      })
      .then((data) => {
        console.log('Usuário cadastrado:', data);
        alert('Usuário cadastrado com sucesso!');
        // Limpar os campos
        setNome('');
        setCpf('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        // Redirecionar para login
        navigate('/login');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário.');
      });
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
          <TextField label="Nome" fullWidth margin="normal" value={nome} onChange={(e) => setNome(e.target.value)} />
          <TextField label="CPF" fullWidth margin="normal" value={cpf}   onChange={(e) => setCpf(formatCpf(e.target.value))} />
          <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Senha" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextField label="Confirmar Senha" type="password" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }} onClick={handleRegister}>Cadastrar</Button>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Link component={RouterLink} to="/login" underline="hover" variant="body2">Já possui conta?</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
