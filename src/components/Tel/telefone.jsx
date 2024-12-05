import React from "react";
import { Container } from "./styles";

const PhoneInput = ({ value, onChange }) => {
  return (
    <Container>
      <label htmlFor="phone">TELEFONE:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="(XX) XXXX-XXXX"
        value={value}
        onChange={onChange}
        required
      />
    </Container>
  );
};

export default PhoneInput;
