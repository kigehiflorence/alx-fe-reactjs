import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold text-center mt-4">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;
