import styled from "styled-components";
import { motion } from "framer-motion";

// 📌 Contenido reemplazable más adelante
const proyectos = [
  {
    titulo: "Análisis de Alquileres",
    descripcion: "Scraping y visualización de datos de viviendas en Paraná.",
    imagen: "https://picsum.photos/300/200?random=1", // reemplazar por imagen real
    link: "https://example.com/proyecto1", // reemplazar
  },
  {
    titulo: "Dashboard Público",
    descripcion: "Dashboard interactivo sobre inversión en I+D en Argentina.",
    imagen: "https://picsum.photos/300/200?random=2", // reemplazar
    link: "https://example.com/proyecto2", // reemplazar
  },
  {
    titulo: "App para Municipios",
    descripcion: "App en Shiny para gestión de indicadores locales.",
    imagen: "https://picsum.photos/300/200?random=3", // reemplazar
    link: "https://example.com/proyecto3", // reemplazar
  },
];

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // <-- Cambia esto
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (max-width: 700px) {
    padding: 2.5rem 0.7rem 2rem 0.7rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.4rem;
  margin-bottom: 2.7rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  background: #2a2a2a;
  border-radius: 14px;
  width: 300px;
  min-height: 340px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
  padding: 1.1rem;
  transition: transform 0.25s cubic-bezier(.43,.21,.21,.91);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    transform: translateY(-7px) scale(1.025);
    box-shadow: 0 12px 32px rgba(0,0,0,0.28);
  }

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
    aspect-ratio: 3/2;
  }

  h3 {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #00bfff;
  }

  p {
    flex-grow: 1;
    font-size: 0.96rem;
    margin-bottom: 1rem;
    color: #e4e4e4;
    letter-spacing: 0.1px;
  }

  a {
    color: #00bfff;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    border-bottom: 1.5px dashed #00bfff44;
    padding-bottom: 1px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
      border-bottom: 1.5px solid #00bfff;
    }
  }
`;

function Proyectos() {
  return (
    <Section id="proyectos">
      <Title
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos
      </Title>

      <CardsWrapper>
        {proyectos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <img src={p.imagen} alt={`Imagen del proyecto ${p.titulo}`} />
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Acceder al proyecto
              </a>
            </Card>
          </motion.div>
        ))}
      </CardsWrapper>
    </Section>
  );
}

export default Proyectos;
