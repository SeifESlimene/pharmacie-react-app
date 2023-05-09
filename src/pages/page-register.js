import Layout from "../components/layout/Layout";
import React, { useState } from 'react';
import { useRegisterMutation } from "../api/registrationApi";


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_de_creation, setDate_de_creation] = useState('');

  const [register, { isLoading, isError, isSuccess, error }] = useRegisterMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, email, password });
  };

  return (
    <Layout parent="Home" sub="Shop" subChild="registration">

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date de création">Date de création:</label>
        <input
          type="date"
          id="date de création"
          value={date_de_creation}
          onChange={(e) => setDate_de_creation(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Register'}
      </button>
      {isSuccess && <div>Registration successful!</div>}
      {isError && <div>Error: {error.message}</div>}
    </form>
      </Layout>
  );
};

  


export default Register;
