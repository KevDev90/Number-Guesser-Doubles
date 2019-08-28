var updateButton = document.querySelector('#update-button')
var minRangeInput = document.getElementById('min-range')
var maxRangeInput = document.getElementById('max-range')
var minRangeChoice = document.getElementById('min-range-choice')
var maxRangeChoice = document.getElementById('max-range-choice')
var submitGuessButton = document.getElementById('submit-guess')
var challenger1Name = document.querySelectorAll('.challenger1')
var challenger2Name = document.querySelectorAll('.challenger2')
var challenger1NameInput = document.querySelector('#challenger1-name-box')
var challenger2NameInput = document.querySelector('#challenger2-name-box')
var challenger1GuessInput = document.querySelector('#number-guess-box1')
var challenger2GuessInput = document.querySelector('#number-guess-box2')
var challenger1Guess = document.getElementById('challenger1-guess-result')
var challenger2Guess = document.getElementById('challenger2-guess-result')
var randomNumber = null;
var challenger1Hint = document.getElementById('challenger1-hint');
var challenger2Hint = document.getElementById('challenger2-hint');
var clearGame = document.getElementById('clear-game');
var resetGame = document.getElementById('reset-game');

updateButton.addEventListener('click', updateGame);


submitGuessButton.addEventListener('click', submitGuess);

resetGame.addEventListener('click', gameReset);


function updateGame() {
  var n1 = parseInt(minRangeInput.value);

  genRandomNumber();
  updateRange();
  clearRangeInput();
  resetGame.disabled = false;
  console.log(randomNumber);
  challenger1GuessInput.setAttribute('min', n1);
};

function submitGuess() {
  changeNames();
  displayGuess();
  giveHint();
};

function genRandomNumber() {
  var min = minRangeInput.value;
  var max = maxRangeInput.value;
  if (min == '') {
    min = 1;
  } if (max == '') {
    max = 100;
  }
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
  console.log(randomNumber);
};


function updateRange() {
  minRangeChoice.innerText = minRangeInput.value;
  maxRangeChoice.innerText = maxRangeInput.value;
};


function clearRangeInput() {
  minRangeInput.value = '';
  maxRangeInput.value = '';
};


function changeNames() {
  for (var i = 0; i < challenger1Name.length; i++) {
    challenger1Name[i].innerText = challenger1NameInput.value};
    for (var i = 0; i < challenger2Name.length; i++) {
      challenger2Name[i].innerText = challenger2NameInput.value};
};

function displayGuess(){
  challenger1Guess.innerText = challenger1GuessInput.value;
  challenger2Guess.innerText = challenger2GuessInput.value;
};

function giveHint() {
  if (challenger1GuessInput.value > randomNumber) {
    challenger1Hint.innerText = 'that\'s too high!'
  } else if (challenger1GuessInput.value < randomNumber) {
    challenger1Hint.innerText = 'that\'s too low!'
  } else {
    challenger1Hint.innerText = 'BOOM!'
  };
  if (challenger2GuessInput.value > randomNumber) {
    challenger2Hint.innerText = 'that\'s too high!'
  } else if (challenger2GuessInput.value < randomNumber) {
    challenger2Hint.innerText = 'that\'s too low!'
  } else {
    challenger2Hint.innerText = 'BOOM!'
  };
};

function inputCheck() {
  if (challenger1NameInput.value.length > 0 || challenger2NameInput.value.length > 0 || challenger1GuessInput.value.length > 0 || challenger2GuessInput.value.length > 0) {
    console.log('hi');
    clearGame.disabled = false;
  }
};

function gameReset() {
  genRandomNumber();
}
