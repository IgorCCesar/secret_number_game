let listNumberSecret = [];

let parameterGame = 10;
let attempt = 1;

function randomNumber(parameterGame) {
  let number = Math.floor(Math.random() * 10 + 1);

  let numberOfElements = listNumberSecret.length;

  if(numberOfElements == parameterGame) {
    listNumberSecret = [];
  }

  if(listNumberSecret.includes(number)) {
    return randomNumber();
  } else {
    listNumberSecret.push(number);
    return number;
  };
};

let secretNumber = randomNumber(parameterGame);

const title = 'h1';
const titleText = 'Jogo do número secreto';

const paragraph = 'p';
const paragraphText = `Escolha um número entre 1 e ${parameterGame}`;

const displayTextOnScreen = (tag, text) => {
  let field = document.querySelector(tag);
  field.innerHTML = text;
};

const cleanInput = () => {
  document.querySelector('input').value = '';
}

const addDisabledButton = () => {
  document.getElementById('reiniciar').setAttribute('disabled', true);
};

const removeDisableButton = () => {
  document.getElementById('reiniciar').removeAttribute('disabled');
};

displayTextOnScreen(title, titleText);
displayTextOnScreen(paragraph, paragraphText);

const kickVerification = () => {
  let kick = document.querySelector('input').value;

  if(kick <= 0 || kick > parameterGame) {
    displayTextOnScreen(paragraph, 'O número digitado é invalido');
  } else {
      if(kick == secretNumber) {
          let wordAttempt = attempt > 1 ? 'tentativas' : 'tentativa';
          let attemptMessage = `Parabéns! Você venceu o jogo com ${attempt} ${wordAttempt}`;

          cleanInput();
          removeDisableButton();
          displayTextOnScreen(paragraph, attemptMessage);
      } else {
          if(kick > secretNumber) {
            displayTextOnScreen(paragraph, `O número secreto é menor que ${kick}`);
          } else {
            displayTextOnScreen(paragraph, `O número secreto é maior que ${kick}`);
          }
        attempt++;
        }  
  } 
};

const newGame = () => {
  cleanInput();
  addDisabledButton();
  displayTextOnScreen(paragraph, paragraphText);
  secretNumber = randomNumber(parameterGame);
  attempt = 1;
};