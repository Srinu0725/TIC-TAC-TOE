let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg");
  

let turn0 = true;
let count = 0;
const winpatterns=[[0,1,2],
                   [3,4,5],
                   [6,7,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [0,4,8],
                   [2,4,6],
];

const resetGame = () =>{
    turn0= true;
    enabledboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if(turn0){
            box.innerText="O";
            turn0 = false;
        }else{
            box.innerText="X";
            turn0= true;
        }
        box.disabled = true;
        count++;
       
        checkWinner();
        let iswinner = checkWinner();
          if (count ===9 && !iswinner){
           gameDraw();

       }


    }
)
});

const gameDraw =() =>{
    msg.innerText= "game was a draw";
    msgcontainer.classList.remove("hide");
}


const disabledboxes= () =>{
    for(let box of boxes){
        box.disabled=true;}
    };
const enabledboxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
    };

const showWinner = (winner) =>{
    msg.innerText=`congratulations winner,${winner}`; 
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const draw = (click) =>{
    if( onclick === 9){
        count.innerText ="game is a draw";
    }   

};


const checkWinner = ()=>{
    for(let pattern of winpatterns){

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "",pos2val != "", pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner",pos1val);
                  
                    showWinner(pos1val);
                }
            }

    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
