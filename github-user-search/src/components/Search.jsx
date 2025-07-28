import React, { useState } from 'react';
import { fetchUserData, searchGitHubUsers } from '../services/githubService';

const Search = () => {
  const [mode, setMode] = useState('simple'); // 'simple' or 'advanced'

  // Simple search states
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  // Advanced search states
  const [form, setForm] = useState({ username: '', location: '', repos: '' });
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  // Shared states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handlers
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setError('');
    setUser(null);
    setResults([]);
  };

  const handleSimpleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdvancedSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const { items, total_count } = await searchGitHubUsers(form, 1);
      setResults(items);
      setTotalCount(total_count);
      setPage(1);
    } catch {
      setError("Looks like we can't find the user");

    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const { items } = await searchGitHubUsers(form, nextPage);
      setResults([...results, ...items]);
      setPage(nextPage);
    } catch {
      setError('Error loading more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${mode === 'simple' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleModeChange('simple')}
        >
          Simple Search
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === 'advanced' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleModeChange('advanced')}
        >
          Advanced Search
        </button>
      </div>

      {/* Simple Search UI */}
      {mode === 'simple' && (
        <form onSubmit={handleSimpleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            type="text"
            placeholder="Search GitHub username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      )}

      {/* Advanced Search UI */}
      {mode === 'advanced' && (
        <form onSubmit={handleAdvancedSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleAdvancedChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleAdvancedChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="repos"
            placeholder="Minimum Repositories"
            value={form.repos}
            onChange={handleAdvancedChange}
            type="number"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      )}

      {/* Shared */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Simple Search Result */}
      {mode === 'simple' && user && (
        <div className="text-center mt-6">
          <img
            src={user.avatar_url}
            alt="Avatar"
            width="100"
            className="mx-auto rounded-full"
          />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <a href={user.html_url} className="text-blue-600 underline" target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}

      {/* Advanced Search Results */}
      {mode === 'advanced' && (
        <div className="space-y-4 mt-4">
          {results.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow flex items-center space-x-4">
              <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                <a href={user.html_url} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {mode === 'advanced' && results.length > 0 && results.length < totalCount && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
