import React from "react";
import { Container } from "./styles";
import InputMask from "react-input-mask";

const PhoneInput = ({ value, onChange }) => {
  return (
    <Container>
      <label htmlFor="phone">TELEFONE:</label>
      <InputMask
        mask="(99)99999-9999"
        value={value}
        onChange={onChange}
        placeholder="(XX) XXXXX-XXXX"
        required
      >
        {() => <input type="tel" id="phone" name="phone" />}
      </InputMask>
    </Container>
  );
};

export default PhoneInput;
