// let funcReturnString = (): string => {
//   console.log("lamadev");
//   //return "lamadev"
// };
var funcReturnStringTwo = function () {
    console.log("lamadev");
    return "lamadev";
};
//Both functions are exactly same
var multiply = function (num) {
    return num * 3;
};
var multiplyTwo = function (num) {
    return num * 3;
};
var multiplyThree = function (num) {
    //return num * 3;
    //here console.log works.
    //void means do something but do't return value.
};
//
var sum = function (num1, num2) {
    return num1 + num2;
};
sum(2, 3);
//if you add another parameter but it's not required then typescript don't show warning!
var sumOne = function (num1, num2, another) {
    return num1 + num2;
};
sum(2, 3);
//Type Aliase
var func = function (user) {
    console.log(user.Username);
};
var betterFunc = function (user) {
    console.log(user.Username);
};
//Void functions in TypeScript are functions that do not return a value. They perform actions or computations without producing a result that needs to be captured. Commonly used for side effects like logging, modifying external state, or triggering asynchronous operations, they enhance code clarity.
//In this example, the greet function is a void function. It takes one parameter, name, which is a string. The function logs a greeting message to the console and does not return a value.
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("GeeksforGeeks");
var write = function (num, str) {
    console.log(num + "times" + str);
};
var userWithTheme = {
    username: "omar",
    age: 24,
    //theme:"pink" warning shows
    theme: "light",
    phone: "+0123456",
};
var emp = {
    username: "Manik",
    age: 25,
    email: "manik@gmail.com",
    employeeId: 1205,
};
var client = {
    username: "sazzad",
    age: 34,
    email: "sazzad@gmail.com",
};
//Generics
var id = Math.floor(Math.random() * 100);
console.log(id);
