//James Phan
//Sleep Debt Calculator

//input sleep for each day
const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 5;
      case 'friday':
        return 12;
      case 'saturday':
        return 4;
      case 'sunday':
        return 6;
    }  
  }
  
  //get total hours slept for the week
  const getActualSleepHours = () => {
    
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
    let sum = 0;
    let i = 0;
  
    while (i < days.length) {
      sum += getSleepHours(days[i]);
      i++;
    }
  
    return sum;
  
  }
  
  //calculate ideal sleep hours for a week
  const getIdealSleepHours = (idealHours) => {
    return idealHours*7;
  }
  
  //calcuulate sleep debt
  const calculateSleepDebt = () => {
    let idealHours = 8;
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(idealHours);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got perfect sleep!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You should get some sleep! You are missing ${idealSleepHours - actualSleepHours}`);
    } else {
      console.log(`You have slept more than needed, Snorlax. You slept an extra ${actualSleepHours - idealSleepHours}`);
    }
  }
  
  calculateSleepDebt();