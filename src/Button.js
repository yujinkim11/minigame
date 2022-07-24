import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-300x300.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJJO2TmRnaDnTqYWMx4J0FGXw2aEKl4m9ow&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1lmPmCyOvRs1bhjrTNQ4KZ7XRZxGllgRCQ&usqp=CAU",
  },
};

export const Button = () => {
  const [select, setSelect] = useState(null);

  const play = (userChoice) => {
    setSelect(choice[userChoice]);
  };
  return (
    <>
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </>
  );
};
