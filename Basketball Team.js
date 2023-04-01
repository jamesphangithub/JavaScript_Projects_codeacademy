//James Phan
//Basketball team statistics including team players and games
//Implementations of get and add functions to display/add more statistics

const basketballTeam = {
    _players: [
      {firstName: 'Ryan',
      lastName: 'Adams',
      age: 20,
      position: 'Center'},
  
      {firstName: 'Sam',
      lastName: 'Axford',
      age: 20,
      position: 'Shooting Guard'},
  
      {firstName: 'James',
      lastName: 'Phan',
      age: 20,
      position: 'Small Forward'},
  
      {firstName: 'Phu',
      lastName: 'Truong',
      age: 25,
      position: 'Point Guard'},
  
      {firstName: 'Bill',
      lastName: 'Baker',
      age: 20,
      position: 'Power Forward'}
      
    ] ,
    _games : [
      {opponent: 'Basket Cases',
      teamPoints: 30,
      opponentPoints: 24},
  
      {opponent: 'rowdyfox',
      teamPoints: 63,
      opponentPoints: 40},
  
      {opponent: 'Nelly Shots',
      teamPoints: 38,
      opponentPoints: 49},
    ] ,
  
    get players () {
      if (this._players) {
        return this._players;
      } else {
        console.log('Team roster registration incomplete!');
      }
    },
  
      get games () {
      if (this._games) {
        return this._games;
      } else {
        console.log('Games log error');
      }
    },
  
    addPlayer (firstName, lastName, age, position) {
      let player = {
        firstName,
        lastName,
        age,
        position
      };
  
      this._players.push(player);
    } ,
  
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints 
      };
  
      this._games.push(game);
    }
  
  
  }
  
  //test
  console.log(basketballTeam.players, basketballTeam.games)
  
  basketballTeam.addPlayer('Isaac', 'Clarke', 20, 'Power Forward');
  
  basketballTeam.addGame('Blue Balls', 40, 24);
  
  console.log(basketballTeam.players, basketballTeam.games);