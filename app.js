//All possible winning patterns
let winChart = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let winner = null;
let tbl = document.querySelector("#gameTable");
let popedDiv = document.querySelector("#popedDiv");
let totChance = 9, n = 0;
tbl.addEventListener("click", (e) => {
  if (e.target.innerText == "") {
    if (n % 2 == 0) {
      e.target.style.backgroundColor = "rgb(72,201,176)";
      e.target.innerText = "X";
      n++;
      if (n < 10) {
        checkWin(e, "X");
      }
    } else {
      e.target.style.backgroundColor = "rgb(255,133,51)";
      e.target.innerText = "O";
      n++;
      if (n < 10) {
        checkWin(e, "O");
      }
    }
  }
});
//Game Logic
let checkWin = (e, ch) => {
  let targetVal = e.target.attributes.value.value;
  for (let n in winChart) {
    for (let m in winChart[n]) {
      if (parseInt(targetVal) == winChart[n][m]) {
        winChart[n][m] = ch;
      }
    }
  }
  for (let n of winChart) {
    if (n[0] == n[1] && n[1] == n[2]) {
      winner = ch;
      winDiv(ch);
    }
  }
  if(n==9 && winner==null){
    winDiv();
  }
};
//Restart Game Logic
const restartGame = () =>{
  winner = null;
  n = 0;
  winChart = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  let tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.style.backgroundColor = "rgb(245,245,245)";
    td.innerText = null;
  });
  popedDiv.classList.remove("showPopedDiv");
  popedDiv.classList.add("hidePopedDiv");
}
//Restart Buttons
let restartBtn = document.querySelector("#restartBtn");
let restartBtn1 = document.querySelector("#restartBtn1");
restartBtn.addEventListener("click", restartGame);
restartBtn1.addEventListener("click", restartGame);
//PopUp window when game draw/win
let newDiv = document.createElement("div");
let winDiv = (ch=null) => {
  let mainDiv = document.querySelector(".main");
  popedDiv.classList.remove("hidePopedDiv");
  popedDiv.classList.add("showPopedDiv");
  mainDiv.classList.add("disabled");
  document.querySelector("#winningH1").innerText = winner!=null?`You(Player ${ch}) won the game!`:`Game Draw, Please Restart The game!`;
  popedDiv.append(newDiv);
}