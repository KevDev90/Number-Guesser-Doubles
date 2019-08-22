var updateButton = document.querySelector('#update-button')
var minRangeInput = document.getElementById('min-range')
var maxRangeInput = document.getElementById('max-range')
var minRangeChoice = document.getElementById('min-range-choice')
var maxRangeChoice = document.getElementById('max-range-choice')

updateButton.addEventListener('click', function() {
  minRangeChoice.innerText = `${minRangeInput.value}`;
  maxRangeChoice.innerText = `${maxRangeInput.value}`;
  minRangeInput.value = '';
  maxRangeInput.value = '';
});
