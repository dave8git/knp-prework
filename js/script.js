function playGame(playerInput) {
    clearMessages();
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerMove = getMoveName(randomNumber);
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);

    console.log(computerMove);

    console.log('Wylosowana liczba to: ' + randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    printMessage('Twój ruch drogi userze to: ' + playerInput);

    displayResult(computerMove, playerMove, playerInput);

    function displayResult(argComputerMove, argPlayerMove, playerInput) {
        if (isNaN(playerInput) || (playerInput > 3)) {
            printMessage('Tak to sobie graj sam!');
        } else if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'kamień') || (computerMove == 'papier' && playerMove == 'nożyce')) {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == playerMove) {
            printMessage('No i remis!');
        } else {
            printMessage('Komputer jest the best!');
        }
    }
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });

  function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}