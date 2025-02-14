import { useState,useEffect,useRef } from 'react';
import Die from './Die.jsx';
import WinnerConfetti from './winner.jsx';
export default function Main() {
  const [dice, setDice] = useState(() => generateAllNewDices());
  const buttonWon = useRef(null)
  function generateAllNewDices() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push({
        id: i,
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return randomArray;
  }

  function rolledDie() {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return !die.isHeld
          ? { ...die, value: Math.floor(Math.random() * 6) + 1 }
          : die;
      });
    });
  }
  const getDieArray = dice.map((dices, index) => (
    <Die
      key={index}
      id={dices.id}
      value={dices.value}
      isHeld={dices.isHeld}
      handleClick={toggleIsHeld}
    />
  ));

  function toggleIsHeld(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  function winner(dice) {
    let cnt = 0;
    for (let i = 0; i < dice.length; i++) {
      dice[i].isHeld && (cnt = cnt + 1);
    }
    return cnt === 10 ? true : null;
  }
  useEffect(()=>{
    if(winner(dice)){
      buttonWon.current.focus()
    }
  },[winner(dice)])
  function newGame() {
    setDice(() => generateAllNewDices());
  }
  const clickFunction = winner(dice) ? newGame : rolledDie;
  return (
    <div className="content">
      <div className="heading">Tenzies</div>
      <div className="para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </div>
      <div className="dices">{getDieArray}</div>
      <button ref={buttonWon} onClick={clickFunction} className="roll">
        <span>{winner(dice) ? 'New Game' : 'Roll'}</span>
      </button>
      {winner(dice) && <WinnerConfetti />}
    </div>
  );
}
