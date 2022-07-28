//carregando o HTML e verificando qual o quadrado foi clicado
document.addEventListener("DOMContentLoaded", () => {
  //pegando todo os elementos que tem a classe square
  let squares = document.querySelectorAll(".square");
  //adicionando um evento de click para cada quadrado
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
//criando a funcao handleClick
function handleClick(event) {
  //pegando o elemento que foi clicado
  let square = event.target;
  //pegando o id do elemento que foi clicado
  let position = square.id;
  //chamando a funcao handleMove passando o id do elemento clicado
  if (handleMove(position)) {
    //verificando se há um vencedor
    setTimeout(() => {
      alert("Você venceu! " + playerTime + " ganhou!");
    }, 10);
  }
  updateSquares();
  checkDraw();
}

function updateSquares() {
  //pegando todo os elementos que tem a classe square
  let squares = document.querySelectorAll(".square");
  //adicionando um evento de click para cada quadrado
  squares.forEach((square) => {
    //pegando o valor do quadrado
    let position = square.id;
    //pegando o valor do tabuleiro
    let symbols = board[position];
    //verificando se o quadrado está vazio
    if (symbols != "") {
      //colocando o simbolo no quadrado
      square.innerHTML = `<div class=${symbols}></div>`;
    } else {
      //colocando o simbolo no quadrado
      square.innerHTML = "";
    }
  });
}

//removendo classe do symbolo
function clearSquares() {
  //pegando todo os elementos que tem a classe square
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  updateSquares();
}

//Empate do jogo da velha apos 9 jogadas
function checkDraw() {
  if (
    board[0] != "" &&
    board[1] != "" &&
    board[2] != "" &&
    board[3] != "" &&
    board[4] != "" &&
    board[5] != "" &&
    board[6] != "" &&
    board[7] != "" &&
    board[8] != ""
  ) {
    alert("Empate!");
    clearSquares();
  }
}
