import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
import Buttons from './components/Buttons'

const rpsData = {
  rock: {
    name: 'rock',
    image: 'https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png'
  },
  scissor: {
    name: 'scissor',
    image: 'https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png'
  },
  paper: {
    name: 'paper',
    image: 'https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png'
  }
}

export default function App() {
  const [ choiceItem, setChoiceItem ] = useState(null);
  const [ randomItem, setRandomItem ] = useState(null);
  const [ result, setResult ] = useState(null);

  const onHandlerClick = (key) => {
    const findData = rpsData[key];
    const randomData = getRandomData();

    if (findData) {
      setChoiceItem(findData);
      setRandomItem(randomData);
      const getResult = getResultData(findData.name, randomData.name);
      setResult(getResult);
    }

  };

  const getRandomData = () => {
    const rpsDataValues = Object.values(rpsData); // 배열로 변환
    const randomNumber = Math.floor(Math.random() * rpsDataValues.length); //랜덤 숫자 뽑기
    return rpsDataValues[randomNumber];
  };

  const getResultData = (myItem, randomItem) => {
    if (myItem === randomItem) return '무승부';

    switch (myItem) {
      case 'scissor': return randomItem === 'paper' ? '승리' : '패배';
      case 'rock': return randomItem === 'scissor' ? '승리' : '패배';
      case 'paper': return randomItem === 'rock' ? '승리' : '패배';
      default: return '';
    }
  }

  const getDisplayResult = (user, result) => {
    if (!result) return ''; // result가 없으면 빈문자열 반환
    if (result === '무승부') return '무승부';

    if (user === 'you') return result;
    else if (user === 'computer') return result === '승리' ? '패배' : '승리';
  };
  
  return (
    <>
      <div className='rpsContainer'>
        <Box user = 'you' rpsData={choiceItem ? choiceItem.image : rpsData.scissor.image} result={getDisplayResult('you', result)}/>
        <Box user = 'computer' rpsData={randomItem ? randomItem.image : rpsData.scissor.image} result={getDisplayResult('computer', result)}/>
      </div>
      <Buttons onHandlerClick={onHandlerClick}/>
    </>
  )
}
