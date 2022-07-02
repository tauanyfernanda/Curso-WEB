const board = document.querySelector("[data-board]");
const cellElements = document.querySelectorAll("[data-cell]");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningmessage = document.querySelector("[data-winning-message]");
const restartbutton = document.querySelector("[data-restart-button]");

let iscircleturn;

const winningcombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  iscircleturn = false;

  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleclick);
    cell.addEventListener("click", handleclick, { once: true });
  }

  setBoardHoverClass();
  winningmessage.classList.remove("show-winning-message");
};

const endGame = (isDraw) => {
  if (isDraw) {
    winningMessageTextElement.innertext = "Empate!";
  } else {
    winningMessageTextElement.innertext = iscircleturn
      ? "o venceu!"
      : "x venceu!";
  }

  winningmessage.classList.add("show-winning-message");
};

const checkForWin = (currentplayer) => {
  return winningcombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentplayer);
    });
  });
};
const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (iscircleturn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const swapturns = () => {
  iscircleturn = !iscircleturn;

  setBoardHoverClass();
};

const handleclick = (e) => {
  //colocar a marca (x ou crculo)
  const cell = e.target;
  const classToAdd = iscircleturn ? "circle" : "x";

  placeMark(cell, classToAdd);

  //verificar por vitoria
  const isWin = checkForWin(classToAdd);

  //verificar por empate
  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    //mudar simbolo
    swapturns();
  }
};

startGame();

restartbutton.addEventListener("click", startGame);
