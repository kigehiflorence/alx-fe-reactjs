import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
export const useRecipeActions = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  
  return { addRecipe, setRecipes };
};