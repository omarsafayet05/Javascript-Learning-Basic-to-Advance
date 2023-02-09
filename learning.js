console.log("Hello");
//parenthesis = ()
window.alert(
  "Bro code uploaded Javascript crach course beginner to advance level"
);

// ----------------------------------(Variables)--------------------------------

//A variable is a container for storing data
//A variable behaves as if it was the value that it contains
//variable should be descriptive name

//Two steps:
//1.declaration (var,let,const)
//2.Assignment (= assignment operator)

let age = 21; //numbers is arithmatic expression
//let age = "21"; //numbers will be coust as string and output: 211 (concatenate strings)
//age=age+1;
//console.log(age)=>outcome:211

//undefined if only age declare,no value assign.

age = age + 1;
console.log("I am", age, "years old");
// strings is a series of characters
let firstName = "Bro";
console.log("Hello", firstName); // string output

let student = true;
console.log("Enrolled", student); //boolean output

document.getElementById("p1").innerHTML = "Hello" + " " + firstName;
document.getElementById("p2").innerHTML = "My age is" + " " + age + " " + "old";
document.getElementById("p3").innerHTML = "Enrolled" + " " + firstName;

//--------------------------Arithmatic Expression-----------------------------------

// Arithmatic exp is a combination of operands(values,variables etc),
// operators(+,-,/,%) that can be evaluated to a value.Ex. y=x+5

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
students = students / 2;

console.log(students);

let extraStudents = students % 4; // it means 10%4=2;
console.log(extraStudents);

//Augmented assignment operator

students += 5; //... are same as above exm.
console.log(students); // 20/2= 10+5 =15

//Augmented assignment works on if you are ressigning same variables,it is shortcut

/*
operator precedence
1.parenthesis ()
2.exponents
3.multiplication & division
4.addition & subtraction
 */

let result = 1 + 2 * (3 + 4);
// (3+4)= 7 parenthesis task first calculted then exponents one execute : 7*2 or 1+2=3 multiplication has precedence over additon that's why 7*2=14 then additon with 1
console.log(result); //15

let resultAnother = (1 + 2) * (3 + 4);
// Execute first parenthesis,then second parenthesis, finally execute multiply 3 with 7

console.log(resultAnother); //21

// ---------------------------------(Input)-------------------------------------

//How to accept user input

//Easy way with a window prompt

let username = window.prompt("What's your name?");
console.log(username);

//Difficulty way HTML textbox

let userName; //declare var for the program.

document.getElementById("myBtn").onclick = function () {
  userName = document.getElementById("myText").value;
  console.log(userName);
  document.getElementById("header").innerHTML = "Hello" + userName;
};

//--------------------------Type Conversion-----------------------------------

//Type conversion = change the datatype of a value to another (strings,numbers,booleans)
//1st Exmple,
let ageOne = window.prompt("How old are you?");
console.log(typeof ageOne); //string
ageOne = Number(ageOne);
console.log(typeof ageOne);
ageOne += 1;
console.log("Happy Birthday! you are", ageOne, "years old");

//2nd Exmple,
let x;
let y;
let z;

x = Number("3.14"); //this is called number constructor,string...
console.log(x, typeof x);
y = String("3.14");
console.log(y, typeof y);
z = Boolean(""); // if type 'pizza' outcome is true.
console.log(z, typeof z);

//-------------------------- (Const) -----------------------------------

//const =a variable that can't be changed
//type PI, not pi is best practice

const PI = 3.14159;
let radius;
let circumstances;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;
//Once time const declare,you can't it again declare will result in type error.

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

//-------------------------- (Math) -----------------------------------

//Math is an intrinsic object that provides basic mathmatics functionality and constants.

let a = 3.14;

x = Math.round(a);

console.log(x); //3

let b = 3.99;

x = Math.round(b);

console.log(x); //4

let c = 3.14;

x = Math.ceil(c);

console.log(x); //4

let d = 3;

x = Math.pow(d, 2);

console.log(x); //9

let e = 4;

x = Math.sqrt(e);

console.log(x); //2

let abs = -3.14;

x = Math.abs(abs);

console.log(x); //3.14

let razu_age = 20;
let manju_age = 25;
let mina_age = 48;
let minimum;
let maximum;

maximum = Math.max(razu_age, manju_age, mina_age);
minimum = Math.min(razu_age, manju_age, mina_age);

console.log(maximum); //3.14
console.log(minimum); //3.14

x = Math.PI;

console.log(x); //3.141592653589793

//--------------------- (Hypotenuse calc practice program) --------------------

//Right angled triangle
//formula,o= square root m^2+n^2

let m;
let n;
let o;

m = window.prompt("Enter side m");
m = Number(m);

n = window.prompt("Enter side n");
n = Number(n);

o = Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));
console.log("side o", o);

document.getElementById("btnSubmit").onclick = function () {
  m = document.getElementById("aTextBox").value;
  m = Number(m);

  n = document.getElementById("bTextBox").value;
  n = Number(n);
  o = Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));

  document.getElementById("olabel").innerHTML = "Side O:" + o;
};

//-------------------------- (Counter Program) -------------------------------

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

//----------------------- (Random number generator) ---------------------------

let randomNumber = Math.random();
let randomNumberTwo = Math.random() * 6;

console.log(randomNumber); // between 0 and 1 generate random number but with decimal
console.log(randomNumberTwo); // between 0 and 5 generate random number but with decimal

let randomNumberThree = Math.floor(Math.random() * 6);

console.log(randomNumberThree); // between 0 and 5 generate random float number

let randomNumberFour = Math.floor(Math.random() * 6) + 1; //add offset number

console.log(randomNumberFour); // between 0 and 6 generate random float number it is kind of rolling different sized dice.

//Exmple-02

let oneSide;
let twoSide;
let threeSide;

document.getElementById("rollButton").onclick = function () {
  oneSide = Math.floor(Math.random() * 6) + 1;
  twoSide = Math.floor(Math.random() * 6) + 1;
  threeSide = Math.floor(Math.random() * 6) + 1;

  document.getElementById("onePass").innerHTML = oneSide;
  document.getElementById("twoPass").innerHTML = twoSide;
  document.getElementById("threePass").innerHTML = threeSide;
};

//----------------------- (Useful string methods) ---------------------------

let userNameOne = "Bro code";

console.log(userNameOne.length);
let firstLetter = userNameOne.charAt(0);
console.log(firstLetter);
//console.log(userNameOne.charAt(0));
//console.log(userNameOne.indexOf("o"));
console.log(userNameOne.lastIndexOf("o"));
let userNameTwo = "  Bro code  ";
console.log(userNameTwo);
console.log(userNameTwo.toUpperCase());
console.log(userNameTwo.toLowerCase());

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

//----------------------- (Slice string ) ---------------------------

//slice() extracts a section of a string
//and returns it as a new string,
//without modifying the original string

let fullName = "Bro Code";
let firstNameOne;
let lastName;

firstNameOne = fullName.slice(0, 3);
lastName = fullName.slice(4); //[0=>B,1=>r,2=>o,3=>space,4=>C] if you get whole last name there is no need to put last index number in second parameter.

console.log(lastName);
console.log(firstNameOne);

let fullNameOne = "Omar Safayet";
let firstNameTwo;
let lastNameTwo;

firstNameTwo = fullNameOne.slice(0, fullNameOne.indexOf(" ")); //[0=>The Beginning(Omar), wherever there's spaces]
console.log(firstNameTwo);

lastNameTwo = fullNameOne.slice(fullNameOne.indexOf(" ") + 1); //indexOf wherever spaces,1=>Safayet
console.log(lastNameTwo);

//----------------------- (Method Chaining) ---------------------------
//method chaining=calling one method after another in one continuous line of code

let userNameThree = "bro";
let letter = userNameThree.charAt(0).toUpperCase().trim();

console.log(letter); //[0=>b=>B,trim=>ro(cutout)]

//------------------------- (if statements) -------------------------------

//if statement= a basic form of decision making
//if a condition is true,then do something if Notification,then don't do it!

//let ageTwo = 21;
let ageTwo = 12;

if (ageTwo >= 18) {
  console.log("You are an adult");
} else if (ageTwo < 0) {
  console.log("You haven't been born yet!");
} else {
  console.log("You are a child!");
}

let online = true;
//let online = false;
if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}

//----------------------- (Checked Property) ----------------------------

document.getElementById("myBtnTwo").onclick = function () {
  //const myCheckBox = document.getElementById("myCheckBox").checked;
  const visaCard = document.getElementById("Visa").checked;
  const masterCard = document.getElementById("masterCard").checked;
  const payPal = document.getElementById("Paypal").checked;
  // if (myCheckBox) {
  //   alert("You are subscribed!");
  // } else {
  //   alert("You are not subscribed!");
  // }

  if (visaCard) {
    window.confirm("You are paying with visa card!");
  } else if (masterCard) {
    window.confirm("You are paying with mastercard card!");
  } else if (payPal) {
    window.confirm("You are paying with paypal!");
  } else {
    alert("You must one of them select for payment");
  }
};

//to be noted:if (document.getElementById("myCheckBox").checked == true),this is normal typing,you can no typing boolean in condition.

//----------------------- (Switches) ----------------------------

//Switch= statement that examines a value
//for a match against many case clauses.
//more effecient that may "else if" statements

//Example:1

let grade = window.prompt("Your earned grade:");
grade = String(grade);

if (grade == "A") {
  alert("You did great!");
} else if (grade == "B") {
  alert("You did good!");
} else if (grade == "C") {
  alert("You did okay!");
} else if (grade == "D") {
  alert("You passed ... barely!");
} else if (grade == "F") {
  alert("You are failed!");
} else {
  alert(grade, "is not a letter grade");
}

//When many cases come in condition then it is better way to use switch.

switch (grade) {
  case "A":
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "You did great!";
    break;
  case "B":
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "You did good!";
    break;
  case "C":
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "You did okay!";
    break;
  case "D":
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "You passed ... barely!";
    break;
  case "F":
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "You failed!";
    break;
  default:
    document.getElementById("gradeLetter").innerHTML =
      grade + "," + " " + "is not a letter grade!";
}

//Exmple:2

let mark;
let changeDisplay = (document.getElementById("line").style.display = "none");
let changeDisplayTwo = (document.getElementById("hiddenMark").style.display =
  "inline");

//to be noted: display:none uses is given advantage are not creating any spaces between lines but visibility makes spaces if hidden.

document.getElementById("get").onclick = function () {
  changeDisplay = document.getElementById("line").style.display = "block";
  changeDisplayTwo = document.getElementById("hiddenMark").style.display =
    "none";
  mark = window.prompt("Your earned mark:");
  mark = Number(mark);

  switch (true) {
    case mark >= 80:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did great!";
      break;
    case mark >= 60:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did good!";
      break;
    case mark >= 50:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did okay!";
      break;
    case mark >= 33:
      console.log(mark);
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You passed ... barely!";
      break;
    case mark >= 0:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You failed!";
      break;
    default:
      document.getElementById("gradeMark").innerHTML =
        mark + " " + "is not a  mark!";
  }
};

//----------------------- (AND OR logical operators) ----------------------------
//Gives us the ability to check more than one condition concurrently
//&& AND (Both conditions must be true)
//|| OR (Either condition can be true)

let temp = 15;
let sunny = true;
if (temp > 0 && temp < 30 && sunny) {
  alert("The Weather is good!");
} else {
  alert("The weather is bad!");
}

let tempOne = 50;

if (tempOne <= 0 || tempOne >= 30) {
  alert("The Weather is bad!");
} else {
  alert("The weather is good!");
}

//----------------------- (NOT logical operator) ----------------------------

//!NOT logical operator
//Typically used to reverse a condition's boolean value
//true->false false->true

let tempTwo = 15;

if (!(tempTwo > 0)) {
  alert("It's warm outside");
} else {
  alert("It's cold outside");
}

if (!sunny) {
  alert("It's cloudy outside");
} else {
  alert("It's sunny outside");
}

//----------------------- (while loop) ----------------------------

//while loop= repeat some code
//while some condition is true potentially infinite

let userNameFour = "";

while (userNameFour == "" || userNameFour == null) {
  // when empty string if check this condition is found true then again check this untill put your name,cancel to enter your name get null output. if OR condition is null then you must put name otherwise ok and cancel button again and again iteration.(Infinite loop) ok=> condition is true or cancel=>condition is true they are running in infinite amount of loop untill put your name.
  userNameFour = window.prompt("Enter your name");
}

// while (1 == 1) {
//   alert("Help! I am stuck in infinite loop");
// }
//It may cause froze the browser console.

console.log("Hello", userNameFour);
alert(`Hello ${userNameFour}`);

//----------------------- (do while loop) ----------------------------

//do while loop=do something,
//then check the condition,repeat if condition is true
let userNameFive;
do {
  userNameFive = window.prompt("Enter your name");
} while (userNameFive == "");

console.log("Hello", userNameFive);
alert(`Hello ${userNameFive}`);

//There is first you have to do something(Here you enter your name) then while loop check it and run the program ,if get empty string means find no input value then iteration occur untill enter your name but cancel it and output:null.

//----------------------- (for loop) ----------------------------

//for loop=repeat some code a certain amount of time

// for (let counter = 1; counter <= 10; counter+=1) {
//   alert(counter);
//   return;
// }

let typeMe;
let text = "";
typeMe = window.prompt("Type your words");

for (let i = 1; i <= 10; i++) {
  //text += `${i} My name is ${typeMe} <br/>`;
  text += i + "My name is" + typeMe + "<br/>"; // Print input value based on how many times iteration is occuring.
  document.getElementById("typeMe").innerHTML = text;
}
const Students = ["Majed", "Karim", "Rashed"];

document.getElementById("myButton").onclick = function () {
  for (let i = 0; i < Students.length; i++) {
    //Array loop that's why iteration used as index number
    //text += Students[i] + "<br/>";
    text += `${Students[i]} <br/>`;
    document.getElementById("typeMe").innerHTML = text;
  }
};

for (let a = 10; a > 0; a--) {
  console.log(a);
}

//-------------------- (break and continue statements) ------------------------

//break =breaks out of a loop entirely
//continue=skip an iteration of a loop

for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    break;
  }
  document.getElementById("break").innerHTML = i;
}

for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue;
  }
  document.getElementById("continue").innerHTML = i;
}

//-------------------- (nested loop) ------------------------

//nested loop=a loop inside of another loop.

for (let i = 1; i <= 3; i += 1) {
  for (j = 1; j <= 3; j += 1) {
    console.log(j);
  }
}

//Three times nested loop iterate. Outer loop execute number of iteration of nested loop. nested loop itself iterate according to it's iteration times.
//It is convention that in a nested loop (inner loop) let 'j' cause, j alphabet next comes after 'i'.
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for (let i = 1; i <= rows; i += 1) {
  for (j = 1; j <= columns; j += 1) {
    //document.getElementById("myRectangular").innerHTML += j;
    document.getElementById("myRectangle").innerHTML += symbol;
  }

  document.getElementById("myRectangle").innerHTML += "<br/>";
}

//-------------------- (functions) ------------------------

//function =define code once,use it many times.
//to perform some code,call the function name.

console.log("Happy birthday to you!");
console.log("Happy birthday dear!");
console.log("You are ____ years old!");
console.log("Happy birthday dear ____!");

console.log("Happy birthday to you!");
console.log("Happy birthday dear!");
console.log("You are ____ years old!");
console.log("Happy birthday dear ____!");

happyBirthday();

function happyBirthday() {
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear!");
  console.log("You are ____ years old!");
  console.log("Happy birthday dear ____!");
}

// function can access to global variables and as many times you can declare function.
let userNameSix = "Bro";
let ageThree = 21;

happyBirthday();
happyBirthday();
happyBirthday();

function happyBirthday() {
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear!");
  console.log("You are", ageThree, "years old!");
  console.log("Happy birthday dear!", userNameSix);
}

//a function call another function by send over arguments to second function receive it as parameters.It is noted parameters can be any word,alphabet but there is needed orderly to be placed.when first function in curly braces it can't recognise global variable,then you should return them as arguments to second function.

startProgram();

function startProgram() {
  let userNameSix = "Bro";
  let ageThree = 21;

  happyBirthday(userNameSix, ageThree);
}

function happyBirthday(userNameSix, ageThree) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear!");
  console.log("You are", ageThree, "years old!");
  console.log("Happy birthday dear!", userNameSix);
}

//-------------------- (return statements) ------------------------

//return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("the area is", area);

function getArea(width, height) {
  let result = width * height;
  return result;
}
