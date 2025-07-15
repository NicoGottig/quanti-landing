import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(24, 24, 24, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
`;

const Logo = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; // Más adelante ponemos hamburguesa acá
  }
`;

const NavLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background: #00bcd4;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#hero">QUANTI</Logo>
      <NavLinks>
        <NavLink href="#Inicio">Inicio</NavLink>
        <NavLink href="#servicios">Servicios</NavLink>
        <NavLink href="#proyectos">Proyectos</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#semantic-cloud">Nube</NavLink>
        <NavLink href="#contacto">Contacto</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
