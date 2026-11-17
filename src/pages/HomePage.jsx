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
