// let funcReturnString = (): string => {
//   console.log("lamadev");
//   //return "lamadev"
// };
let funcReturnStringTwo = (): string => {
  console.log("lamadev");
  return "lamadev";
};

//Both functions are exactly same
let multiply = (num: number) => {
  return num * 3;
};
let multiplyTwo = (num: number): number => {
  return num * 3;
};
let multiplyThree = (num: number): void => {
  //return num * 3;
  //here console.log works.
  //void means do something but do't return value.
};

//
let sum = (num1: number, num2: number) => {
  return num1 + num2;
};

sum(2, 3);

//if you add another parameter but it's not required then typescript don't show warning!
let sumOne = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

//Type Aliase
let func = (user: { Username: string; Age: number; Phone?: string }) => {
  console.log(user.Username);
};

type Usertype = {
  Username: string;
  Age: number;
  Phone?: string;
};

let betterFunc = (user: Usertype) => {
  console.log(user.Username);
};
//Void functions in TypeScript are functions that do not return a value. They perform actions or computations without producing a result that needs to be captured. Commonly used for side effects like logging, modifying external state, or triggering asynchronous operations, they enhance code clarity.

//In this example, the greet function is a void function. It takes one parameter, name, which is a string. The function logs a greeting message to the console and does not return a value.
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("GeeksforGeeks");

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type Usertype2 = {
  username: string;
  age: number;
  theme: "dark" | "light";
  phone?: string;
};

const userWithTheme: Usertype2 = {
  username: "omar",
  age: 24,
  //theme:"pink" warning shows
  theme: "light",
  phone: "+0123456",
};

//INTERFACES
interface IUser {
  username: string;
  age: number;
  email: string;
}
interface Iemployee extends IUser {
  employeeId: number;
}

const emp: Iemployee = {
  username: "Manik",
  age: 25,
  email: "manik@gmail.com",
  employeeId: 1205,
};
const client: IUser = {
  username: "sazzad",
  age: 34,
  email: "sazzad@gmail.com",
};

//Generics
let id = Math.floor(Math.random() * 100);
console.log(id);

const addID = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "omar",
  age: 25,
  country: "BD",
});

//user.; //user.id => id only suggests but other object properties not suggest because of not capturing what's inside of object parameters. For capturing object's all properties we can use "<T>"

//after using <T> result is:
user.country;
user.age;
user.name;
user.id;

const addID2 = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user2 = "omar";

//addID2(user2) if user2 argument pass to addID2 function,you can't pass because parameters should be  a object not string.This is generic way to limit the receive of user's input data.
//If <T> extends string then you can pass string value.

//If you notice passing as object 3 properties but accept two as required parameters. extra properties are relaxed in the object. Variable accepts in a generic way.

const addID3 = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user3 = addID3({
  name: "omar",
  age: 25,
  country: "BD",
});

addID3(user3);

//Interface use in a generic way

interface Apiresponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: Apiresponse<object> = {
  status: 200,
  type: "Fair",
  data: {
    name: "John",
    age: 25,
    id: 1012,
  },
};

// We don't know what api response will be?variable  assign values can be handled in a generic way on the interface dynamically.
//if variable values type can be string,object,number or boolean that interface accepts dynamically by using generic way.
