import styled from "styled-components";
import Particles from "./Particles";
import heroImage from "../assets/hero-transition.PNG"; // REEMPLAZAR por imagen real

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #f7f7fa;
  color: #181828;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative; /* Necesario para el fondo absoluto */

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
    min-height: 100vh;
    height: auto;
  }
`;

const ParticlesBgWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.16; /* Súper sutil */
`;

const Texto = styled.div`
  width: 47%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;

  p {
    font-size: 1.18rem;
    line-height: 1.7;
    color: #2e2e42;
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const Boton = styled.button`
  align-self: flex-start;
  margin-top: 1rem;
  padding: 0.9rem 2.2rem;
  background: linear-gradient(90deg, #3a29ff 70%, #ff94b4 120%);
  color: #fff;
  font-weight: 600;
  font-size: 1.06rem;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 2px 10px 0 rgba(58,41,255,0.11);
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background 0.16s, transform 0.13s;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: linear-gradient(90deg, #3a29ff 45%, #ff3232 100%);
    transform: scale(1.04);
  }

  @media (max-width: 900px) {
    align-self: center;
  }
`;

const ImagenWrapper = styled.div`
  width: 45%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 390px;
    aspect-ratio: 4/3;
    border-radius: 1.5rem;
    box-shadow: 0 2px 16px 0 rgba(24,24,40,0.07);
    object-fit: cover;
    background: #eee;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin-bottom: 2.5rem;
    max-width: 360px;
  }
  @media (max-width: 600px) {
    max-width: 98vw;
    margin-bottom: 2rem;
  }
`;

function Sobre() {
  return (
    <Section id="sobre">
      {/* Fondo de partículas negras muy sutil */}
      <ParticlesBgWrapper>
        <Particles
          particleColors={['#181828', '#1a1a1a']}
          particleCount={160}
          particleSpread={11}
          speed={0.10}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </ParticlesBgWrapper>

      <Texto>
        <p style={{ fontWeight: 700, fontSize: "1.35rem" }}>
          No hacemos magia, hacemos preguntas y buscamos respuestas.
        </p>
        <p>
          En <b>Quanti</b>, transformamos información en decisiones.<br/>
          Nos mueve la curiosidad y el compromiso por entender la realidad de gobiernos y empresas, acompañando cada proceso desde la primera pregunta hasta el resultado final.
        </p>
        <p>
          Creemos que los datos cuentan historias. Escuchar esas historias es nuestro punto de partida para diseñar soluciones a medida y generar impacto real.
        </p>
        <p>
          Trabajamos cerca, con profesionalismo y calidez, porque detrás de cada número hay personas.
        </p>
        <Boton onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}>
          Contactanos
        </Boton>
      </Texto>

      <ImagenWrapper>
        <img
          src={heroImage} // REEMPLAZAR por imagen real y formato definitivo, ideal 900x675px, sin texto sobre la imagen.
          alt="Equipo Quanti trabajando" // REEMPLAZAR descripción si es otra imagen
        />
      </ImagenWrapper>
    </Section>
  );
}

export default Sobre;
