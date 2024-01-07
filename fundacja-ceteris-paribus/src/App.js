// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

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
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logo-container">
          <img
            src="/images/Black White Elegant Monogram Initial Name Logo.svg"
            alt="Fundacja Ceteris Paribus Logo"
            className="logo"
            style={{ maxWidth: '150px', maxHeight: '150px' }}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-link btn btn-custom" href="#o-fundacji">O FUNDACJI</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-custom" href="#aktualnosci">AKTUALNOŚCI</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-custom" href="#statut">STATUT</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-custom" href="#kontakt">KONTAKT</button>
            </li>
          </ul>
        </div>
      </nav>

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
