import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames';
import { keyboard, ukrainianLetters } from './DATA/exportFile'
import { getNewRandomNumber } from './utils/getNewRandomNumber';

function App() {
  const [mistake, setMistake] = useState(false);
  const [ukrainianLetter, setUkrainianLetter] = useState(
    ukrainianLetters[getNewRandomNumber()]
  );

  const handleKeyup = useCallback(
    (event: KeyboardEvent) => {
      const pressedLetter = event.key.toLocaleUpperCase();

      if (keyboard[pressedLetter] === ukrainianLetter) {
        setUkrainianLetter(
          ukrainianLetters[getNewRandomNumber()]
        );

        setMistake(false)

        return;
      }

      setMistake(true);
    },
    [ukrainianLetter]
  );

  useEffect(
    () => {
      document.addEventListener('keyup', handleKeyup)

      return () => {
        document.removeEventListener('keyup', handleKeyup)
      }
    },
    [handleKeyup]
  );

  return (
    <div className="app">
      <div
        className={classNames({
          cell: true,
          'cell--mistake': mistake,
        })}
      >
        <span className='cell__letter'>
          {
            ukrainianLetter
          }
        </span>
      </div>
    </div>
  );
}

export default App;
