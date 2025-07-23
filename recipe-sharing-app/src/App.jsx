import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
// import other components...

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      {/* Recipe list display... */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;