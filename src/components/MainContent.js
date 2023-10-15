import React from 'react';

function MainContent() {
  return (
    <div>
      <h2>Beranda</h2>
      <div className="mie-container">
        <div className="mie">
          <img src="/path/to/mieayambawang.png" alt="Mie Ayam Bawang" />
          <p>Mie Ayam Bawang adalah salah satu tipe mie Indomie yang memiliki rasa gurih dengan campuran ayam dan bawang yang lezat.</p>
        </div>
        <div className="mie">
          <img src="/path/to/miejeletot.png" alt="Mie Seblak Jeletot" />
          <p>Mie Seblak Jeletot adalah varian mie Indomie yang pedas dan memiliki cita rasa khas seblak yang pedas dan gurih.</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;