let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let msgcon = document.querySelector("msg-container");
let msg =document.querySelector("#msg");
let turn0 = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML = "x";
            // console.log("x");
            turn0 =false;
            box.disabled = true;
        }else{
            box.innerHTML = "o";
            // console.log("o");
            turn0=true;
            box.disabled = true;
        }
        checkwin()
    //     box.innerHTML = "yash";
    // console.log("box was clicked")
    })
});

const disbleboxes = () =>{
    for(let box of boxes )
    {
        box.disabled = true;
    }
}
 
const showwinner = (winner)=>{
    msg.innerHTML=`winner is ${winner}`;
   disbleboxes();
};
const checkwin = () => {
  for(let patrn of winpattern)
  {
    let pos1val = boxes[patrn[0]].innerHTML;
    let pos2val = boxes[patrn[1]].innerHTML;
    let pos3val = boxes[patrn[2]].innerHTML;

    if(pos1val !=""&&pos2val !="" && pos3val != ""){
        if( pos1val === pos2val && pos2val === pos3val){
            console.log("winner is ",pos1val);
            showwinner(pos1val);
        }
    }
  }
};

resetbtn.addEventListener("click" , ()=>{
    location.reload();
})

