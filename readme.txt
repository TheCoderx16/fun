Classes & Objects 

const student = {
    fullName : "jagdeep singh",
    marks : 45 ,
    printMarks : function () {
        console.log("marks = ",this.marks);
    }

};

Prototypes in JS

Objects

* A javaScript object is an entity having state and behavior (properties and method).

* JS objects have a special property called prototype.
seference to an object

* We can set prototype using - - proto _

* If object & prototype have same method, object's method will be used.

Classes in JS

Class is a program-code template for creating objects.

Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {
constructor () {... }
myMethod () {...}
}

let myObj = new MyClass()

const employee = {

    calcTax() {
        console.log("tax rate is 10%");
    }
}
const jagdeep = {
    salary : 50000,
    
};
jagdeep.__proto__=employee;

// Classes 

class newCar {
    constructor(brand,mileage){
         this.brand = brand;
         this.mileage = mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop");
    }
   
}
let Gwagon = new newCar("Mercedes",8);
console.log(Gwagon);
let Rubicon = new newCar("Jeep Wrangler",10);
console.log(Rubicon);

// inheritence

Inheritance in JS

* inheritance is passing down properties & methods from parent class to child class.
class 1 → pl, p2, mlls, mzc
class Parent {
class 2
Textends
}


--- Note ---

* class Child extends Parent {
* If Child & Parent have same method, child's method will be used. [Method


class parent {
    hello(){
        console.log("hello");
    }
}
class child extends parent {}

let obj = new child();

class person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
}
class engineer extends person {
    work(){
        console.log("solve problems, and develop new things");
    }
}
class doctor extends person {
    treatment(){
        console.log("give treatment to the patients");
    }
}

let jagdeep = new engineer();
let ramu = new doctor();

// super Keyword


* The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

Parent

Child (derived)

super( args) // calls Parent's constructor
super.parentMethod (args )

class person {
    constructor(){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("Eat");
    }
}
class engineer extends person {
    constructor(name){
        super(name); //to invoke/call parent class constructor
        // this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve problems, and develop new things");
    }
}


let jagdeep = new engineer("Jagdeep");



// practice questions

let data = "secret data";

class user {
   constructor(fullName,email){
    this.fullName = fullName;
    this.email = email;
   }
   viewData(){
    console.log("data :",data);
   }
}
class admin extends user {
    constructor(fullName,email){
        super(fullName,email);
    }
    editData() {
        data = "new data";
    }
}

let student1 = new user("Jagdeep singh","jagdeep01@gmail.com");
let student2 = new user("Ramu", "ramu@gmail.com");

let admin1 = new admin("admin", "admincollege@gmail.com")

// Error Handling

try-catch

try {
... normal code
} 
catch (err) {//err is error object
... handling error
 }

// code for error handling

let a= 5;
let b = 10;
console. log("a = ", a);
console. log ("b = ", b);
console. log ("a+b =", a + b);

try
{
 console. log ("a+b =", a + c); //error
}
catch (err) {
console. log (err);

}
console. log("a+b = ", a + b);
console. log("a+b = ", a + b);
console. log("a+b = ", a + b);
console. log("a+b = ", a + b);
console. log("a+b = ", a + b);

// Sync in JS

// Synchronous
* Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

// Asynchronous
*
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the Ul.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the


// Callback Hell

* Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.

(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.

function getData(dataId,getNextData){
    setTimeout(() =>{               
        console.log("data",dataId);     //2s 
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,() =>{
    getData(2 , () => {
        getData(3,()=>{
            getData(4);
        })
    });
}
);


// Promises

* Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.
let promise = new Promise (resolve, reject) => { ....} )
Function with 2 handlers

* resolve & reject are callbacks provided by JS.

// Promises

* then() & .catch()

promise.then( ( (res) → {....})
promise.catch((err)) => {....})

const getPromise = () => {
    return new Promise( (resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");
    
});
}

 let promise = getPromise();
 promise.then((res)=>{
   console.log("promise fulfilled");
 })
 promise.catch((err)=>{
    console.log("rejected",err);
 });

 // promise chaining 

 function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },3000);
    });
}

console.log("fetching data1......");
asyncFunc1().then((res)=>{
    console.log("fetching data2......");
    asyncFunc2().then((res)=>{
})
});

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{               
        console.log("data",dataId); 
        resolve("success");    //5s 
    },2000);
})
}

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
    console.log(res);
})
})

// Actual promise chaining
// chain of .then 

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{               
        console.log("data",dataId); 
        resolve("success");    //5s 
    },2000);
})
}

getData(1).then((res)=>{
   return getData(2);
}).then((res)=>{
   return getData(3);
}).then((res)=>{
    console.log(res)});

// Async-Await

* async function always returns a promise.

* async function myFunc() { .... }
* await pauses the execution of its surrounding async function until the promise is settled.

async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
}

* IIFE : Immediately Invoked Function Expression

IIFE is a function that is called immediately as soon as it is defined.
(function () {
// ..
}) ();
(() = {
// ...
}) ();
(async () => ‹
// .
}) ();

// IFEE

(async function(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
}) ();


// fetch API

The Fetch API provides an interface for fetching (sendinglreceiving) resources.
It uses Request and Response objects.
The fetch method is used to fetch a resource (data).
let promise = fetch( url, [options] )

// Understanding Terms

AJAX is Asynchronous IS & XML
JSON is JavaScript Object Notation
json method: returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

//
const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
console.log("getting data .....");
let response = await fetch(URL);
console.log(response);
 let data =await response.json();
 console.log(data);
};

