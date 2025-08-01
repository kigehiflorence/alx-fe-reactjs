import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // auto-update filtered list
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false);
    get().filterRecipes(); // trigger filter when search term updates
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },
}));
