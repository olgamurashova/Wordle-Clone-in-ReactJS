
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useState } from 'react';
import { boardDefault } from './Words';

import { createContext } from 'react';



export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);

  const [currentAttempt, setcurrentAttempt] = useState({attempt: 0, letterPosition: 0});

  return <div className='App'>
    <nav> <h1>Wordle</h1></nav>

    <AppContext.Provider value={ 
      {board, setBoard, currentAttempt, setcurrentAttempt} 
      }>
      <div className='game'>

    <Board />
    <Keyboard />
    
    </div>
  

    </AppContext.Provider>
    
  </div>
 
}

export default App;
