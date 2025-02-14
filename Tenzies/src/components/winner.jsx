import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default function WinnerConfetti() {
  const { width, height } = useWindowSize();
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return isRunning ? <Confetti width={width} height={height} /> : null;
}
