let Boxes=document.querySelectorAll(".Box")
let reset=document.querySelector(".btn")
let newbtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")


let turn0 = true;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Boxes.forEach((Box) => {
  Box.addEventListener("click",() => {
    console.log("hl");
    if(turn0){
        Box.innerText = "O";
        turn0=false;
    }else{
     Box.innerText ="X";
     turn0=true;
    }
    Box.disabled = true;

    checkWinner();
  });
});
const showwinner = (winner) => {
    msg.innerText=`Congratulations!,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1val =Boxes[pattern[0]].innerText;
        let pos2val =Boxes[pattern[1]].innerText;
        let pos3val =Boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
}

const resetgame = () =>{
 turn0=true;
 enableBoxes();
 msgcontainer.classList.add("hide");

}
const disableBoxes = ()=>{
 for(let Box of Boxes){
    Box.disabled = true;
 }
}
const enableBoxes = ()=>{
 for(let Box of Boxes){
    Box.disabled = false;
    Box.innerHTML ="";
 }
}

newbtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
