"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8888/.netlify/functions/auth'
      : `${window.location.origin}/.netlify/functions/auth`;

    // Send auth's informations to the Netlify function
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Authentification réussie !');
      // Save the token in localstorage
      localStorage.setItem('token', data.token);
      // redirection to admin page
      router.push('/admin');
    } else {
      setMessage(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col bg-lightBG w-80 mx-auto border border-veryLightPink rounded-xl'>
      <div className='mt-6 mx-auto font-jaldi flex flex-col'>
        <label htmlFor="username">Nom d&apos;utilisateur</label>
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
