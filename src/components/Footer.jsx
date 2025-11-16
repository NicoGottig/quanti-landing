import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 0.8rem 0;
  background: rgba(24,24,40,0.86); // semitransparente, más legible
  color: #bfbfff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-align: center;
  position: static;
  bottom: 0;
  left: 0;
  z-index: 200;
  letter-spacing: 0.04em;
  backdrop-filter: blur(7px);

  @media (max-width: 600px) {
    font-size: 0.87rem;
    padding: 0.56rem 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      hecho con <span style={{color:'#ffd700', fontWeight:500}}>💛</span> por <b>Quanti</b>
    </FooterContainer>
  );
}
