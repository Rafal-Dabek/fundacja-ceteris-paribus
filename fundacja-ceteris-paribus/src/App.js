// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowCookiePopup(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookiePopup(false);
  };

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="navbar-light">
  <Navbar.Brand href="#home">
    <img
      src="/images/Black White Elegant Monogram Initial Name Logo.svg"
      alt="Fundacja Ceteris Paribus Logo"
      className="logo"
      style={{ maxWidth: '150px', maxHeight: '150px' }}
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item>
        <Nav.Link className="nav-link btn btn-custom" href="#o-fundacji">O FUNDACJI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn btn-custom" href="#aktualnosci">AKTUALNOŚCI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn btn-custom" href="#statut">STATUT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn btn-custom" href="#kontakt">KONTAKT</Nav.Link>
      </Nav.Item>
      {/* Add more Nav.Item components as needed */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
      {showCookiePopup && (
        <div className="cookie-popup bg-dark text-white p-2">
          <p>Ta strona używa ciasteczek. Kliknij "Akceptuj", aby kontynuować.</p>
          <button className="btn btn-light" onClick={acceptCookies}>Akceptuj</button>
        </div>
      )}

      <main className="p-3">
        {/* Tutaj dodaj treść strony, sekcje O FUNDACJI, AKTUALNOŚCI, STATUT, KONTAKT itp. */}
      </main>
    </div>
  );
}

export default App;
