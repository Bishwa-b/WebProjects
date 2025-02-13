import React from 'react';
import ClaudeRecipe from './ClaudeRecipe.jsx';
import IngredientsList from './IngredientsList.jsx';
import { getRecipeFromMistral } from '../ai.js'

export default function Main(props) {
  const [itemsList, setItemsList] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");
  
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    recipeSection.current.scrollIntoView()
  },[recipe])
  
  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setItemsList((prevItems) => [...prevItems, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(itemsList)
    setRecipe(recipeMarkdown)
  }

  return (
    <main className={props.mode ? 'main-dark' : 'main-light'}>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add Ingredients"
          name="ingredient"
        />
        <button>
          <span>+ Add ingredient</span>
        </button>
      </form>

      {itemsList.length > 0 && (
        <IngredientsList ref={recipeSection} items={itemsList} getRecipe={getRecipe} />
      )}
      {recipe && (<ClaudeRecipe recipe={recipe} />)}
    </main>
  );
}
