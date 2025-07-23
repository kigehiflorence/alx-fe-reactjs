import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

// RecipeCard component
const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = favorites.includes(recipe.id);

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={() => isFavorited ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;