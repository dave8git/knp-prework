let computerMove = 'nieznany ruch';
let playerMove = `papier`;

let randomNumber = Math.floor((Math.random()*3)+1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); 

console.log('Gracz wpisał: ' + playerInput); 


if(playerInput == 1){
    playerMove = 'kamień';
  } else if (playerInput == 2) {
      playerMove = 'papier';
  } else {
      playerMove = 'nożyce';
  }

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

