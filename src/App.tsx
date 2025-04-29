import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LoginSucessoPage from './pages/LoginSucessoPage'; 

const App: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login-sucesso" element={<LoginSucessoPage />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
