import { useState } from "react";
import './App.css';

export default function App() {
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(100);

  const feedPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue * 2);  //ให้อาหาร
  };

  const resetGame = () => {
    setLevel(1);
    setSize(100); //รีเกม
  };

  return (
    <div>
      <h1>Level {level}</h1>
      <img
        src={level > 100 ? "src/img/kamo.webp" : "src/img/458986437_995054215966648_453887196021994011_n.jpg"}
        alt="หมูเด้ง"
        style={{ width: size, height: size }}
      />
      <div>
          <img src="src/img/TM.jpg" alt="แตงโม" width={50} height={50} onClick={() => feedPig(5)}/>
          <img src="src/img/FT.webp" alt="ฟักทอง" width={50} height={50} onClick={() => feedPig(10)}/>
          <img src="src/img/sqaspdi8.png" alt="หญ้า" width={50} height={50} onClick={() => feedPig(20)}/>
      </div>
      <button onClick={resetGame}>รีเซ็ต</button>
    </div>
  );
}