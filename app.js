let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newbtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('clicked')
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
showWinner= (Winner) =>{
msg.innerText = `Congratulation, winner is ${Winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();

}
checkWinner = () => {
    for (let patern of winPattern) {
        let pos1 = boxes[patern[0]].innerText;
        let pos2 = boxes[patern[1]].innerText;
        let pos3 = boxes[patern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
            }
        }

    }
}
newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame)