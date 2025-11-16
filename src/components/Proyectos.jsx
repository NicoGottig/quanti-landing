import styled from "styled-components";

// 📌 Proyectos reales, uno por uno
const proyectos = [
  {
    icono: null, // REEMPLAZAR por ícono alquiler // Ej: <IconAlquiler />
    titulo: "Alquileres en Paraná",
    descripcion: "Scraping + Análisis exploratorio.\nDatos recolectados de publicaciones online. Limpieza, estandarización y visualización de precios, zonas y condiciones de contrato.",
    imagen: "https://picsum.photos/300/200?random=11", // REEMPLAZAR imagen real, formato 3:2
    link: "#", // REEMPLAZAR si hay demo
  },
  {
    icono: null, // REEMPLAZAR por ícono ML // Ej: <IconML />
    titulo: "Riesgo de impago",
    descripcion: "Machine Learning.\nModelo de clasificación con árboles de decisión para predecir riesgo de impago a partir de variables simuladas.",
    imagen: "https://picsum.photos/300/200?random=12", // REEMPLAZAR imagen real
    link: "#", // REEMPLAZAR si hay demo
  },
  {
    icono: null, // REEMPLAZAR por ícono dashboard // Ej: <IconDashboard />
    titulo: "Tablero PyME",
    descripcion: "Dashboard de gestión.\nAnálisis de ventas, costos y rentabilidad. Visualización interactiva con filtros por período, producto y canal.",
    imagen: "https://picsum.photos/300/200?random=13", // REEMPLAZAR imagen real
    link: "#", // REEMPLAZAR si hay demo
  },
];

const Section = styled.section`
  min-height: 100vh;   // en vez de height: 100vh;
  width: 100%;
  background: #f7f7fa;
  color: #181828;
  padding: 4rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (max-width: 900px) {
    padding: 2.1rem 0.7rem 1.1rem 0.7rem; // menos padding en mobile/tablet
  }
  @media (max-width: 700px) {
    padding: 2rem 0.3rem 1.5rem 0.3rem;
    height: auto;
    min-height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2.7rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 700px) {
    font-size: 1.35rem;
    margin-bottom: 1.2rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;
  z-index: 1;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.15rem;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  background: #fff;
  border-radius: 18px;
  width: 315px;
  min-height: 360px;
  box-shadow: 0 8px 28px rgba(24,24,40,0.08);
  padding: 1.15rem 1.1rem 1.1rem 1.1rem;
  transition: transform 0.23s cubic-bezier(.43,.21,.21,.91);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  &:hover {
    transform: translateY(-7px) scale(1.023);
    box-shadow: 0 12px 34px rgba(24,24,40,0.14);
  }

  .icono {
    width: 2.1rem;
    height: 2.1rem;
    margin-bottom: 0.7rem;
    color: #3a29ff;
    opacity: 0.8;
    // REEMPLAZAR por ícono real
  }

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 1rem;
    aspect-ratio: 3/2;
    background: #f2f2fa;
    min-height: 110px;
    max-height: 215px;
    @media (max-width: 700px) {
      min-height: 90px;
      max-height: 170px;
    }
  }

  h3 {
    font-size: 1.19rem;
    margin-bottom: 0.43rem;
    font-weight: 600;
    color: #3a29ff;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 700px) {
      font-size: 1.05rem;
    }
  }

  p {
    flex-grow: 1;
    font-size: 1rem;
    margin-bottom: 1.1rem;
    color: #2e2e42;
    letter-spacing: 0.1px;
    white-space: pre-line;
    @media (max-width: 700px) {
      font-size: 0.97rem;
    }
  }

  a {
    color: #3a29ff;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    border-bottom: 1.5px dashed #3a29ff44;
    padding-bottom: 1px;
    transition: color 0.18s;

    &:hover {
      color: #ff3232;
      border-bottom: 1.5px solid #ff3232;
    }

    @media (max-width: 700px) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 900px) {
    width: 270px;
    min-height: 305px;
  }
  @media (max-width: 700px) {
    width: 94vw;
    min-width: unset;
    max-width: 350px;
    padding: 0.8rem 0.4rem 1rem 0.4rem;
    min-height: 230px;
  }
`;

function Proyectos() {
  return (
    <Section id="proyectos">
      <Title>Algunos proyectos</Title>
      <CardsWrapper>
        {proyectos.map((p, i) => (
          <Card key={i}>
            {/* // REEMPLAZAR: Acá va el ícono si lo tenés */}
            {/* <div className="icono">{p.icono}</div> */}
            <img src={p.imagen} alt={`Imagen del proyecto ${p.titulo}`} />
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              Acceder al proyecto
            </a>
          </Card>
        ))}
      </CardsWrapper>
    </Section>
  );
}

export default Proyectos;
