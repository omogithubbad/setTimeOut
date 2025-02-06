const changeColorButton = document.getElementById("changeColorButton");
const cancelChangeColor = document.getElementById("cancelChangeColor");
const box = document.getElementById("box");

changeColorButton.addEventListener("click", onChangeColorClick);
cancelChangeColor.addEventListener("click", onCancelChangeColorClick);

// let timer = 0;
let timerId = 0;



function onChangeColorClick() {
    // timerId = setTimeout(changeColorButton, 2000);
    timerId = setTimeout(changeColor, 2000);

    changeColorButton.disabled = true;
}

function onCancelChangeColorClick() {
    clearTimeout(timerId);
    changeColorButton.disabled = false;
}

function changeColor() {
    changeColorButton.disabled = false;
    if(box.style.backgroundColor == "blue") {
        // box.style.backgroudColor = "white";
        box.style.backgroundColor = "white";

    } else {
        box.style.backgroundColor = "blue";
    }
}