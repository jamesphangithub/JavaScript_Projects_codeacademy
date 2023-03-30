//James Phan
//Code simulating marathon administation

//generate racer's number based on registration time and age
let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registerEarly) {
  raceNumber += 1000;
}

//uploading info to racer
if (runnerAge > 18 && registerEarly) {
  console.log(`${raceNumber}'s race begins at   9:30am. Good Luck!`);
} else if (runnerAge > 18 && ! registerEarly) {
  console.log(`${raceNumber}'s race begins at 11:00am. Good Luck!`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber}'s race begins at 12:30pm. Good Luck!'`);
} else {
  console.log(`${raceNumber}, please see registration desk.`);
}
