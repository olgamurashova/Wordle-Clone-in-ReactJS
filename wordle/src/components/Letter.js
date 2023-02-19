import React, { useContext} from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPosition, attemptValue} ) => {
    const { board } = useContext(AppContext);


    const letter = board[letterPosition][attemptValue];
    return (
    <div className='letter'> 
    {letter}

      
    </div>
  );
}

export default Letter;
