import { useEffect, useState } from 'react';
import './App.css';

enum Result {
  CORRECT,
  WRONG
}

function App() {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result>();

  function generateRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  function createSquareColor() {
    const color = generateRandomColor();
    setColor(`#${color}`);
    setAnswers([color, generateRandomColor(), generateRandomColor()].sort(() => 0.5 - Math.random()));
  }

  function handleAnswerClick(answer: string) {
    const ans = `#${answer}`;
    if(ans === color) {
      setResult(Result.CORRECT);
    } else {
      setResult(Result.WRONG);
    }
    console.log(`${ans} ${color}`);
    createSquareColor();
  }

  useEffect(() => {
    createSquareColor();
  }, []);
  
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
        {result === Result.CORRECT && <div className='correct'>Resposta Correta!</div>}
        {result === Result.WRONG && <div className='wrong'>Resposta Errada!</div>}
      </div>
    </div>
  );
}

export default App;