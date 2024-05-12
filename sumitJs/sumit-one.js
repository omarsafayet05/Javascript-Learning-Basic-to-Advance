console.log(document.all); //show all html elements in html collection.This is not an array,look like array.but you can loop for showing each html element.

console.log(typeof document.all); //undefined
console.log(typeof document); //shows object
console.log(document.all[5]); //This is bad practice if you access to html element by assigning html collection index value.cause anytime developer changes html structure by typing html tags which changes index value.so,dynamically changes html collection index value.
console.log(document.images);
console.log(document.links);
console.log(document.forms); //if links appear in the html structure then show them
console.log(document.URL); //url shows
console.log(document.domain); //domain shows
console.log(document.head); //show head tag cause js converts object to element for showing in browser.
console.log(document.title); //show DOM
document.title = "play with dom"; //change title
for (let element of document.all) {
  console.log(element); //show the whole html structure by loop
}

console.log(document.getElementById("#heading")); //show html elements.

let heading = document.getElementById("heading");
let headingOne = document.getElementById("headingOne");
let headingTwo = document.getElementById("headingTwo");

heading.textContent = "Fucking Day";
headingOne.innerText = "Fucking Day";
console.log(headingTwo.innerText);
console.log(headingTwo.textContent);
//The differance between textContext and innerText is textContent shows what you have typed in the p,h1... tags even some words can be hidden that also shows.innerText shows what browser is showing.
heading.style.fontSize = "50px"; // In javascript you can't type css syntax like font-size.You have to type fontSize.
heading.style.color = "red";
console.dir(document); //get element by id which comes from document prototype chaining.html whole docs are store in a objects.js only understand objects.

let items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "orange";
}
// there all class have been changed to orange color.

let itemUL = document.getElementById("lists");
let listAll = itemUL.getElementsByClassName("item");

for (let i = 0; i < listAll.length; i++) {
  listAll[i].style.color = "cyan";
}
//When you have specified classes under parent then only these classes will change color.

let paraTag = document.getElementsByTagName("p");
console.log(paraTag);
for (let i = 0; i < paraTag.length; i++) {
  paraTag[i].style.color = "blue";
}
//you can use anytagname to access them and control them.

let query = document.querySelector(".Query");
query.style.textTransform = "uppercase";

let queryID = document.querySelector("#QueryAll");
queryID.style.fontStyle = "italic";
//You can access to css selector which can be class,id,css properties,attributes.
// let names = document.querySelector(".name:last-child");
// names.style.color = "green";
// names.style.fontWeight = "bold";

let names = document.querySelector(".name:nth-child(2)");
names.style.color = "green";
names.style.fontWeight = "bold";
//querySelector last child indicate first ul lists last child
//nth-child you can assign any number of child lists.it Shows first ul child

let li = document.querySelectorAll(".names:last-child");

for (let i = 0; i < li.length; i++) {
  li[i].style.color = "green";
  li[i].style.fontWeight = "bold";
}
// let li = document.querySelectorAll(".names:nth-child(1)");

// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "green";
//   li[i].style.fontWeight = "bold";
//}
//querySelectorAll last child means both ul lists last childs.
//nth-child you can assign any number of child lists.it Shows all ul childs.
