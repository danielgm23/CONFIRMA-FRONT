import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: black;
  margin-bottom: 8px;
  border-radius: 10px;

  border: 1px black;
  >label {
    font-size:24px;
    font-weight: bolder;

    
    @media (max-width: 768px) {
      font-size: 16px;
    font-weight: bolder;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    font-weight: bolder;
    }
  }
  > input {
  margin-top: 10px;
  height: 56px;
  width: 400px;
  padding: 12px;
  color: black;
  background: #47532d;
  border: 1px solid black; /* Corrigido aqui */

  border-radius: 10px;
  @media (max-width: 768px) {
      height: 56px;
      width: 250px;
    }

    @media (max-width: 480px) {
      height: 56px;
    width: 300px;
    }
  &::placeholder {
    color: black; 
    text-align: center;
  }


  



}



`;
