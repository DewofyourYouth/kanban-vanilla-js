const addCard = document.getElementById("addcard");
const todo = document.getElementById("todo");
const cardInput = document.getElementById("card-input");
const card = document.querySelector(".card");
const dropZone = document.querySelector(".dropzone");
let cardNum = 0;
let dragged;

addCard.addEventListener("click", addCardToDo);

cardInput.addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    addCardToDo()
  }
})

function addCardToDo() {
  let text = cardInput.value;
  let node = document.createElement("DIV");
  let textNode = document.createTextNode(text);
  node.id = `card-number-${cardNum}`;
  console.log(node);
  node.classList.add("card");
  node.appendChild(textNode);
  node.setAttribute("draggable", true);
  node.setAttribute("ondragstart", "onDragStart(event)");
  node.setAttribute("ondragover", "onDragOver(event)");
  todo.appendChild(node);
  cardNum++;
}


function onDragStart(event) {
  let target = event.target;
  event.dataTransfer.setData("text", target.id);
  dragged = target;
  console.log(target.id);
}

function onDragLeave(event) {
  event.preventDefault();
  event.target.style.background = "";
}

function onDragEnter(event) {
  event.preventDefault();
  const target = event.target;
}

function onDrop(event) {
  event.preventDefault();
  const target = event.target;
  target.appendChild(dragged);
}

function onDragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}