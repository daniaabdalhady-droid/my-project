export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;
  return (
    <div className="recipe-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="recipe-details" role="dialog" aria-modal="true" aria-labelledby="recipe-title">
        <button className="close-recipe" type="button" onClick={onClose} aria-label="Close recipe">×</button>
        <div className="modal-emoji">{recipe.emoji}</div>
        <h2 id="recipe-title">{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p className="recipe-meta">Category: {recipe.category} · Season: {recipe.season} · Preparation: {recipe.prepTime} minutes</p>
        <h3>Ingredients</h3>
        <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
        <h3>Preparation</h3>
        <ol>{recipe.steps.map((step, index) => <li key={`${recipe.id}-step-${index}`}>{step}</li>)}</ol>
      </section>
    </div>
  );
}