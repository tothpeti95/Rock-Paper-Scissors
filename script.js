const listOfGame = ['Kő', 'Papír', 'Olló'];
const max = 3;
const game = document.getElementById("game");
const user = document.getElementById("user");
const machine = document.getElementById("machine");


function chooseRock() {
  let randomInt = Math.floor(Math.random() * max);
  let choosen = listOfGame[randomInt];

  user.innerHTML = "Kő";
  machine.innerHTML = choosen;

  if (choosen === 'Kő') {
    game.innerHTML = "DÖNTETLEN";
    game.style.color = "black"
  } else if (choosen === 'Papír') {
    game.innerHTML = "VESZTETT";
    game.style.color = "red"
  } else if (choosen === 'Olló') {
    game.innerHTML = "NYERT";
    game.style.color = "green"
  }
}

function choosePaper() {
  let randomInt = Math.floor(Math.random() * max);
  let choosen = listOfGame[randomInt];

  user.innerHTML = "Papír";
  machine.innerHTML = choosen;

  if (choosen === 'Papír') {
    game.innerHTML = "DÖNTETLEN";
    game.style.color = "black"
  } else if (choosen === 'Olló') {
    game.innerHTML = "VESZTETT";
    game.style.color = "red"
  } else if (choosen === 'Kő') {
    game.innerHTML = "NYERT";
    game.style.color = "green"
  }
}

function chooseScissors() {
  let randomInt = Math.floor(Math.random() * max);
  let choosen = listOfGame[randomInt];

  user.innerHTML = "Olló";
  machine.innerHTML = choosen;

  if (choosen === 'Olló') {
    game.innerHTML = "DÖNTETLEN";
    game.style.color = "Black"
  } else if (choosen === 'Kő') {
    game.innerHTML = "VESZTETT";
    game.style.color = "red"
  } else if (choosen === 'Papír') {
    game.innerHTML = "NYERT";
    game.style.color = "green"
  }
}
