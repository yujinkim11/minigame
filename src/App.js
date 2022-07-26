import { Box } from "./Box";
import "./App.css";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-300x300.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://pnshop.co.kr/file/product/thumbnail/1548741810752_PN%20%EC%A3%BC%EB%B0%A9%EA%B0%80%EC%9C%84_003.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1lmPmCyOvRs1bhjrTNQ4KZ7XRZxGllgRCQ&usqp=CAU",
  },
};

function App() {
  const [select, setSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // =>Object.keys는 객체에 키 값만 뽑아서 배열로 만들어주는 함수
    // console.log("item array", itemArray);
    let randomitem = Math.floor(Math.random() * itemArray.length);
    // console.log("랜덤값", randomitem);
    let final = itemArray[randomitem];
    // console.log("파이널", final);
    return choice[final];
  };

  return (
    <>
      <div className="mainbox">
        <Box title="You" item={select} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="mainbox">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
