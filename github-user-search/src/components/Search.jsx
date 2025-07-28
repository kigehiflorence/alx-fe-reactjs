import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          style={{ padding: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
          Search
        </button>
      </form>

      {/* Conditional UI rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={user.avatar_url}
            alt="Avatar"
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
