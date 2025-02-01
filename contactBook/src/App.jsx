import Contact from './components/contact.jsx';
import './index.css';
/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

function App() {
  return (
    <div className="contacts">
      <Contact
        img="src/assets/cat.png"
        name="Mr. Whiskerson"
        contact="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="src/assets/cat-animal.png"
        name="Fluffykins"
        contact="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="src/assets/read.png"
        name="Felix"
        contact="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="src/assets/smile.png"
        name="CAT KING"
        contact="(212) 555-6789"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
