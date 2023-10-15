import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const myName = "Dandy Arkandhiya Putra";
  const myStudentNumber = "120140203";

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim pesan ke state atau server di sini
  };

  return (
    <div>
      <h2>Kontak</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Ketik pesan Anda di sini"
        />
        <button type="submit">Kirim Pesan</button>
      </form>
      <p>Tempat Pemesanan:</p>
      <p>Nama: {myName}</p>
      <p>Nomor Mahasiswa: {myStudentNumber}</p>
    </div>
  );
}

export default Contact;