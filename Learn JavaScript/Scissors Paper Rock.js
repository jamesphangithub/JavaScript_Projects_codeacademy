//James Phan
//Scissors Paper Rock Game

//gets user's input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 
        userInput === 'paper' || 
        userInput === 'scissors' ||
        userInput === 'bomb') {
          return userInput;
    } else {
        console.log('Invalid input, please choose between rock, paper or scissors!');
    }
  }
  
  //gets computer's input
  const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random()*3);
  
    switch (computerChoice) {
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
  }
  
  //determines winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'Winner winner chicken dinner!'
    }
    
    if (userChoice === computerChoice) {
      return 'Tie game!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'You won! :)'
      } else {
        return 'Computer wins! :('
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You won! :)'
      } else {
        return 'Computer wins! :('
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You won! :)'
      } else {
        return 'Computer wins! :('
      }
    }
  }
  
  //start game
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}. Computer chose ${computerChoice}.`);
  
    console.log(determineWinner(userChoice,computerChoice));
  
  }
  
  playGame();
  
  
  
  
  
  
  