import React from 'react';
export default function Header(props) {
  const modeIcon = props.mode
    ? 'src/assets/light-mode.png'
    : 'src/assets/night-mode.png';

  const altMsg = props.mode ? 'light Mode' : 'Dark Mode';

  return (
    <header className={props.mode ? 'header-dark' :'header-light'}>
      <img src="src/assets/chef-logo.png" alt="Chef Logo" />
      <h1>Chef Claude</h1>
      <button className="bgButton" onClick={props.toggle}>
        <img src={modeIcon} alt={altMsg} className="modes" />
      </button>
    </header>
  );
}
