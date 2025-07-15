import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Aurora from './Aurora';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background: #181828;
`;

const AuroraBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none; // Para que nunca tape el contenido
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 1rem;
  object-fit: contain;
  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const blink = keyframes`
  0%, 100% { border-color: transparent; }
  50% { border-color: white; }
`;

const TypingText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2rem;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #fff;
  animation: ${blink} 0.75s step-end infinite;
  color: white;
  @media (max-width: 500px) {
    font-size: 0.96rem;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: white;
  color: #181828;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TaglineWrapper = styled.div`
  min-height: 3.2em; // Ajusta según tu font-size si querés más o menos espacio
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Hero() {
  const fullText = "No es magia, es estadística |>";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 25 : 40;
    let timeout;

    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 10000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

  useEffect(() => {
    if (charIndex === fullText.length && !isDeleting) {
      const timeout = setTimeout(() => setShowButton(true), 300);
      return () => clearTimeout(timeout);
    } else {
      setShowButton(false);
    }
  }, [charIndex, isDeleting, fullText.length]);

  const scrollToServicios = () => {
    const section = document.getElementById("servicios");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container id="Inicio">
      {/* Fondo Aurora animado */}
      <AuroraBg>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </AuroraBg>
      {/* Contenido centrado */}
      <Content>
        <Logo src="/logo.png" alt="Logo Quanti" draggable={false} />
          <TaglineWrapper>
          <TypingText>{typedText}</TypingText>
          </TaglineWrapper>   
        <Button
          onClick={scrollToServicios}
          className={showButton ? "visible" : ""}
          style={{ marginBottom: "3rem" }}
        >
          Conocé más  
        </Button>
      </Content>
    </Container>
  );
}

export default Hero;
