import styled, { keyframes } from "styled-components";
import SpotlightCard from "./SpotlightCard";
import { FaChartLine, FaClipboardList, FaPoll, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  min-height: 100svh;
  background: #181818;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  color: #fff;
  letter-spacing: 0.01em;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin-top: 0.5rem;
  gap: 2.1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.6rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
`;

// ---- Botón con el mismo estilo que en Hero ----
const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: white;
  color: #181828;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.3s ease, opacity 0.3s ease, background 0.2s;
  opacity: 1;
  transform: translateY(0);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(58,41,255,0.07);

  &:hover, &:focus {
    background: #ecebff;
    transform: translateY(-2px) scale(1.04);
    outline: none;
  }

  @media (max-width: 500px) {
    font-size: 0.96rem;
    padding: 0.6rem 1.1rem;
  }
`;

const services = [
  {
    icon: <FaPoll size={64} />,
    title: "Encuestas",
    description: "Diseño, recolección y análisis de datos sociales y de mercado.",
  },
  {
    icon: <FaChartLine size={64} />,
    title: "Modelos",
    description: "Modelos predictivos, estadísticos y de machine learning.",
  },
  {
    icon: <FaLaptopCode size={64} />,
    title: "Tableros",
    description: "Desarrollo de dashboards interactivos en R y Python.",
  },
  {
    icon: <FaClipboardList size={64} />,
    title: "Consultoría",
    description: "Análisis ad hoc, capacitaciones y asesoramiento técnico.",
  },
];

function Servicios() {
  const scrollToContacto = () => {
    const section = document.getElementById("contacto");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container id="servicios">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios
        </SectionTitle>

        <CardsWrapper>
          {services.map((serv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.18 }}
              viewport={{ once: true }}
            >
              <SpotlightCard {...serv} />
            </motion.div>
          ))}
        </CardsWrapper>
      </ContentWrapper>

      <ButtonWrapper as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.55 }}
        viewport={{ once: true }}
      >
        <Button onClick={scrollToContacto}>
          Solicitá una reunión gratis
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Servicios;
