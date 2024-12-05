import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bolder;
  color: black;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  align-items: center;

  button {
    font-size: 30px;
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #47532d;
    color: white;

    &:hover {
      background-color: #354924;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      padding: 6px;
    }
  }

  span {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
    background-color: #546e3d;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 14px;
      padding: 8px;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 12px;
      padding: 6px;
    }
  }
`;

const AdultSection = ({ value, onChange }) => {
  const [adultCount, setAdultCount] = useState(0);

  const handleIncrement = () => setAdultCount(adultCount + 1);
  const handleDecrement = () => setAdultCount(adultCount > 0 ? adultCount - 1 : 0);

  const handleNameChange = (index, event) => {
    const newNames = value ? value.split(',') : [];
    newNames[index] = event.target.value;
    onChange(newNames.join(','));
  };

  return (
    <Container>
      <Title>Quantos acompanhantes ADULTOS</Title>
      <ButtonContainer>
        <button type="button" onClick={handleDecrement}>-</button>
        <span>{adultCount}</span>
        <button type="button" onClick={handleIncrement}>+</button>
      </ButtonContainer>
      <InputContainer>
        {[...Array(adultCount)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Nome do Adulto ${index + 1}`}
            value={value ? value.split(',')[index] || '' : ''}
            onChange={(e) => handleNameChange(index, e)}
          />
        ))}
      </InputContainer>
    </Container>
  );
};

export default AdultSection;
