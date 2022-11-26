import { useEffect, useState } from 'react';
import '../App.css';

type ColorComponentProps = {
    //TODO
}

function ColorComponent() {
    const [color, setColor] = useState<string>("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<boolean>();
  
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
      if (ans === color) {
        setResult(true);
      } else {
        setResult(false);
      }
      console.log(`${ans} ${color}`);
      createSquareColor();
    }
  
    useEffect(() => {
      createSquareColor();
    }, []);

    return {
        generateRandomColor,
        createSquareColor,
        handleAnswerClick,
        color,
        answers,
        result
    }
}

export default ColorComponent;