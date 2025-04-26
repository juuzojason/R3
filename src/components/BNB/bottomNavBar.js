import React from 'react';
import './BottomNavBar.css';

function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <div className="navbar-brand">
        <span className="brand-prime">R3</span> 
        <span className="brand-testing-bt"> Tu mejor opcion</span>
      </div>
      
      <div className="navbar-links">
        <a href="#nosotros">NOSOTROS</a>
        <a href="#soporte">SOPORTE</a>
        <a href="#privacidad">PRIVACIDAD</a>
        <a href="#ayuda">AYUDA</a>
      </div>

      <div className="social-links">
        <a href="#patreon" className="social-icon patreon">
          <img src="/assets/images/Patreon-White.svg" alt="Patreon" />
        </a>
        <a href="#discord" className="social-icon discord">
          <img src="/assets/images/Discord-White.svg" alt="Discord" />
        </a>
        <a href="#instagram" className="social-icon instagram">
          <img src="/assets/images/Instagram-White.svg" alt="Instagram" />
        </a>
      </div>
    </nav>
  );
}

export default BottomNavbar;