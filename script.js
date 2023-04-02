// Access HTML elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

//global variables - door images
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

//global variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door

//check if door is closed
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return true;  
  } else {
    return false;
  }
}

//check if door has bot
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

//prints gameover status based on win/lose
const gameOver = (status) => {
  
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else{
    startButton.innerHTML = 'Game over! Play again?';
  } 

  currentlyPlaying = false;
}

//decrement door when door is chosen, if there is a bot you lose, if all door open win
const playDoor = (door) => {
  numClosedDoors--;

  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }

}

//move bot to random door
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = beachDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 2:
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
  }
}
//onclick events
doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

// Start a game round

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good Luck!';
  randomChoreDoorGenerator();
}

//start round;
startRound();