//James Phan
//Piano Key Functions; Highlighting and Unhighlighting keys when played
//Changing notes and lyrics when finish playing

// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//changing the color of the keys when pressed/released

const keyPlay = (mousedown) => {
  mousedown.target.style.backgroundColor = 'grey'; 
}

const keyReturn = (mouseup) => {
  mouseup.target.style.backgroundColor = '';
}


// assign events to all notes

const assignEventsToNote = (note) => {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
}


const assignEventsToAllNotes = (notes) => {
  notes.forEach(assignEventsToNote);
}

assignEventsToAllNotes(notes);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// change lyrics and notes based on progress
const nextLyrics = (click) => {
  if (click.target === nextOne) {
    nextTwo.hidden = false;
    nextOne.hidden = true;

    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
  }

  if (click.target === nextTwo) {
    nextThree.hidden = false;
    nextTwo.hidden = true;

    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    lastLyric.style.display = 'inline-block';

     document.getElementById('letter-none-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
  }

  if (click.target === nextThree) {
    startOver.hidden = 'false';
    nextThree.hidden = 'true';

    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';

    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';

    lastLyric.style.display = 'none';
  }
}

nextOne.addEventListener('click', nextLyrics);
nextTwo.addEventListener('click', nextLyrics);
nextThree.addEventListener('click', nextLyrics);


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}