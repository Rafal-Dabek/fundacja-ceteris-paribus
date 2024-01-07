// src/App.js
import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Fundacja Ceteris Paribus</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#o-fundacji">O FUNDACJI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aktualnosci">AKTUALNOŚCI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#statut">STATUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontakt">KONTAKT</a>
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
