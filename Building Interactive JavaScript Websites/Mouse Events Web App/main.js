//James Phan
//Different mouse events and function implementation

// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

const increaseWidth = () => {
  itemOne.style.width = '420px';
}

itemOne.addEventListener('mouseover', increaseWidth);

const changeBackground = () => {
  itemTwo.style.backgroundColor = 'cyan'
}

itemTwo.addEventListener('mouseup', changeBackground);

const changeText = () => {
  itemThree.innerHTML = 'The mouse has left the element';
}

itemThree.addEventListener('mouseout', changeText);

const showItem = () => {
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);