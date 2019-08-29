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
var n1 = parseInt(minRangeInput.value);
var n2 = parseInt(maxRangeInput.value);
var textMin = parseInt(minRangeChoice.innerText);
var textMax = parseInt(maxRangeChoice.innerText);
var g1 = parseInt(challenger1GuessInput.value);
var g2 = parseInt(challenger2GuessInput.value);
var rangeInputError = document.querySelector('.range-error');
var infoInput = document.querySelector('#info-input')

updateButton.addEventListener('click', updateGame);

submitGuessButton.addEventListener('click', submitHandler);

// resetGame.addEventListener('click', resetHandler);


function updateGame() {
   if (n1 > n2) {
    rangeError();
  } else if (minRangeInput.value === '') {
    emptyMinError();
  } else if(maxRangeInput.value === '') {
    emptyMaxError();
  }  else {
    document.querySelector('.min-error').style.visibility = 'hidden';
    document.querySelector('.max-error').style.visibility = 'hidden';
    minRangeInput.style.border = '1px solid grey';
    maxRangeInput.style.border = '1px solid grey';
    genRandomNumber();
    updateRange();
    clearRangeInput();
    resetGame.disabled = false;
  }
};

function submitHandler() {
  if (challenger1NameInput.value === '') {
    challenger1Error();
  } if (challenger2NameInput.value === '') {
    challenger2Error();
  } if (challenger1GuessInput.value === '') {
    guess1Error();
  } if(challenger2GuessInput.value === '') {
    guess2Error();
  } if (parseInt(challenger1GuessInput.value) <         parseInt(minRangeChoice.innerText) || parseInt(challenger1GuessInput.value) > maxRangeChoice.innerText) {
    challenger1OutOfRange();
  } if (parseInt(challenger2GuessInput.value) < minRangeChoice.innerText || parseInt(challenger2GuessInput.value) > maxRangeChoice.innerText) {
    challenger2OutOfRange();
  }  else {
    document.querySelector('.c1-error').style.visibility = 'hidden';
    document.querySelector('.c2-error').style.visibility = 'hidden';
    document.querySelector('.g1-error').style.visibility = 'hidden';
    document.querySelector('.g2-error').style.visibility = 'hidden';
    challenger1NameInput.style.border = '1px solid grey';
    challenger2NameInput.style.border = '1px solid grey';
    challenger1GuessInput.style.border = '1px solid grey';
    challenger2GuessInput.style.border = '1px solid grey';
    submitGuess();
  }
}


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

function rangeError() {
   rangeInputError.style.visibility = 'visible';
   rangeInputError.innerHTML = "<img class='error' src='error-icon.svg'> Invalid range";
   minRangeInput.style.border = '1px solid #DD1972';
}

function emptyMinError() {
    document.querySelector('.min-error').style.visibility = 'visible';
    document.querySelector('.min-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
    minRangeInput.style.border = '1px solid #DD1972';
}

function emptyMaxError() {
    document.querySelector('.max-error').style.visibility = 'visible';
    document.querySelector('.max-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
    maxRangeInput.style.border = '1px solid #DD1972';
}



function challenger1Error() {
  document.querySelector('.c1-error').style.visibility = 'visible';
  document.querySelector('.c1-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
  challenger1NameInput.style.border = '1px solid #DD1972';
}

function challenger2Error() {
  document.querySelector('.c2-error').style.visibility = 'visible';
  document.querySelector('.c2-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
  challenger2NameInput.style.border = '1px solid #DD1972';
}

function guess1Error() {
  document.querySelector('.g1-error').style.visibility = 'visible';
  document.querySelector('.g1-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
  challenger1GuessInput.style.border = '1px solid #DD1972';
}

function guess2Error() {
  document.querySelector('.g2-error').style.visibility = 'visible';
  document.querySelector('.g2-error').innerHTML = "<img class='error' src='error-icon.svg'> Field Required";
  challenger2GuessInput.style.border = '1px solid #DD1972';
}

function challenger1OutOfRange() {
  document.querySelector('.g1-error').style.visibility = 'visible';
  document.querySelector('.g1-error').innerHTML = "<img class='error' src='error-icon.svg'> Outside of Range";
  challenger1GuessInput.style.border = '1px solid #DD1972';
}

function challenger2OutOfRange() {
  document.querySelector('.g2-error').style.visibility = 'visible';
  document.querySelector('.g2-error').innerHTML = "<img class='error' src='error-icon.svg'> Outside of Range";
  challenger1GuessInput.style.border = '1px solid #DD1972';
}
