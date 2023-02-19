import React from 'react';
import { boardDefault } from '../Words';
import { useState } from 'react';

const Board = () => {
    const [board, setBoard] = useState(boardDefault);




  return (
    <div className='board'>
        <div className='row'>
          <Letter letterPosition={0} attemptValue={} />
          <Letter letterPosition={1} attemptValue={} />
          <Letter letterPosition={2} attemptValue={} />
          <Letter letterPosition={3} attemptValue={} />
          <Letter letterPosition={4} attemptValue={} />
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>

      
    </div>
  );
}

export default Board;
