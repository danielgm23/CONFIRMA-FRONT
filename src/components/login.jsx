import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda a altura da tela */
  background-color: #f8f8f8; /* Cor de fundo opcional */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2b331b;
  color: white;

  &:hover {
    background-color: #354924;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate para navegação programática

  const handleLogin = (event) => {
    event.preventDefault();
    // Usuário e senha fixos
    const fixedUsername = 'danielgm';
    const fixedPassword = 'dgm23092002';

    if (username === fixedUsername && password === fixedPassword) {
      navigate('/relatorio'); // Redireciona para a página do relatório
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <PageContainer>
      <Container>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Input 
            type="text" 
            placeholder="Usuário" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Container>
    </PageContainer>
  );
};

export default Login;
