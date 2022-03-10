var myNumber = Math.round(Math.random() * 100);

var userNumbers = document.querySelector('.userNumbers');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var userNumSubmit = document.querySelector('.userNumSubmit');
var userNumInput = document.querySelector('.userNumInput');

var countNumbers = 1;
var resetButton;

function checkGuess() {
  var userNumber = Number(userNumInput.value);
  if (countNumbers === 1) {
    userNumbers.textContent = 'Неправильные числа: ';
  }
  userNumbers.textContent += userNumber + ' ';

  if (userNumber === myNumber) {
    // lastResult.textContent = 'Поздравляю! Ты победил';
    // lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = 'Правильно!';
    lowOrHi.className = 'win';
    setGameOver();
  } else if (countNumbers === 10) {
    lowOrHi.textContent = 'Ты програл :(';
    lowOrHi.className = 'lose';
    setGameOver();
  } else {
    console.log(myNumber)
    if(userNumber < myNumber) {
      lowOrHi.textContent = 'Больше';
    } else if(userNumber > myNumber) {
      lowOrHi.textContent = 'Меньше';
    }
  }

  countNumbers++;
  userNumInput.value = '';
  userNumInput.focus();
}

const logger = () => {console.log('Button clicked!')}

userNumSubmit.addEventListener('click', () => {
  checkGuess()
});
// userNumSubmit.addEventListener('click', function(){
//   logger()
// });

function setGameOver() {
  userNumbers.textContent = '';
  userNumInput.disabled = true;
  userNumSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Новая игра';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame () {
  myNumber = Math.round(Math.random() * 100);
  countNumbers = 1;

  lowOrHi.textContent = '';
  lowOrHi.className = 'lowOrHi'

  userNumInput.value = '';
  userNumInput.disabled = false;
  userNumSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
}