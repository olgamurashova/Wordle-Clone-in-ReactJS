import React from 'react';
import { boardDefault } from '../Words';

const Board = () => {
    const [board, setBoard] = useState(boardDefault);




  return (
    <div className='board'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>

      
    </div>
  );
}

export default Board;
