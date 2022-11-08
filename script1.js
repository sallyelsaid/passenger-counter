let countElement = document.getElementById("count-el");
let counter = 0;
let saveElement = document.getElementById("save-el");

// increase counter
function increment() {
  counter++;
  countElement.innerHTML = counter;
}

//save last count
function save() {
  let saveStr = counter + " - ";
  saveElement.innerHTML += saveStr;
  counter = 0;
  countElement.innerHTML = 0;
}
