//James Phan
//School Catalog with parent class School and child class primary and high


//school parent class
class School {
    constructor (name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name () {
      if (typeof this._name === 'string') {
        return this._name;    
      } else {
        console.log('Invalid School Name input.');
      }
    }
  
    get level () {
      if (this._level === 'primary' || this._level === 'middle' || this._level === 'high') {
        return this._name;    
      } else {
        console.log('Invalid School Level input.');
      }
    }
  
    get numberOfStudents () {
      if (typeof this._numberOfStudents === 'number') {
        return this._numberOfStudents;    
      } else {
        console.log('Invalid Number of Students input.');
      }
    }
  
    set numberOfStudents (numberOfStudents) {
      if (typeof this._numberOfStudents === 'number') {
        this._numberOfStudents = numberOfStudents; 
      } else{
        console.log('Invalid Number of Students input.')
      }
    }
    

    //quick facts about selected school object
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    
    //pick substitute teacher function
    static pickSubstituteTeacher(substituteTeachers) {
      let i = Math.floor(Math.random() * substituteTeachers.length);
  
      return substituteTeachers[i];
    }
  }
  
  //primary child class
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy () {
      if (typeof this._pickupPolicy === 'string') {
        return this._pickupPolicy;    
      } else {
        console.log('Invalid pickup policy input.');
      }
    }
  
  }
  
  //high child class
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'High', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams () {
      if (typeof this._sportsTeams === 'object') {
        return this._sportsTeams;    
      } else {
        console.log('Invalid Sports Teams input.');
      }
    }
  }
  
  
  //primary and high instances test
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts()
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams)
  