// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <UserProfile />

      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl font-bold mt-4">Vite + React</h1>
        <div className="card mt-4">
          <button onClick={() => setCount((count) => count + 1)} className="border px-4 py-2 rounded">
            count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs mt-4 text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
