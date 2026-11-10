import React, { useState } from "react";
import "../App.css";

// صور الوصفات: ضعي صورك داخل public/images
const recipes = [
  {
    id: 1,
    name: "Cinnamon Rolls",
    category: "Pastries",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM.jpeg",
    description: "Soft cinnamon rolls with creamy vanilla icing."
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM (1).jpeg",
    description: "Freshly baked cookies filled with chocolate chips."
  },
  {
    id: 3,
    name: "Brownies",
    category: "Chocolate",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM (2).jpeg",
    description: "Rich and fudgy chocolate brownies."
  },
  {
    id: 4,
    name: "Cheesecake",
    category: "Cakes",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.00 PM.jpeg",
    description: "Creamy cheesecake with a buttery biscuit base."
  },
  {
    id: 5,
    name: "Donuts",
    category: "Pastries",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.01 PM.jpeg",
    description: "Soft homemade donuts with delicious toppings."
  },
  {
    id: 6,
    name: "Cupcakes",
    category: "Cakes",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.02 PM.jpeg",
    description: "Cute cupcakes topped with fluffy frosting."
  },
  // أضيفي وصفات جديدة بنفس الطريقة
  {
    id: 7,
    name: "Strawberry Cake",
    category: "Cakes",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM (3).jpeg",
    description: "A lovely strawberry cake with fresh cream."
  },
  {
    id: 8,
    name: "Chocolate Tart",
    category: "Chocolate",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.01 PM (1).jpeg",
    description: "A crunchy tart filled with silky chocolate."
  }
];

function Home() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className="cafe-page"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2026-11-10 at 10.21.59 PM.jpeg')"
      }}
    >

      {/* Top navigation */}
      <nav className="top-nav">
  <a href="/" className="nav-link">Home</a>

  <div className="cafe-logo">
    <span className="logo-icon">♨</span>
    <h1>Sweet Bites</h1>
    <p>Discover · Cook · Enjoy ♡</p>
  </div>

  <div className="nav-links">
  <a href="/login" className="nav-link">Login</a>
  <a href="/register" className="nav-link">Register</a>
  <a href="/about" className="nav-link">About Us</a>
</div>
</nav>

      {/* Search bar */}
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

      {/* Main recipe display window */}
      <section className="display-window">

        <div className="window-top">
          <span>Freshly baked with love ♡</span>
          <span>{filteredRecipes.length} Delicious Recipes</span>
        </div>

        {/* Scrollable recipes */}
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
                    <span className="recipe-category">
                      {recipe.category}
                    </span>

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

      {/* Recipe details popup */}
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
              onClick={() => setSelectedRecipe(null)}
            >
              ×
            </button>

            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
            />

            <span>{selectedRecipe.category}</span>
            <h2>{selectedRecipe.name}</h2>
            <p>{selectedRecipe.description}</p>

            <p className="modal-note">
              More recipe details coming soon ♡
            </p>
          </div>
        </div>
      )}

      {/* Decorative side signs */}
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