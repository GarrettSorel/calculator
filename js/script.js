const table = document.querySelector('#calculator');

function createScreen() {
  let calcScreen = document.createElement('td');
  calcScreen.classList.add('screen');
  table.appendChild(calcScreen);
}

createScreen();
