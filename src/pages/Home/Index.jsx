import React from "react";
import Navegation from "../../components/Navegation/navegationBar";
import Countdown from "../../components/Timer/timer";
import { Container, Section } from "./styles";
import conviteImg from "../../assets//adnew.png";
import Form from "../../components/form/form";

export function Home() {
  return (
    <Container>
      <Navegation />
      <img src={conviteImg} alt="Names" />
      <Countdown />
      <Section>
        <Form />
      </Section>
    </Container>
  );
}

export default Home;
