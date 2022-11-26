import { useEffect, useState } from 'react';
import ColorComponent  from './components/ColorComponent';
import './App.css';

function App() {
  const { handleAnswerClick, answers, color, result } = ColorComponent();
  
  return (
    <div className='App'>
      <div>
        <div className='guess' style={{ backgroundColor: color }}></div>
        {
          answers.map((answer) => (
            <button onClick={() => handleAnswerClick(answer)} key={answer}>
              {`#${answer}`}
            </button>
          ))
        }
        {result === true && <div className='correct'>Resposta Correta!</div>}
        {result === false && <div className='wrong'>Resposta Errada!</div>}
      </div>
    </div>
  );
}

export default App;