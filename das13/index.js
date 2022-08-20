// const primeNumber = function(a,b){
//     let result;
//     let newArr = [];
//     while(a <= b){
//         let i = 2;
//         while(i < a){
//             if(a % i !== 0) result = a
//             else {result = undefined; break}
//             i++
//         }
//         if(result !== undefined) newArr.push(result);
//         a++
//     }
//     return newArr
//     }
//     console.log(primeNumber(1,38))


// const newArray = function(arr) {
//     let n = 0;
//     for (let i = 1; i < arr.length; i++) {
//       if (2 ** (i - 1) < arr[i] && arr[i] < 2 ** (i + 1)) {
//         n++
//       }
//     }
//     return n
//   }
//   console.log(newArray([5, 14, -3, 8, 9, 2, -13, 19]))



// const newArr = function(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(newArr([0, -9, 4, 2, -6, 0, -4, 1, 7]))



// const newArray = function(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//       arr[i] !== "f" ? result.push(arr[i]): result.push(arr[i], arr[i])    
//     }
//    return result
//   }
//   console.log(newArray([1, 2, "f", "a", 5, "f", 4,"f"]))

// const count = function(arr) {
//   let newArr=[];
//   for (let i = 0; i < arr.length; i++) {
//    if(arr[i] > "k") newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(count([2, "b", "rl", "d", 0, "b", "s", -1, "b", "s"]));


// ----------------------------------


// function count(arr) {
//   let newArr=[];
//   for (let i = 0; i < arr.length; i++) {
//    if(i % 2 !== 0) newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(count([2, "b", "rl", "d", 0, "b", "s", -1, "b", "s"]));


// function sumAccount(arr){
// 	let sum = 0;
//   for(let i = 0; i< arr.length; i++){
//   	if(arr[i] % 7 === 0) sum += arr[i]
//   }
//   return sum
// }
// let x = sumAccount([12, 7, 0, -1, 4, 271]);
// let y = sumAccount([2, 21, -1, -3, 49])
// console.log(x + y)


// function sumAccount(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]**2
//     }
//     return sum
//   }
//   console.log(sumAccount([2, 0, -1, -2]));


// function count(arr) {
//     let q = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] === "a") q++
//     }
//     return q
//   }
//   console.log(count([2, "hello", "a", 0, "anna", "a", -1, -2]))


// function count(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === "s") sum += i;
//       }
//     return sum
//   }
//   console.log(count([2, "b", "s", 0, "b", "s", -1, "b", "s" ]))


// --------------------------------------------------

// function count(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === "s") return arr[i];
//      else if(arr.length/2 > 7) return arr.length + 1;
//      else return arr[i]
//     }
//    }
//    console.log(count([2, "b", "s", 0, "b", "s", -1, "b", "s" ]))


// ------------------------------------------------

// const date = function (param1, param2){
//     if(typeof(param1) === "number" && typeof(param2) === "number"){
//             return param1 + param2
//        }
//    }
   
//    function mig(num){
//        return date(1, 0) - num
//    }
//    console.log(mig(5))
   
// ----------------------------------------

// const oddIndex = arr =>{
//     const newArr = [];
//     for(let i = 0; i< arr.length;i++){
//             if(i % 2 !== 0) newArr.push(arr[i])
//     }
//     return newArr
//     }
// console.log(oddIndex([5, 0, -7, 14, 6, 0, -1, 0, -21]))


const myArrowFun = (x,y) => {if(x !== y ) return true ; return false} 
console.log(myArrowFun(5, "5"))


const arrowFun = x => x % 2 
console.log(arrowFun(5))


const factorial = x =>{
    let p = 1;
    let i = 1;
    while(i <= x){
        p *= i
        i++
    }
    return p
}

console.log(factorial(4))


const count = (x, y) => {
    const arr = [];
    while(x >= y){
        if(x % 7 === 0) arr.push(x)
        x--
    }
    return arr
}
console.log(count(14, 5))