
// creating an empty array 
export let groceryList = [];

// function to add items to the groceryList array
export function addItem(item) {
  groceryList.push(item);
}

// function to remove items from the groceryList array 
export function removeItem(item) {
  let index = groceryList.indexOf(item);
  groceryList.splice(index, 1);
}

// Test codes: ↓  

// adding items 
// addItem("Fruits"); 
// addItem("Hilsha Fish");
// addItem("Meat");
// addItem("Butter"); 
// console.log(groceryList);  // expected Output: ["Fruits", "Hilsha Fish", "Meat", Butter]

// removing items 
// rmoveItem("Hilsha Fish"); 
// console.log(groceryList); // expected Output: ["Fruits", "Meat", "Butter"]