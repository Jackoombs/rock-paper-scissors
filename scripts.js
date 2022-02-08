function round() {
  let userWeapon = prompt("So... Rock, Paper or Scissors").toLowerCase();
  
  while (!((userWeapon == 'rock') || (userWeapon == 'scissors') || (userWeapon == 'paper'))) {
    userWeapon = prompt('Not quite what I asked, try again').toLowerCase();
  }

  const computerChoices = ['rock', 'paper', 'scissors'];
  computerWeapon = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log(`Rock...\nPaper...\nScissors!\n\nYou chose ${userWeapon} and the computer chose ${computerWeapon}`);

  if ((userWeapon == 'rock' && computerWeapon == 'paper') || (userWeapon == 'paper' && computerWeapon == 'scissors') || (userWeapon == 'scissors' && computerWeapon == 'rock')) {
    console.log(`You Lose... ${computerWeapon} beats ${userWeapon}!`)
    const result = "lose";
    return result
  } else if (userWeapon == computerWeapon) {
      console.log('Draw!')
      const result = "draw";
      return result
  } else {
      console.log(`You Win... ${userWeapon} beats ${computerWeapon}!`)
      const result = "win";
      return result
  }
}

function game() {
  const bestOf = prompt("Best of?...")
  let roundNumber = 1;
  let computerWins = 0;
  let userWins = 0;
  while (true) {

    console.log(`Round ${roundNumber}\nUser - ${userWins} : Computer - ${computerWins}`)

    roundResult = round()
    if (roundResult == 'win') {
      userWins++
    } else if (roundResult == 'lose') {
      computerWins++
    }
    roundNumber++

    if (userWins == bestOf) {
      console.log(`User - ${userWins} : Computer - ${computerWins}\n\nUser is the Winner`)
      return gameWinner = "user"

    } else if (computerWins == bestOf) {
        console.log(`User - ${userWins} : Computer - ${computerWins}\n\nComputer is the Winner`)
        return gameWinner = "computer"
    }
  
  }

  
}

game()




