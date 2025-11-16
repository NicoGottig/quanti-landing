import styled from "styled-components";
import Particles from "./Particles";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";

const Wrapper = styled.div`
  position: relative;
  min-height: 200vh; // Porque cubre ambas secciones (ajustá si usás más o menos vh)
  width: 100%;
`;

const Fondo = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

function SeccionesConParticulas() {
  return (
    <Wrapper>
      <Fondo>
        <Particles
          particleColors={['#181828', '#1a1a1a']}
          particleCount={350}
          particleSpread={11}
          speed={0.10}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </Fondo>
      <Content>
        <Servicios />
        <Proyectos />
      </Content>
    </Wrapper>
  );
}

export default SeccionesConParticulas;
