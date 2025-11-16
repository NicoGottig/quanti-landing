import styled from "styled-components";
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import SemanticCloud from "./components/SemanticCloud";
import Contacto from './components/Contacto';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SeccionesConParticulas from "./components/SeccionesConParticulas";

// 🧩 Este contenedor hace que funcione el scroll por secciones
const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;


function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Hero />
        <SeccionesConParticulas /> {/* <-- Servicios + Proyectos con fondo compartido */}
        <Sobre />
        <SemanticCloud />
        <Contacto />
        <Footer />
      </PageContainer>
    </>
  );
}

<footer className="footer-quanti">
  hecho con <span style={{color:'#ffcf4d'}}>♥</span> por <b>Quanti</b>
</footer>

export default App;
