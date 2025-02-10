import Markdown from "react-markdown";
export default function ClaudeRecipe(props) {

  return (
    
    
    <section className="suggested-recipe-container">
      <h1>Chef Claude Recommands:</h1>
      <Markdown>{props.recipe}</Markdown> 
    </section>
    
  );
}
