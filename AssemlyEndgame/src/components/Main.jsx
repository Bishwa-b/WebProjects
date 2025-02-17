import { useState, useEffect } from 'react';
import Languages from './Languages.jsx';
import AnsLetters from './AnsLetters.jsx';
import Keyboard from './Keyboard.jsx';

export default function Main() {
  const maxAttempts = 8;
  const ansString = 'ELEPHANT';
  const [keyPads, setKeyPads] = useState(() => generateAlphabetArray());
  const [lang, setLang] = useState(() => generateLanguages());
  const wrongGuesses = keyPads.filter(
    (pad) => !ansString.includes(pad.value) && pad.isGuessed
  ).length;

  function generateAlphabetArray() {
    return Array.from({ length: 26 }, (_, i) => ({
      value: String.fromCharCode(65 + i),
      isGuessed: false,
    }));
  }

  function generateLanguages() {
    return [
      {
        name: 'HTML',
        bg: '#F7DF1E',
        isDie: false,
        deathMessage: 'HTML vanished! 😣',
      },
      {
        name: 'CSS',
        bg: '#306998',
        isDie: false,
        deathMessage: 'Goodbye HTML & CSS 😬',
      },
      {
        name: 'JavaScript',
        bg: '#F89820',
        isDie: false,
        deathMessage: 'JavaScript crashed! 😢 ',
      },
      {
        name: 'React',
        bg: '#00599C',
        isDie: false,
        deathMessage: 'React is dead! 😭',
      },
      {
        name: 'TypeScript',
        bg: '#3178C6',
        isDie: false,
        deathMessage: 'TypeScript is extinct! 😨',
      },
      {
        name: 'Node',
        bg: '#CC342D',
        isDie: false,
        deathMessage: 'Node.js collapsed! 🤯',
      },
      {
        name: 'Ruby',
        bg: '#00ADD8',
        isDie: false,
        deathMessage: 'Ruby faded away! 😱',
      },
      {
        name: 'Python',
        bg: '#FFAC45',
        isDie: false,
        deathMessage: 'Python perished! ',
      },
      {
        name: 'Assembly',
        bg: '#DEA584',
        isDie: false,
        deathMessage: 'Assembly lives on...🤖',
      },
    ];
  }

  function switchBoard(id) {
    setKeyPads((prevPads) =>
      prevPads.map((pad) =>
        id === pad.value
          ? {
              ...pad,
              isGuessed: true,
              bg: ansString.includes(id) ? 'green' : 'red',
            }
          : pad
      )
    );

    if (!ansString.includes(id)) {
      setLang((prevLang) =>
        prevLang.map((entry, index) =>
          index === wrongGuesses ? { ...entry, isDie: true } : entry
        )
      );
    }
  }

  const lettersPad = ansString.split('').map((letter) => {
    const guessedpad = keyPads.find(
      (pad) => letter === pad.value && pad.isGuessed
    );
    return <AnsLetters key={letter} value={letter} Guessed={!!guessedpad} />;
  });

  const keyboardPads = keyPads.map((pad) => (
    <Keyboard
      key={pad.value}
      id={pad.value}
      {...pad}
      toggle={switchBoard}
      maxAttempt={maxAttempts}
      wrongGuess={wrongGuesses}
    />
  ));

  const languages = lang.map((entries) => (
    <Languages key={entries.name} {...entries} />
  ));

  const allGuessed = keyPads
    .filter((pad) => ansString.includes(pad.value))
    .every((pad) => pad.isGuessed);

  return (
    <>
      <header>
        <div className="heading">
          <h1>Assembly: Endgame</h1>
          <span>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </span>
        </div>

        {allGuessed ? (
          <div className="message" style={{ background: '#10A95B' }}>
            <span style={{ color: 'white' }}>You WIN!!!</span>
          </div>
        ) : wrongGuesses > 0 && wrongGuesses < maxAttempts ? (
          <div
            className="message"
            style={{ backgroundColor: lang[wrongGuesses - 1].bg }}
          >
            <span>{lang[wrongGuesses - 1].deathMessage}</span>
          </div>
        ) : wrongGuesses === maxAttempts ? (
          <div className="message" style={{ background: 'BA2A2A' }}>
            <span style={{ color: '#F9F4DA' }}>
              You LOST 💀 {lang[maxAttempts].deathMessage}
            </span>
          </div>
        ) : null}
      </header>
      <div className="languages">{languages}</div>
      <div className="letters">{lettersPad}</div>
      <div className="board">{keyboardPads}</div>
      {wrongGuesses === maxAttempts && (
        <button className="newGame" onClick={() => window.location.reload()}>
          <span>New Game</span>
        </button>
      )}
    </>
  );
}
