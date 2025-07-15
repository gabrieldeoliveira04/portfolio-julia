'use client';
import { useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuMobileRef.current || !navRef.current) return;

    menuMobileRef.current.classList.toggle("change");

    if (menuMobileRef.current.classList.contains("change")) {
      navRef.current.style.display = "block";
    } else {
      navRef.current.style.display = "none";
    }
  };

  return (
    <header>
      <a href="#" className="logo">Portfolio</a>

      <div className="nav">
        <a href="#home">Home</a>
        <a href="#service">Serviços</a>
        <a href="#about">Sobre</a>
      </div>

      <div className="nav-responsive" ref={navRef}>
        <a href="#home">início</a>
        <a href="#service">Serviços</a>
        <a href="#about">Sobre</a>
      </div>

      <div
        className="menu-mobile"
        ref={menuMobileRef}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}
