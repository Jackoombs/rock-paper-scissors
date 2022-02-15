function round() {
  let userWeapon = this.id
  console.log(userWeapon)

  const computerChoices = ['rock', 'paper', 'scissors'];
  computerWeapon = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  const weaponChoices = document.querySelector('h3')

  if (userWeapon === computerWeapon) {
    weaponChoices.innerHTML = `Rock... Paper... Scissors! <br> You chose ${userWeapon.toUpperCase()} and the computer also chose ${computerWeapon.toUpperCase()}!`;
   } else weaponChoices.innerHTML = `Rock... Paper... Scissors! <br> You chose ${userWeapon.toUpperCase()} and the computer chose ${computerWeapon.toUpperCase()}!`;

  let result = ''
  if ((userWeapon == 'rock' && computerWeapon == 'paper') || (userWeapon == 'paper' && computerWeapon == 'scissors') || (userWeapon == 'scissors' && computerWeapon == 'rock')) {
    console.log(`You Lose... ${computerWeapon} beats ${userWeapon}!`)
    result = "YOU LOSE!"
    computerWins ++
  } else if (userWeapon == computerWeapon) {
    result = "IT'S A TIE!";
  } else {
    result = "YOU WIN!";
    userWins ++
    }

  const core = document.querySelector('h2')
  core.innerHTML = `${result}<br>${userWins} - ${computerWins}` 
  
  if (computerWins == 5) {
    alert('Comiserations you lost the game. Try Again?')
    userWins = 0
    computerWins = 0
  }
  if (userWins == 5) {
    alert('Congratualtions you won the game. Try again?')
    userWins = 0 
    computerWins = 0
  }
  

}

let computerWins = 0;
let userWins = 0;

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', round));



// function game() {
//   const bestOf = prompt("Best of?...")
//   let roundNumber = 1;
//   

//   while (true) {

//     console.log(`Round ${roundNumber}\nUser - ${userWins} : Computer - ${computerWins}`)

//     roundResult = round()
//     if (roundResult == 'win') {
//       userWins++
//     } else if (roundResult == 'lose') {
//       computerWins++
//     }
//     roundNumber++

//     if (userWins == bestOf) {
//       console.log(`User - ${userWins} : Computer - ${computerWins}\n\nUser is The Winner`)
//       gameWinner = "user"

//     } else if (computerWins == bestOf) {
//         console.log(`User - ${userWins} : Computer - ${computerWins}\n\nComputer is The Winner`)
//         gameWinner = "computer"
//     }
//   } 
// }


