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
  console.log(element); //show the whole html structure
}
