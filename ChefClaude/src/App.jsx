import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './index.css';

function App() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  function toggleDarkMode(){
    setIsDarkMode((prevMode) => !prevMode);
  }
  

  return (
    
      <section className={isDarkMode ? 'Dark-mode' : 'Light-mode'} >
        <Header  mode={isDarkMode} toggle ={toggleDarkMode} />
        <Main mode={isDarkMode}/>
      </section>
    
  );
}

export default App;
