let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;
let count=0

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame=()=>{
    turnO=true
    count=0
    enableBoxes()
    msgContainer.classList.add('hide')
}



boxes.forEach((box) => {
  box.addEventListener("click", () => {
  
    if (turnO) {
      box.innerText = "O";
      box.style.color='#F9DEC9'
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color='green'
      turnO = true;
    }
    box.disabled = true;
   
    count++
    let win=checkWinner()
    if(count===9 && !win){
    drawgame()

     
    }
    
  });
});
const drawgame=()=>{
    msg.innerText = `There is no winner`;
    msgContainer.classList.remove("hide");
   
    disbaleBoxes()
}
const disbaleBoxes = () => {
  for (let box of boxes) {
    box.disabled=true
  }
};
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled=false
      box.innerText='';
    }
  };
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disbaleBoxes()
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0])
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val == pos3Val) {
    
        showWinner(pos1Val);
      }
    
    
    }
  }
};

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)
