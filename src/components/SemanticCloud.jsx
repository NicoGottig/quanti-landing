import styled from "styled-components";
import ForceGraph2D from "react-force-graph-2d";
import { useRef, useEffect, useState } from "react";

const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
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
    flex-direction: column-reverse;
    justify-content: flex-start;
    padding-top: 2.2rem;
    height: auto;
    min-height: 100vh;
  }
`;

const Left = styled.div`
  width: 540px;
  min-width: 220px;
  max-width: 540px;
  height: 540px;
  min-height: 180px;
  max-height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  @media (max-width: 900px) {
    width: 99vw;
    max-width: 99vw;
    min-width: 0;
    height: 60vw;
    min-height: 150px;
    max-height: 320px;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 500px) {
    height: 55vw;
    min-height: 120px;
    max-height: 220px;
    margin-bottom: 0.7rem;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 10;
  color: #93c7ff;
  background: rgba(30,30,44,0.97);
  padding: 7px 16px;
  border-radius: 13px;
  font-size: 1.02rem;
  box-shadow: 0 4px 18px 0 #1e263b22;
  pointer-events: none;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 600px) {
    bottom: 6px;
    font-size: 0.97rem;
    padding: 5px 10px;
  }
`;

const Right = styled.div`
  width: 38vw;
  min-width: 210px;
  max-width: 540px;
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  @media (max-width: 900px) {
    width: 97vw;
    min-width: 0;
    max-width: 99vw;
    margin: 0 auto 1.2rem auto;
    align-items: center;
    text-align: center;
  }
`;

const Titulo = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.05rem;
  color: #eaf6ff;
  font-weight: 700;
  letter-spacing: 0.01em;
  @media (max-width: 700px) {
    font-size: 1.13rem;
    margin-bottom: 0.55rem;
  }
`;

const Texto = styled.p`
  font-size: 1.11rem;
  color: #cdd6e3;
  line-height: 1.62;
  max-width: 520px;
  @media (max-width: 700px) {
    font-size: 0.97rem;
    max-width: 97vw;
  }
`;

const nodes = [
  { id: "Data Science", size: 44 },
  { id: "Estadística", size: 30 },
  { id: "Machine Learning", size: 35 },
  { id: "Big Data", size: 28 },
  { id: "Business Intelligence", size: 27 },
  { id: "Gestión de Datos", size: 24 },
  { id: "Gobernanza de Datos", size: 17 },
  { id: "Toma de Decisiones", size: 24 },
  { id: "KPIs", size: 16 },
  { id: "Visualización", size: 22 },
  { id: "Estrategia", size: 20 },
  { id: "Transformación Digital", size: 19 },
  { id: "Automatización", size: 16 },
  { id: "ROI", size: 13 },
  { id: "Innovación", size: 18 },
  { id: "Python", size: 16 },
  { id: "R", size: 11 },
  { id: "IA", size: 20 },
  { id: "Gobierno Abierto", size: 14 }
];

const links = [
  { source: "Data Science", target: "Estadística" },
  { source: "Data Science", target: "Machine Learning" },
  { source: "Data Science", target: "Big Data" },
  { source: "Data Science", target: "Gestión de Datos" },
  { source: "Gestión de Datos", target: "Gobernanza de Datos" },
  { source: "Gestión de Datos", target: "Business Intelligence" },
  { source: "Business Intelligence", target: "Toma de Decisiones" },
  { source: "Toma de Decisiones", target: "Estrategia" },
  { source: "Estrategia", target: "Transformación Digital" },
  { source: "Estrategia", target: "Innovación" },
  { source: "Business Intelligence", target: "KPIs" },
  { source: "KPIs", target: "ROI" },
  { source: "Visualización", target: "Toma de Decisiones" },
  { source: "Big Data", target: "Automatización" },
  { source: "Machine Learning", target: "Automatización" },
  { source: "Machine Learning", target: "IA" },
  { source: "Python", target: "Machine Learning" },
  { source: "Python", target: "R" },
  { source: "Gobierno Abierto", target: "Transformación Digital" },
  { source: "Gobierno Abierto", target: "Innovación" }
];

const azulRelleno = "rgba(42, 135, 255, 0.14)";
const azulBorde = "rgba(42, 135, 255, 0.86)";

export default function SemanticCloud() {
  const fgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 540, height: 540 });
  const [showTooltip, setShowTooltip] = useState(true);

  // Responsive: ajusta tamaño grafo
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        const width = Math.max(window.innerWidth * 0.96, 170);
        setDimensions({
          width,
          height: Math.max(Math.round(width * 0.60), 120)
        });
      } else {
        setDimensions({ width: 540, height: 540 });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  // Fuerza radial/orbital
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.d3Force('charge').strength(-160);
    fg.d3Force('center').strength(0.14);
    fg.d3Force('radial', (alpha) =>
      function(node) {
        const radius = 120 + (node.size || 20) * 0.6;
        const theta = node.index * (2 * Math.PI / nodes.length);
        node.vx += (Math.cos(theta) * radius - node.x) * 0.010 * alpha;
        node.vy += (Math.sin(theta) * radius - node.y) * 0.010 * alpha;
      }
    );
    fg.zoom(0.82, dimensions.width / 2, dimensions.height / 2, 0);
  }, [dimensions]);

  // Tooltip y cursor grab
  const handleNodeHover = (node) => {
    document.body.style.cursor = node ? "grab" : "default";
    if (node && showTooltip) setShowTooltip(false);
  };

  return (
    <Section id="semantic-cloud">
      <Left>
        <ForceGraph2D
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
            const fontSize = node.size || 15;
            ctx.beginPath();
            ctx.arc(node.x, node.y, fontSize * 1.4, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
          }}
          nodeLabel={node => node.id}
          nodeCanvasObject={(node, ctx) => {
            const label = node.id;
            const fontSize = node.size || 20;
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

            ctx.beginPath();
            ctx.arc(node.x, node.y, fontSize, 0, 2 * Math.PI, false);
            ctx.fillStyle = azulRelleno;
            ctx.strokeStyle = azulBorde;
            ctx.lineWidth = 2.1;
            ctx.globalAlpha = 0.92;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.stroke();

            ctx.font = `bold ${Math.round(fontSize * 0.45)}px 'Roboto Mono', monospace`;
            ctx.fillStyle = "#eaf6ff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = azulBorde;
            ctx.shadowBlur = 5;
            ctx.fillText(label, node.x, node.y);
            ctx.shadowBlur = 0;
          }}
          linkCanvasObjectMode={() => "after"}
          linkCanvasObject={(link, ctx) => {
            const start = link.source;
            const end = link.target;
            if (!start || !end) return;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = azulBorde;
            ctx.globalAlpha = 0.28;
            ctx.lineWidth = 1.1;
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
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
          onNodeHover={handleNodeHover}
        />
        {showTooltip && (
          <Tooltip>
            <span role="img" aria-label="Arrastrá">🖱️</span> Arrastrá los nodos
          </Tooltip>
        )}
      </Left>
      <Right>
        <Titulo>Nube Semántica</Titulo>
        <Texto>
          Si sos de los que creen que la magia está en las conexiones, esta sección es para vos.
          Explorá el grafo interactivo y descubrí cómo los grandes conceptos del análisis de datos se relacionan, influyen y, a veces, chocan.
          Spoiler: el “Big Data” no flota solo y “Machine Learning” siempre tiene amigos.
          <br /><br />
          <span style={{fontFamily:'Roboto Mono', color:'#c9edfa', fontSize:'1.02em'}}>Tu curiosidad es el mejor algoritmo.</span>
        </Texto>
      </Right>
    </Section>
  );
}
