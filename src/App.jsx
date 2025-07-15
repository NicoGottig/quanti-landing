import styled from "styled-components";
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Sobre from './components/Sobre';
import SemanticCloud from "./components/SemanticCloud"; // <-- NUEVO
import Contacto from './components/Contacto';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🧩 Este contenedor hace que funcione el scroll por secciones
const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Hero />
        <Servicios />
        <Proyectos />
        <Sobre />
        <SemanticCloud />   {/* <- NUEVA SECCIÓN */}
        <Contacto />
        <Footer />
      </PageContainer>
    </>
  );
}

export default App;
