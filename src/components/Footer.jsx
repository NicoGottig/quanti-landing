// src/components/Footer.jsx
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 1rem 0;
  background: transparent;
  color: #bfbfff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  letter-spacing: 0.04em;

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.6rem 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      hecho con 💛 por <b>Quanti</b>
    </FooterContainer>
  );
}
