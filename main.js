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
var minRange = parseInt('minRangeInput.value');
var maxRange = parseInt('maxRangeInput.value');
var randomNumber = function getRandomNumber(min, max) {
  Math.floor(Math.random() * (max - min + 1)) + min;
}


updateButton.addEventListener('click', function() {
  getRandomNumber(minRange, maxRange);
  minRangeChoice.innerText = `${minRangeInput.value}`;
  maxRangeChoice.innerText = `${maxRangeInput.value}`;
  minRangeInput.value = '';
  maxRangeInput.value = '';
  console.log(randomNumber);
});

submitGuessButton.addEventListener('click', submitGuess);

function submitGuess() {
  for (var i = 0; i < challenger1Name.length; i++) {
    challenger1Name[i].innerText = `${challenger1NameInput.value} `};
  for (var i = 0; i < challenger2Name.length; i++) {
    challenger2Name[i].innerText = `${challenger2NameInput.value} `};
  challenger1Guess.innerText = ` ${challenger1GuessInput.value}`;
  challenger2Guess.innerText = ` ${challenger2GuessInput.value}`;
};
