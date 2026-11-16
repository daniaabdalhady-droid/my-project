
export default function RecipeCard({ recipe, onSelect }) {
  return (
    <button
      className="recipe-card"
      type="button"
      onClick={() => onSelect(recipe)}
      aria-label={`View ${recipe.name} recipe`}
    >
      <div className="recipe-art">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
        />
      </div>

      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.tagline}</p>
        <span>{recipe.prepTime} min</span>
      </div>
    </button>
  );
}
