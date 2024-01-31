let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  if (!inputNumber) {
    document.querySelector('.message').textContent = `Not a number!⛔`;
  } else if (inputNumber === guessNumber) {
    document.querySelector('.message').textContent = `Good job!🎉`;
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputNumber > guessNumber) {
    document.querySelector('.message').textContent = `Too High!👆`;
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = `You lost the game!💥`;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score = 1;
    }
  } else if (inputNumber < guessNumber) {
    document.querySelector('.message').textContent = `Too Low!👇`;
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = `You lost the game💥`;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score = 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  guessNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
