import React, { useState, useEffect } from "react"; // Importando os hooks useState e useEffect
import styled from "styled-components";

const CountdownContainer = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  font-size: 4rem;
  color: #47532d;

  padding-bottom: 20px;

 

  @media (max-width: 768px) {
    font-size: 2rem;
    }

  
`;

const Time = styled.div`
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 10px;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    }

  
`;

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  const targetDate = new Date("March 14, 2025 00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = targetDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <CountdownContainer>
      <h1>SAVE THE DATE</h1>
      <h2>14 - 03 - 2025</h2>
      <Time>
        <span>{timeLeft.days}D -</span>
        <span> {timeLeft.hours}H - </span>  
        <span> {timeLeft.minutes}MIN -  </span>
        <span> {timeLeft.seconds}S  </span>
      </Time>
    </CountdownContainer>
  );
}

export default Countdown;
