// Grocery List Manager's logic

// importing codes 
import {groceryList, addItem, removeItem}  from './reuse.js'


// variables 
const input = document.querySelector("#input-field");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const container = document.querySelector(".item-container");

// class name adder 
function addClass(elem,name) {
  elem.classList.add(name);
}

// event handler 
addBtn.addEventListener("click", () => {
  if (input.value === '') {
    alert('Please enter item!');
  }
  else {
    addItem(input.value);
    input.value = "";
    input.placeholder = "Add Item";
    localStorage.setItem("item-list", JSON.stringify(groceryList));
    showList();
  }
});

// function to display list item 
function showList() {
  const storedList = JSON.parse(localStorage.getItem("item-list")) || [];
  groceryList.length = 0; 
  groceryList.push(...storedList);
  
  if (groceryList.length <= 0) {
    container.innerText = "No Items!"
  }
  else{
    container.innerText = "";
    groceryList.forEach(elem => {
      let div = document.createElement('div');
      div.innerText = elem;
      addClass(div,"item");
      container.appendChild(div)
    });
  }
}
resetBtn.addEventListener("click", () => {
  groceryList.length = 0; 
  localStorage.removeItem("item-list");
  showList();
});


showList(); // initial/start call