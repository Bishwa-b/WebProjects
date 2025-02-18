import { useState } from 'react';
import Main from './components/Main.jsx';

function App() {
  return (
    <>
      <video autoPlay loop muted id="bgvid">
        <source src="/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
