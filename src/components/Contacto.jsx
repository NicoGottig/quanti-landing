import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";

// Fondo igual al de la nube semántica
const Section = styled.section`
  /* ¡Sacá cualquier height o min-height! */
  width: 100%;
  background: #181828;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 2.2rem 0.5rem 0 0.5rem;   // <--- padding-bottom: 0
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding-top: 2.1rem;
    padding-bottom: 0;
  }
`;





const Titulo = styled.h2`
  font-size: 2.3rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  @media (max-width: 500px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(32px);}
  to { opacity: 1; transform: translateY(0);}
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 420px;
  background: rgba(34, 34, 44, 0.88);
  border-radius: 22px;
  padding: 2.1rem 1.5rem 1.3rem 1.5rem;
  box-shadow: 0 4px 32px 0 #0002;
  z-index: 1;
  animation: ${fadeIn} 0.6s cubic-bezier(.55,.07,.42,.95);

  input, textarea {
    background: #22222c;
    border: 1.5px solid #272742;
    border-radius: 7px;
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    color: #fff;
    font-size: 1.03rem;
    transition: border 0.2s;
    outline: none;
    font-family: 'Poppins', sans-serif;
    &:focus {
      border-color: #3a29ff;
      background: #23233c;
    }
  }

  textarea {
    min-height: 90px;
    max-height: 200px;
    resize: vertical;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.88rem 0;
    background: linear-gradient(90deg,#3a29ff 60%, #5eb0ef 100%);
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 7px;
    font-size: 1.13rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: background 0.18s, box-shadow 0.15s;
    box-shadow: 0 2px 16px 0 #3a29ff19;
    &:hover, &:focus {
      background: linear-gradient(90deg,#4d39d2 55%, #219edb 100%);
      box-shadow: 0 4px 20px 0 #3a29ff22;
      outline: none;
    }
  }

  @media (max-width: 700px) {
    padding: 1.2rem 0.5rem 1.1rem 0.5rem;
    max-width: 97vw;
    input, textarea {
      font-size: 0.98rem;
    }
    button {
      font-size: 1rem;
      padding: 0.73rem 0;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.7rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    gap: 1.15rem;
    margin-top: 0.4rem;
  }
`;

const IconLink = styled.a`
  color: #3a29ff;
  font-size: 2.1rem;
  display: flex;
  align-items: center;
  transition: color 0.2s, transform 0.17s;
  &:hover, &:focus {
    color: #5eb0ef;
    transform: scale(1.09);
    outline: none;
  }
`;

const MailText = styled.span`
  font-size: 1.05rem;
  color: #c9edfa;
  margin-left: 0.6rem;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.01em;
  user-select: text;
  @media (max-width: 500px) {
    font-size: 0.93rem;
    margin-left: 0.36rem;
  }
`;

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completá todos los campos.");
      return;
    }
    if (!email.includes("@")) {
      alert("Por favor, ingresá un correo válido.");
      return;
    }
    alert("¡Gracias por contactarnos! Te respondemos pronto.");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Section id="contacto">
      <Titulo>Contacto</Titulo>
      <Formulario onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          autoComplete="name"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <textarea
          placeholder="¿En qué te podemos ayudar?"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </Formulario>
      <Links>
        <IconLink
          href="https://github.com/NicoGottig"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="Ir a GitHub"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="mailto:hola@quanti.com.ar"
          title="Enviar correo"
        >
          <FaEnvelope />
          <MailText>hola@quanti.com.ar</MailText>
        </IconLink>
      </Links>
    </Section>
  );
}

export default Contacto;
