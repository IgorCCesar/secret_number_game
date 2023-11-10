let parameterGame = 10;

function randomNumber(parameterGame) {
  return Math.floor(Math.random() * parameterGame + 1)
};

let secretNumber = randomNumber(parameterGame);

const title = 'h1';
const titleText = 'Jogo do número secreto';

const paragraph = 'p';
const paragraphText = `Escolha um número entre 1 e ${parameterGame}`;

const displayTextOnScreen = (tag, text) => {
  let field = document.querySelector(tag);
  field.innerHTML = text
};

displayTextOnScreen(title, titleText);
displayTextOnScreen(paragraph, paragraphText);

const kickVerification = () => {
  let kick = document.querySelector('input').value;

  if(kick <= 0 || kick > parameterGame) {
    displayTextOnScreen(paragraph, 'O número digitado é invalido')
  } else {
      if(kick == secretNumber) {
        displayTextOnScreen(title,`Parabéns! Você acertou o número secreto ${secretNumber}`)
        randomNumber()
    } else {
      if(kick > secretNumber) {
        displayTextOnScreen(paragraph, `O número secreto é menor que ${kick}`)
      } else {
        displayTextOnScreen(paragraph, `O número secreto é maior que ${kick}`)
      }
  }  
  } 
};

const newGame = () => {
  document.querySelector('input').value = ''
  displayTextOnScreen(paragraph, paragraphText)
  secretNumber = randomNumber(parameterGame)  
}