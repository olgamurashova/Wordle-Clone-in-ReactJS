import React, { useContext} from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPosition, attemptValue} ) => {
    const { board, correctWord, currAttempt } = useContext(AppContext);

    const letter = board[letterPosition][attemptValue];

    const correct = correctWord[letterPosition] === letter;
    const almost = !correct && letter !=="" && correctWord.includes(letter);

    const letterState = currAttempt.attempt > attemptValue && 
    correct ? "correct" : almost ? "almost" : "error;"
 



    return (
    <div className='letter' id={letterState}> 
    {letter}

      
    </div>
  );
}

export default Letter;
