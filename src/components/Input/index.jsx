import React, { useState } from 'react';
import { Container } from './styles';
import axios from 'axios';

export function Input({ icon: Icon, ...rest }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <label htmlFor="">DIGITE AQUI O SEU NOME COMPLETO</label>
      <input value={inputValue} onChange={handleInputChange} {...rest} />
    
    </Container>
  );
}
