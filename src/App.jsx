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
        src={level > 100 ? "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0XaKGoM0v-XFNwXyjghhkCWZmy3n0CgQfKD7jSGQyA-G5o6gB" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROOIlf6x5BnHNhAzO0QUZ2xocTJ2KNTqrM5kiKJHNqNhz2qutA"}
        alt="หมูเด้ง"
        style={{ width: size, height: size }}
      />
      <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhhFy1M9W9kAVb47VWXK2v23J5aczKBgGMebyC1meVh8lB1Gh" alt="แตงโม" width={50} height={50} onClick={() => feedPig(5)}/>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrp3kwuUXkxxpMBW0xOYHg-qT9vZZ8HCt1edxoBGnrMtjALDdM" alt="ฟักทอง" width={50} height={50} onClick={() => feedPig(10)}/>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTB08tE89Nhf7VVqwSOXnhmpjUAG7zNSfYiRUu_E0yypOo8d6CF" alt="หญ้า" width={50} height={50} onClick={() => feedPig(20)}/>
      </div>
      <button onClick={resetGame}>รีเซ็ต</button>
    </div>
  );
}