// src/MealSuggestions.js
import React, { useState, useEffect } from 'react';

function MealSuggestions() {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setMeals(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, [query]);

  return (
    <div>
      <h1>Meal Suggestions</h1>
      <input
        type="text"
        placeholder="Search meals"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>{meal.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealSuggestions;
