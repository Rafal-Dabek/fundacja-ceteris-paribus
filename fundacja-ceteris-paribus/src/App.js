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
      <header className="bg-light p-3">
        <img src="/path/to/logo.png" alt="Fundacja Ceteris Paribus" className="img-fluid" />
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#o-fundacji">O FUNDACJI</a></li>
              <li className="nav-item"><a className="nav-link" href="#aktualnosci">AKTUALNOŚCI</a></li>
              <li className="nav-item"><a className="nav-link" href="#statut">STATUT</a></li>
              <li className="nav-item"><a className="nav-link" href="#kontakt">KONTAKT</a></li>
            </ul>
          </div>
        </nav>
      </header>

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
