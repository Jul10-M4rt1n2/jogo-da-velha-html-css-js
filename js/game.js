//iniciar as variáveis para gerenciar os estados do jogo da velha
//board é o tabuleiro do jogo
let board = ["", "", "", "", "", "", "", "", ""];
//vez do jogador playerTime
let playerTime = 0;
//simbolos do jogo symbols
let symbols = ["x", "o"];
let gameOver = false;
//colocando um simbolo no tabuleiro ao clicar no quadrado
function handleMove(position) {
  //verificando se o jogo não acabou
  if (gameOver) {
    return;
  }
  //verificando se o quadrado está vazio
  if (board[position] == "") {
    //verificando se o quadrado está vazio
    board[position] = symbols[playerTime];
    //verificando se ha um vencedor
    gameOver = isWin();
    //passando para o próximo jogador
    if (gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  //atualizando o tabuleiro
  return gameOver;
}

//verificando se há um vencedor
function isWin() {
  //opcoes de vitória
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //verificando se há um vencedor
  for (let i = 0; i < winStates.length; i++) {
    //pegando os valores das posições do tabuleiro
    let seq = winStates[i];
    //pegando o valor da posição 0
    let pos1 = seq[0];
    //pegando o valor da posição 1
    let pos2 = seq[1];
    //pegando o valor da posição 2
    let pos3 = seq[2];
    //verificando se os valores das posições são iguais
    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  //se não houver vencedor
  return false;
}

