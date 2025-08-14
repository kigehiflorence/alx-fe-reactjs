import React, { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {recipes.map((recipe) => (
    <div 
      key={recipe.id} 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <Link to={`/recipe/${recipe.id}`}>

          className="inline-block mt-4 text-blue-500 hover:underline"
        
          View Recipe →
        </Link>
      </div>
    </div>
  ))}
</div>

  );
};

export default HomePage;
