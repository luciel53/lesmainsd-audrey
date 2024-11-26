"use client";
import { useState } from 'react';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Envoi des informations d'authentification à la fonction Netlify
    const res = await fetch('http://localhost:8888/.netlify/functions/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Authentification réussie !');
      // Sauvegarder le token (ex: dans localStorage)
      localStorage.setItem('token', data.token);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col bg-lightBG w-80 mx-auto border border-veryLightPink rounded-xl'>
      <div className='mt-6 mx-auto font-jaldi flex flex-col'>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className=' mt-4 font-jaldi flex flex-col mx-auto'>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='bg-gold w-36 py-1 mx-auto my-8 rounded-xl text-lightBG font-italiana text-xl hover:text-gold hover:bg-white drop-shadow-lg' type="submit">Se connecter</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AuthForm;
