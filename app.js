//activity 1-----------------------
/*
const simple =  () => {
    console.log(`Hello Code Nation`)
}

const returnNFive = (five) =>{
    for(let i = 0; i <= 4; i++) {
        five()
    }
}

returnNFive(simple)
*/

//activity end -------------------------


//activity 2----------------------------

/*
const fiveNumbers = [1,2,3,4,5];
fiveNumbers.map( multiply => {
    console.log(multiply * 3)
})
*/


//acitivity end-----------------------------



//activity3---------------------------------

/*
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) =>{
    return a*b;
}
const  divide = (a,b) => {
    return a/b;
}

const doMaths = (num1) =>{
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log()

*/


/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a)

setTimeout(() => {
    console.log(b)
},1000)

console.log(c)
console.log(d)
*/

/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a)

setTimeout(() => {
    console.log(b)
},2000)

setTimeout(() => {
    console.log(c)
},0)


console.log(d)
*/


/*
let myPosts = ["post1", "post2","post3"];

const allPost = () => {
    setTimeout(() => {
        for(let i = 0; i <myPosts.length; i++) {
            console.log(myPosts[i])
        }
    }, 1000)

}


const createPost = (post, callback) => {
    setTimeout(() => {
        myPosts.push(post)
        callback()
    },2000)
}

createPost("post4",allPost)
*/

/*
const myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2);
    if(random === 0) {
        resolve()
    }else {
        reject()
    }
})

myPromise
.then(()=> console.log("it has resolved"))
.catch(() => console.log("REJECT!!!!"))

*/




//-----------------------------------------------Day2
//small activities
/*
let name = "sayam";
let num = 2;
let truth = true;

let arr = ["choclate", "cake", "honey", "syrup"];
arr.push("milkshake")
//let hi = arr.toUppercase();

console.log(arr)
*/
//--------------------------------------------------

//classes in JS-------------------------------------------------
/*
class Bunny {
    constructor(name) {
        this._name = name;
        this._hops = 0;
    }
    get name() {
        return this._name;
    }
    get hops(){
        return this._hops
    }
    increaseHops() {
        this._hops++;
    }
}

const rosie = new Bunny ("Rossie");

rosie.increaseHops()
rosie.increaseHops()
console.log(rosie.name)
console.log(rosie.hops)
*/

/*
class Cars {
    constructor(reg) {
        this._regnumber = reg;
        this._hours = 0;
        this._charged = 0.00;
    }

    get regnumber() {
        return this._regnumber;
    }
    get hours() {
        return this._hours;
    }
    get charged() {
        return this._charged;
    }
    totalHours() {
        this._hours++;
        this._charged +=1.50;
    }
}

const pay = (registration, hr) =>{
    const car = new Cars(registration);
    for (i =0; i < hr; i++) {
        car.totalHours();
    }
    return `${car._regnumber} needs to pay £${car.charged} for ${car.hours} hours.`;
}
console.log(pay("AF64FNK", 8));
*/


//day 3----------------------------------------------
//const sayamsFunc = require("./functions")

//console.log(sayamsFunc.add(1,2))

//destrucutre
//... = this is considered a spread operator - which stores everything inside the object(iterating through, because we have 'minus' left , it will store)

/*
const {add,name, ...rest} = require("./functions")


let songs = [
    "blue: chico",
    "red: nino",
    "yellow: pipo"
]
let first, second, others

[first, second, ...others] = songs
console.log(first)

console.log(add(1,2))
console.log(name)
console.log("this is rest:", rest)

*/




//const sayamsMinusFunc = require("./functions")

//console.log(sayamsFunc.minus(5,3))




//modules-------------

/*
const os = require("os")
const fs = require("fs")

let userDetails = os.userInfo().username;

console.log(userDetails)

fs.appendFile("hello there", `hello ${userDetails}`, (error) => {
    if(error) {
        console.log("oops cannot do")
    }
})
*/