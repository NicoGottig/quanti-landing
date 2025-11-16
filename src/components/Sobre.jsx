import styled from "styled-components";
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
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 2.2rem 0.6rem 1.1rem 0.6rem;
    min-height: 100vh;
    height: auto;
  }
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
    gap: 1.05rem;
    p {
      font-size: 1.03rem;
      line-height: 1.6;
    }
  }
  @media (max-width: 600px) {
    gap: 0.9rem;
    p {
      font-size: 0.98rem;
    }
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
    font-size: 1rem;
    padding: 0.8rem 1.4rem;
    margin-top: 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 0.7rem 1.05rem;
    font-size: 0.97rem;
    margin-top: 0.45rem;
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
    width: 96%;
    margin-bottom: 2.1rem;
    max-width: 360px;
    img {
      max-width: 340px;
      border-radius: 1.18rem;
    }
  }
  @media (max-width: 600px) {
    width: 99vw;
    margin-bottom: 1.2rem;
    max-width: 97vw;
    img {
      max-width: 97vw;
      border-radius: 1.1rem;
    }
  }
`;

function Sobre() {
  return (
    <Section id="sobre">
      <Texto>
        <p style={{ fontWeight: 700, fontSize: "1.25rem" }}>
          No hacemos magia, hacemos preguntas.
        </p>
        <p>
          En <b>Quanti</b>, transformamos información en decisiones.<br/>
          <br />Nos mueve la curiosidad y el compromiso por entender la realidad, acompañando cada proceso desde la primera pregunta hasta el resultado final.
        </p>
        <p>
          Creemos que los datos cuentan historias. Escuchar esas historias es nuestro punto de partida para diseñar soluciones a medida y generar el mejor impacto.
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
          src={heroImage} // REEMPLAZAR por imagen real, ideal 900x675px, sin texto sobre la imagen.
          alt="Equipo Quanti trabajando" // REEMPLAZAR descripción si es otra imagen
        />
      </ImagenWrapper>
    </Section>
  );
}

export default Sobre;
