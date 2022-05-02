import { useEffect, useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("You win!");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("You lose!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("It's a tie");
        break;
    }
  }, [computerChoice, userChoice]);

  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      <h1>computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
};

export default App;
