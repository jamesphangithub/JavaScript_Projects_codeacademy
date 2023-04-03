//James Phan
//Training Days left before major event


//select random event
const getRandEvent = () => {

    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  //get training days left for an event
  const getTrainingDays = event => {
    let days;
  
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
 //log event
  const logEvent = (event, name) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  //log trainging days left for an event
  const logTime = (days, name) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  const name = 'James';
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Adonnis'
  
  
  logEvent(event, name);
  logTime(days, name);
  
  logEvent(event2, name2);
  logTime(days2, name2);
  