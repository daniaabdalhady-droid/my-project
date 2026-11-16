
import { useMemo, useState } from 'react';
import recipes from '../data/recipes.js';
import RecipeCard from '../components/RecipeCard.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Both selected criteria are applied together to the same records.
  const visibleRecipes = useMemo(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchText.trim().toLowerCase());
      const matchesCategory = category === 'All' || recipe.category === category || recipe.season === category;
      return matchesSearch && matchesCategory;
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'time-asc') return a.prepTime - b.prepTime;
      if (sortBy === 'time-desc') return b.prepTime - a.prepTime;
      return 0;
    });
  }, [searchText, category, sortBy]);

  return (
    <main className="home-page">
      <section className="home-intro">
        <small>WELCOME TO SWEET BITES</small>
        <h1>A Little Taste of Happiness</h1>
        <p>Discover your favorite desserts, freshly made with love.</p>
      </section>
      <section className="storefront" aria-label="Sweet Bites recipe display">
        <div className="store-sign">SWEET BITES</div>
        <div className="store-awning" />
        <div className="window-frame">
          <div className="window-top">Freshly Baked For You ♡</div>
          <div className="window-display">
            <div className="filter-panel">
              <label className="search-control">
                <span>Search recipes</span>
                <input type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Try chocolate, cake..." />
              </label>
              <label>
                <span>Category</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option value="All">All desserts</option>
                  <option value="Cold">Cold desserts</option>
                  <option value="Summer">Summer desserts</option>
                  <option value="Winter">Winter desserts</option>
                  <option value="Baked">Baked desserts</option>
                </select>
              </label>
              <label>
                <span>Sort by</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="time-asc">Preparation: shortest first</option>
                  <option value="time-desc">Preparation: longest first</option>
                </select>
              </label>
            </div>
            <p className="result-count" aria-live="polite">Showing {visibleRecipes.length} of {recipes.length} recipes</p>
            {visibleRecipes.length > 0 ? (
              <div className="recipe-grid">
                {visibleRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onSelect={setSelectedRecipe} />)}
              </div>
            ) : (
              <div className="empty-state">No recipes found. Try another search or category.</div>
            )}
          </div>
        </div>
        <div className="store-bottom" />
      </section>
      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </main>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes.js";
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
        
      }}
    >
     

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


