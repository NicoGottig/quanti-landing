import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  transition: background 0.3s;
`;

const Logo = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #00bcd4;
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background: #00bcd4;
    transition: width 0.3s;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;

// Hamburguesa
const Hamburger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1201;

  &:focus {
    outline: 2px solid #00bcd4;
    outline-offset: 2px;
  }
`;

const Bar = styled.span`
  width: 28px;
  height: 3.2px;
  background: white;
  margin: 3.5px 0;
  border-radius: 2px;
  transition: all 0.35s cubic-bezier(0.55, 0, 0.1, 1);
  ${({ open, idx }) =>
    open &&
    (idx === 0
      ? css`transform: translateY(7.2px) rotate(45deg);`
      : idx === 1
      ? css`opacity: 0;`
      : css`transform: translateY(-7.2px) rotate(-45deg);`)}
`;

// Menú mobile overlay
const MobileMenu = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24, 24, 24, 0.97);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 1200;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.35s;

  @media (max-width: 700px) {
    gap: 1.15rem; // menos espacio entre opciones
  }
`;

const MobileNavLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  color: white;
  text-decoration: none;
  position: relative;
  padding: 0.8rem 1.1rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;

  &:hover,
  &:focus {
    background: #262656;
    color: #00bcd4;
    outline: none;
  }
  @media (max-width: 700px) {
    font-size: 1.07rem;
    padding: 0.65rem 0.7rem;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra menú al hacer click en un link
  const handleLinkClick = () => setMenuOpen(false);

  // Bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; }
  }, [menuOpen]);

  return (
    <>
      <Nav>
        <Logo href="#Inicio">QUANTI</Logo>
        <NavLinks>
          <NavLink href="#Inicio">Inicio</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#semantic-cloud">Nube</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </NavLinks>
        <Hamburger
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {[0, 1, 2].map((idx) => (
            <Bar key={idx} open={menuOpen} idx={idx} />
          ))}
        </Hamburger>
      </Nav>
      <MobileMenu id="mobile-menu" open={menuOpen}>
        <MobileNavLink href="#Inicio" onClick={handleLinkClick}>
          Inicio
        </MobileNavLink>
        <MobileNavLink href="#servicios" onClick={handleLinkClick}>
          Servicios
        </MobileNavLink>
        <MobileNavLink href="#proyectos" onClick={handleLinkClick}>
          Proyectos
        </MobileNavLink>
        <MobileNavLink href="#sobre" onClick={handleLinkClick}>
          Sobre
        </MobileNavLink>
        <MobileNavLink href="#semantic-cloud" onClick={handleLinkClick}>
          Nube
        </MobileNavLink>
        <MobileNavLink href="#contacto" onClick={handleLinkClick}>
          Contacto
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
