
export default function IngredientsList(props) {
  const ingredientsList = props.items.map((item) => <li>{item}</li>);
  return (
    <content>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      {ingredientsList.length >= 1 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </content>
  );
}
