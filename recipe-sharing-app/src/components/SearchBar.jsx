import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes by title or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
