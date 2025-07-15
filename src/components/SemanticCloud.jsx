import styled from "styled-components";
import ForceGraph2D from "react-force-graph-2d";
import { useRef, useEffect, useState } from "react";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: #181828;
  color: #eaf6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 3rem;
    height: auto;
    min-height: 100vh;
  }
`;

const Left = styled.div`
  width: 420px;
  min-width: 260px;
  max-width: 420px;
  height: 420px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 90vw;
    max-width: 320px;
    min-width: 0;
    height: 240px;
    margin-bottom: 2rem;
  }
`;

const Right = styled.div`
  width: 36vw;
  min-width: 240px;
  max-width: 500px;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media (max-width: 900px) {
    width: 90vw;
    min-width: 0;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
`;

const Titulo = styled.h2`
  font-size: 2.1rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
  color: #eaf6ff;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

const Texto = styled.p`
  font-size: 1.12rem;
  font-family: 'Poppins', sans-serif;
  color: #cdd6e3;
  line-height: 1.6;
  max-width: 500px;
`;

const nodes = [
  { id: "Data Science", size: 44 },
  { id: "Machine Learning", size: 34 },
  { id: "Big Data", size: 28 },
  { id: "Estadística", size: 36 },
  { id: "IA", size: 23 },
  { id: "Modelado", size: 25 },
  { id: "Python", size: 19 },
  { id: "R", size: 16 },
  { id: "Visualización", size: 26 }
];

const links = [
  { source: "Data Science", target: "Machine Learning" },
  { source: "Data Science", target: "Estadística" },
  { source: "Machine Learning", target: "IA" },
  { source: "Machine Learning", target: "Big Data" },
  { source: "Big Data", target: "Python" },
  { source: "Estadística", target: "Modelado" },
  { source: "Modelado", target: "R" },
  { source: "Visualización", target: "Data Science" },
  { source: "Python", target: "Visualización" },
  { source: "Estadística", target: "Visualización"}
];

const azulRelleno = "rgba(42, 135, 255, 0.14)";
const azulBorde = "rgba(42, 135, 255, 0.86)";

export default function SemanticCloud() {
  const fgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 420, height: 420 });

  // Responsive
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setDimensions({ width: 320, height: 220 });
      } else {
        setDimensions({ width: 420, height: 420 });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fuerza radial/orbital
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.d3Force('charge').strength(-160);
    fg.d3Force('center').strength(0.14);
    const VIBRATION_INTENSITY = 22; // máximo desplazamiento px
    
    fg.d3Force('radial', (alpha) =>
      function(node) {
        const radius = 100 + (node.size || 20) * 0.6;
        const theta = node.index * (2 * Math.PI / nodes.length);
        node.vx += (Math.cos(theta) * radius - node.x) * 0.010 * alpha;
        node.vy += (Math.sin(theta) * radius - node.y) * 0.010 * alpha;
      }
    );
    fg.zoom(0.8, dimensions.width / 2, dimensions.height / 2, 0); // 0.6 = 60% (ajustá a gusto)

  }, []);

  return (
    <Section id="semantic-cloud">
      <Left>
        <ForceGraph2D
          initialZoom={0.5}
          ref={fgRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={{ nodes, links }}
          backgroundColor="rgba(0,0,0,0)"
          linkColor={() => azulBorde}
          linkDirectionalArrowLength={7}
          linkDirectionalArrowRelPos={1}
          linkDirectionalParticles={0}
          nodeRelSize={3.8}
          cooldownTicks={90}
          enableNodeDrag={true}
          panInteraction={false}
          zoomInteraction={false}
          nodePointerAreaPaint={(node, color, ctx) => {
            // Área de interacción ampliada para drag cómodo
            const fontSize = node.size || 15;
            ctx.beginPath();
            ctx.arc(node.x, node.y, fontSize * 1.4, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
          }}
          nodeLabel={node => node.id}
          // Dibujo custom de nodo
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = node.size || 20;
            // Blur/glass
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, fontSize * 1.12, 0, 2 * Math.PI, false);
            ctx.shadowColor = azulBorde;
            ctx.shadowBlur = 13;
            ctx.globalAlpha = 0.17;
            ctx.fillStyle = azulBorde;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            ctx.restore();

            // Círculo principal
            ctx.beginPath();
            ctx.arc(node.x, node.y, fontSize, 0, 2 * Math.PI, false);
            ctx.fillStyle = azulRelleno;
            ctx.strokeStyle = azulBorde;
            ctx.lineWidth = 2.1;
            ctx.globalAlpha = 0.92;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.stroke();

            // Texto
            ctx.font = `bold ${Math.round(fontSize * 0.45)}px 'Roboto Mono', monospace`;
            ctx.fillStyle = "#eaf6ff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = azulBorde;
            ctx.shadowBlur = 5;
            ctx.fillText(label, node.x, node.y);
            ctx.shadowBlur = 0;
          }}
          // Dibujo custom de links (flechas finitas y suaves)
          linkCanvasObjectMode={() => "after"}
          linkCanvasObject={(link, ctx) => {
            const start = link.source;
            const end = link.target;
            if (!start || !end) return;
            // Línea principal
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = azulBorde;
            ctx.globalAlpha = 0.28;
            ctx.lineWidth = 1.1;
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
            // Flechita
            const angle = Math.atan2(end.y - start.y, end.x - start.x);
            const headlen = 7;
            ctx.beginPath();
            ctx.moveTo(end.x, end.y);
            ctx.lineTo(
              end.x - headlen * Math.cos(angle - Math.PI / 7),
              end.y - headlen * Math.sin(angle - Math.PI / 7)
            );
            ctx.lineTo(
              end.x - headlen * Math.cos(angle + Math.PI / 7),
              end.y - headlen * Math.sin(angle + Math.PI / 7)
            );
            ctx.lineTo(end.x, end.y);
            ctx.fillStyle = azulBorde;
            ctx.globalAlpha = 0.6;
            ctx.fill();
            ctx.restore();
          }}
        />
      </Left>
      <Right>
        <Titulo>Nube Semántica</Titulo>
        <Texto>
          Explorá los conceptos clave que conectan la ciencia de datos, la estadística y la inteligencia artificial.<br />
          Cada nodo representa un área fundamental y su relación con otras disciplinas, visualizando cómo el conocimiento fluye y se conecta.<br /><br />
          <span style={{fontFamily:'Roboto Mono', color:'#c9edfa', fontSize:'1.02em'}}>Todo está en los datos.</span>
        </Texto>
      </Right>
    </Section>
  );
}
    