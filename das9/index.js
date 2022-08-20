// 1

/*
const parallelogram ={
    sideA: 21,
    sideB: 25,
    cornerAB: 0.5,
    makeres(A, B, a) {
        console.log(A * B * a)
    }
}
parallelogram.makeres(parallelogram.sideA, parallelogram.sideB, parallelogram.cornerAB)
*/


// 2

/*
function quadraticEquation(a, b, c) {
    const D = b ** 2 - 4 * a * c;
    if (D > 0) {
      console.log(-(b + Math.sqrt(D)) / (2 * a), -(b - Math.sqrt(D)) / (2 * a))
    } else if (D === 0) {
      console.log(-b / (2 * a))
    } else {
      console.log(`D = ${D} < 0 => no solution`)
    }
  }
quadraticEquation(1, -6, 5)



let a = 85;
let b = 1;
let c = 7;
if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}


let a = 5;
let b = 1;
let c = -8;
if (a < b && a < c) {
    console.log(a)
} else if (b < a && b < c) {
    console.log(b)
} else {
    console.log(c)
}


let a = 5;
let b = 1;
let c = 6;
if(a === 1 || b === 1 || c === 1){
	console.log(true)
} else {
	console.log(false)
}


let a = 5;
let b = 5;
let c = 21;
if (a <= b && a <= c && b <= c) {
  console.log(a, b, c)
} else if (a <= b && a <= c && c <= b) {
  console.log(a, c, b)
} else if (c <= a && c <= b && a <= b) {
  console.log(c, a, b)
} else if (c <= a && c <= b && b <= a) {
  console.log(c, b, a)
} else if (b <= a && b <= c && c <= a) {
  console.log(b, c, a)
} else {
	console.log(b, a, c)
}


let age = 20;
if(age < 10){
	console.log("Hi")
} else if (age >= 10 && age < 18){
	console.log("Hello")
}	else{
	console.log("greetings")
}



function findAge(name, age) {

  if(age >= 90 && age <= 100){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 80 && age < 90){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 70 && age < 80){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 60 && age < 70){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 50 && age < 60){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 40 && age < 50){
    console.log(`${name} ${age} is old years`)
  }
  else if(age >= 0 && age <40){
    console.log(`${name} ${age} is old years`)
  }
  else{
    console.log(`${name} ${age} is old years`)
  }
}

findAge("John", 1)


function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if(num1 < num2){
        return num2;
    }else {
        return "the numbers are equal";
    }
}

console.log(greaterNum(7, 10))


function helloWorld(lang) {
    if (lang == 'et'){
        return 'Ciao mondo';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}
console.log(helloWorld('en'));



let x = 0;
let y = -1;
let z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}
   */


// 3

/*
const arr = [1, 2, 5, -6]
if (typeof(arr) === "object") {
  if (arr.length === 0) {
    if (arr[1] === undefined) {
      console.log(`arr.length = ${arr.length}`)
    } else {
      console.log(`arr.length = ${arr.length}`)
    }
  } else {
    if (6 > arr.length) {
      if (arr[6] !== arr.length) {
        arr[6] = -3;
        console.log(arr)
      } else {
        console.log(arr.length)
      }
    }
  }
} else {
  console.log(typeof(arr))
}

*/

// 4

/*
const age = 21;
typeof age === "number" ? console.log(true): console.log(false);

age > 40 ? console.log(true): console.log(false);

const arr = [2, 7, 5, 3];
arr.length >= 4 ? console.log(true): console.log(false)

const a = {
    name: "John",
    userName : "Smith",
    age: 22
}
console.log(`${a.age === 22 ? "John is 22 old years": "John how old are you" }`)

console.log(`${a.userName === "John" ? true: false }`)


const person = {
  name: "Adam",
  userName: "Smit",
  myFun(item){
      item === "Adam" ? console.log(`How are you ${person.name} ${person.userName}`):console.log(person.name + person.userName);
  }
}
person.myFun(person.name)


*/