import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import "../App.css";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  // إغلاق البطاقة بزر Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedRecipe(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main
      className="cafe-page"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2026-11-11 at 7.15.53 PM.jpeg')"
      }}
    >
      <nav className="top-nav">
        <Link to="/" className="nav-link">Home</Link>

        <div className="cafe-logo">
          <span className="logo-icon">♨</span>
          <h1>Sweet Bites</h1>
          <p>Discover · Cook · Enjoy ♡</p>
        </div>

        <div className="nav-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </div>
      </nav>

      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search for a delicious recipe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button">⌕</button>
        </div>
      </div>

      <section className="display-window">
        <div className="window-top">
          <span>Freshly baked with love ♡</span>
          <span>{filteredRecipes.length} Delicious Recipes</span>
        </div>

        <div className="recipes-scroll">
          {filteredRecipes.length > 0 ? (
            <div className="recipes-grid">
              {filteredRecipes.map((recipe) => (
                <article className="recipe-card" key={recipe.id}>
                  <button
                    className="favorite-button"
                    aria-label="Favorite"
                    onClick={(e) => {
                      e.currentTarget.classList.toggle("liked");
                    }}
                  >
                    ♡
                  </button>

                  <div className="recipe-image-container">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="recipe-image"
                    />
                  </div>

                  <div className="recipe-info">
                    <span className="recipe-category">{recipe.category}</span>
                    <h2>{recipe.name}</h2>

                    <button
                      className="view-recipe"
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      View Recipe <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span>🍰</span>
              <h2>No recipes found!</h2>
              <p>Try searching for something sweeter.</p>
            </div>
          )}
        </div>

        <div className="window-bottom">
          <span>Made with love and a little sugar ♡</span>
        </div>
      </section>

      {/* بطاقة الوصفة: الوصفة بتنكتب بملف src/data/recipes.js */}
      {selectedRecipe && (
        <div
          className="recipe-modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="recipe-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              aria-label="Close"
              onClick={() => setSelectedRecipe(null)}
            >
              ×
            </button>

            <img src={selectedRecipe.image} alt={selectedRecipe.name} />

            <span className="modal-category">{selectedRecipe.category}</span>
            <h2>{selectedRecipe.name}</h2>
            <p>{selectedRecipe.description}</p>

            {selectedRecipe.time && (
              <p className="modal-meta">
                ⏱ {selectedRecipe.time} · 🍽 {selectedRecipe.servings}
              </p>
            )}

            {selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0 ? (
              <div className="modal-details">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3>Steps</h3>
                <ol>
                  {selectedRecipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            ) : (
              <p className="modal-note">Recipe details coming soon ♡</p>
            )}
          </div>
        </div>
      )}

      <div className="side-sign left-sign">
        <p>Life is sweeter with homemade desserts ♡</p>
      </div>

      <div className="side-sign right-sign">
        <p>Baked with Love ♡</p>
      </div>

      <footer className="cafe-footer">
        Sweet Bites Café · A little corner of sweetness ♡
      </footer>
    </main>
  );
}

export default Home;