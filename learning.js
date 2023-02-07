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

  switch (mark) {
    case 80:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did great!";
      break;
    case 60:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did good!";
      break;
    case 50:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You did okay!";
      break;
    case 33:
      document.getElementById("gradeMark").innerHTML =
        mark + +"marks" + "," + " " + "You passed ... barely!";
      break;
    case 0:
      document.getElementById("gradeMark").innerHTML =
        mark + "marks" + "," + " " + "You failed!";
      break;
    default:
      document.getElementById("gradeMark").innerHTML =
        mark + " " + "is not a  mark!";
  }
};
