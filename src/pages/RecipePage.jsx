import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import "../App.css";

function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <main className="cafe-page recipe-page">
        <Link to="/" className="nav-link back-link">← Back to recipes</Link>
        <h2 style={{ textAlign: "center" }}>Recipe not found 🍰</h2>
      </main>
    );
  }

  return (
    <main className="cafe-page recipe-page">
      <Link to="/" className="nav-link back-link">← Back to recipes</Link>

      <article className="recipe-detail">
        <img src={recipe.image} alt={recipe.name} />
        <span className="recipe-category">{recipe.category}</span>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <p className="recipe-meta">⏱ {recipe.time} · 🍽 {recipe.servings}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </article>
    </main>
  );
}

export default RecipePage;