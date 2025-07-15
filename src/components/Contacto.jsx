import { useState } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Titulo = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;

  input, textarea {
    background-color: #2a2a2a;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 0.75rem;
    color: white;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    padding: 0.75rem;
    background-color: #00bfff;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0099cc;
    }
  }
`;

const WhatsappButton = styled.a`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #25d366;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Iconos = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  color: white;

  svg {
    cursor: default;
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

    alert("Gracias, nos comunicaremos con vos hoy o en estos días.");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Section id="contacto">
      <Titulo>Contacto</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </Formulario>

      <WhatsappButton href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> Escribinos por WhatsApp
      </WhatsappButton>

      <Iconos>
        <FaGithub />
        <FaLinkedin />
        <FaEnvelope />
      </Iconos>
    </Section>
  );
}

export default Contacto;
