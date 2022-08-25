import { Box } from "./Box";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: aliceblue;
  border-radius: 5px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 700;
  :nth-child(1) {
    margin-left: 0;
  }
`;

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-300x300.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCAvq_3YuLukE-_PuBmayXt4hAEVuzzML_A&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1lmPmCyOvRs1bhjrTNQ4KZ7XRZxGllgRCQ&usqp=CAU",
  },
};

function App() {
  const [select, setSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // if (user.name == computer.name) {
    //   return "tie";
    // } else if (user.name == "Rock") {
    //   if (computer == "Scissor") {
    //     return "win";
    //   } else {
    //     return "lose";
    //   }
    // }

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissor" ? "win" : "lose";
    else if (user.name == "Scissor")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
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
        <Box title="You" item={select} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="mainbox">
        <Button onClick={() => play("scissor")}>가위</Button>
        <Button onClick={() => play("rock")}>바위</Button>
        <Button onClick={() => play("paper")}>보</Button>
      </div>
    </>
  );
}

export default App;
