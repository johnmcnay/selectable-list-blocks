const btn = document.querySelector("#add-blocks-btn");
const form = document.querySelector("#add-blocks");
const input = document.querySelector("#num-of-blocks");
const target = document.querySelector("#target");
const clear = document.querySelector("#clear-blocks-btn");
const numOfBoxes = document.querySelector("#num-of-boxes");
const blueBoxes = document.querySelector("#blue-boxes");

let boxes = 0;
let blue = 0;

clear.addEventListener("click", () => {
    boxes = 0;
    blue = 0;
    numOfBoxes.textContent = "Total Boxes: " + boxes;
    blueBoxes.textContent = "Blue Boxes: " + blue;
    target.textContent = "";
});

input.addEventListener("change", () => {

    btn.textContent = "Add " + input.value + " blocks";

});

input.addEventListener("keyup", () => {

    btn.textContent = "Add " + input.value + " blocks";

});

form.addEventListener("submit", e => {
    e.preventDefault();

    for (let i = 0; i < input.value; i++) {
        //add block with random number
        let block = document.createElement("span");
        let randomNumber = Math.floor(Math.random() * 1000);
        block.textContent = randomNumber;
        block.classList.add("block");
        
        target.appendChild(block);
    }

    boxes += parseInt(input.value);
      
    numOfBoxes.textContent = "Total Boxes: " + boxes;
});


target.addEventListener("click", ev => {

    if (ev.target.classList.contains("block")) {
        if (ev.target.classList.contains("selected")) {
            blue--;
        } else {
            blue++;
        }

        ev.target.classList.toggle("selected");
        blueBoxes.textContent = "Blue Boxes: " + blue;    
    }
});