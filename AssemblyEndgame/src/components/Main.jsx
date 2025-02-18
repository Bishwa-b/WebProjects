import { useState, useEffect } from 'react';
import Languages from './Languages.jsx';
import AnsLetters from './AnsLetters.jsx';
import Keyboard from './Keyboard.jsx';

export default function Main() {
  const wordsArray = [
    'APPLE',
    'BANANA',
    'GRAPE',
    'ORANGE',
    'PEACH',
    'KIWI',
    'MELON',
    'BERRY',
    'LEMON',
    'CHERRY',
    'PLUM',
    'MANGO',
    'PINEAPPLE',
    'APRICOT',
    'AVOCADO',
    'WATERMELON',
    'PAPAYA',
    'PEAR',
    'FIG',
    'DATE',
    'AIRPLANE',
    'MOUNTAIN',
    'OCEAN',
    'CLOUD',
    'FOREST',
    'RIVER',
    'LIGHTHOUSE',
    'BEACH',
    'VACATION',
    'CAMERA',
    'TELEVISION',
    'KEYBOARD',
    'NOTEBOOK',
    'COMPUTER',
    'MONITOR',
    'WINDOW',
    'LIGHTBULB',
    'MICROWAVE',
    'PENCIL',
    'UMBRELLA',
    'BICYCLE',
    'STADIUM',
    'SOCCER',
    'FOOTBALL',
    'GUITAR',
    'DRUMS',
    'PIANO',
    'VIOLIN',
    'ORCHESTRA',
    'CAMPING',
    'SWIMMING',
    'HIKING',
    'DINOSAUR',
    'ROBOT',
    'ROCKET',
    'PLANET',
    'GALAXY',
    'UNIVERSE',
  ];

  const maxAttempts = 8;
  const [ansString, setAnsString] = useState(() => generateARandomWord());
  const [keyPads, setKeyPads] = useState(() => generateAlphabetArray());
  const [lang, setLang] = useState(() => generateLanguages());
  const wrongGuesses = keyPads.filter(
    (pad) => !ansString.includes(pad.value) && pad.isGuessed
  ).length;

  function generateARandomWord() {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  }

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
        bg: '#E2680F',
        isDie: false,
        deathMessage: 'HTML vanished! 😣',
      },
      {
        name: 'CSS',
        bg: '#328AF1',
        isDie: false,
        deathMessage: 'Goodbye HTML & CSS 😬',
      },
      {
        name: 'JavaScript',
        bg: '#FFD742',
        isDie: false,
        deathMessage: 'JavaScript crashed! 😢 ',
      },
      {
        name: 'React',
        bg: '#2ED3E9',
        isDie: false,
        deathMessage: 'React is dead! 😭',
      },
      {
        name: 'TypeScript',
        bg: '#298EC6',
        isDie: false,
        deathMessage: 'TypeScript is extinct! 😨',
      },
      {
        name: 'Node',
        bg: '#599137',
        isDie: false,
        deathMessage: 'Node.js collapsed! 🤯',
      },
      {
        name: 'Ruby',
        bg: '#FFD742',
        isDie: false,
        deathMessage: 'Ruby faded away! 😱',
      },
      {
        name: 'Python',
        bg: '#D02B2B',
        isDie: false,
        deathMessage: 'Python perished! ',
      },
      {
        name: 'Assembly',
        bg: '#2D519F',
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
              bg: ansString.includes(id) ? '#10A95B' : '#EC5D49',
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

  const lettersPad = ansString.split('').map((letter, index) => {
    const guessedpad = keyPads.find(
      (pad) => letter === pad.value && pad.isGuessed
    );
    return (
      <AnsLetters
        key={index}
        value={letter}
        Guessed={!!guessedpad}
        maxAttempt={maxAttempts}
        wrongGuess={wrongGuesses}
      />
    );
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

  const newGame = () => {
    setKeyPads(generateAlphabetArray());
    setLang(generateLanguages());
    setAnsString(generateARandomWord());
  };
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
            <span style={{ color: 'white' }}>You WIN!!! 🎉</span>
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
      {(wrongGuesses === maxAttempts || allGuessed) && (
        <button className="newGame" onClick={newGame}>
          <span>New Game</span>
        </button>
      )}
    </>
  );
}
