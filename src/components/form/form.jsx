import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../config/axiosConfig';
import { Input } from '../Input/index';
import PhoneInput from '../Tel/telefone';
import AdultSection from '../Adultos/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
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

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adultNames, setAdultNames] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, phone, adultNames };

    try {
      const response = await api.post('/submit', formData);
      console.log('Dados enviados com sucesso:', response.data);
      setName('');
      setPhone('');
      setAdultNames('');
      alert('Enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <Container>
    
      <form onSubmit={handleSubmit}>
        <Input 
          icon={null} 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Digite aqui seu nome completo" 
        />
        <PhoneInput 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
           
        />
        <AdultSection 
          value={adultNames} 
          onChange={(val) => setAdultNames(val)} 
        />
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Form;
