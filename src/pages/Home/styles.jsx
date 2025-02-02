import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  background-color: #a5ac86;

  

  > img {
    margin-top: -110px; /* Margem negativa para telas maiores */
    width: 500px;
    height: 600px;

    @media (max-width: 768px) {
      margin-top: -80px; /* Ajusta a margem para telas menores */
      width: 400px;
      height: auto;
    }

    @media (max-width: 480px) {
      margin-top: -40px; /* Ajusta a margem para telas ainda menores */
      width: 80vw;
      height: auto;
    }
  }
`;

export const Section = styled.div`

  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color:#47532d; /* Cor de fundo para esta seção */
  
  
`;
