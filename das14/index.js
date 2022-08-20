
// function spaces(num){
//     let  space = "";
//     for(let i = 0; i < num; i++){
//            space += " "    
//     }
//     return space
// }

// const { stringify } = require("mocha/lib/utils");

// function draw(num){
//     let result = "";
//     for(let i = 0; i < num; i++){
//            result += "*"    
//     }
//     return result
// }

// let myFun = function(height){
//     let str = "";
//     let button = height/2
//    for(let i = 1; i < height; i += 2){
//     str += spaces(button) + draw(i) + "\n";
//     button--
//    }
//      return str     
    
// }   
//     console.log(myFun(13))

// ----------------------------------------
  
// let arr = [-5, 1, 0, -2, 4];
// let k;
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(i === j) continue;
//         if(arr[i] < arr[j]){
//             k = arr[i];
//             arr[i] = arr[j];
//             arr[j] = k;
//         }
//     }
// }
// console.log(arr)


// let arr = [];
// for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 3; j++){
//      for(let x = 0; x < 2; x++){
//         arr.push(x)
//      }
//     }
// }
// console.log(arr)


// for(let i = 0; i < 2; i++){
//     for(let j = 0; j <= 1; j++){
//         for(let x = 0; x < 4; x++){
//             for(let y = 0; y < 5; y++){
//                 console.log(j)
//             }
//         }
//     }
// }


// let i = 0;
// let j = 0;
// while( i < 3){
//     while(j < 2){
//         console.log(i)
//         j++
//     }
// i++
// }

// let j = 0;
// let x = 0;
// let i = 0;
// while( i < 7){
//     while(j < 7){
//         while(x < 7){
//             console.log(i,j)
//             x++
//         }
//     j++
//     }
// i++
// }



// let j = 0;
// let i = 0;
// let x = 0;
// let y = 0;
// while( i < 3){
//     while(j < 2){
//         while( x <= 1){
//             while(y < 4){
//                 console.log(i, y)
//                 y++
//             }
//         x++
//         }
//     j++
//     }
// i++
// }


// --------------------------------------------------

// const calculator = (oper, num1, num2) => {
// 	switch(oper){
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "/":
//             return num1 / num2;
//         case "*":
//             return num1 * num2;
//         case "%":
//             return num1 * num2 / 100; 
//         default: return"error";
//     }
// }
// console.log(calculator("%", 120, 20))




// function rounds(num){
//     let space = "";
//     for(let i = 0; i < num; i++){
//         space += "* "; 
//     }
// return space;
// }

// function spaces(num){
//     let round = "";
//     for(let i = 0; i < num; i++){
//         round += "  ";
//     }
// return round;
// }

// function myRound(height){
// let result = "";
// let but1 = height/2;
//     for(let i = 3; i <= height; i += 2){
//         result += spaces(but1) + rounds(i) + "\n";
//         but1--;
//     }
//     let button = 3;
//     for(let j = height -2; j >= 3; j -= 2){
//         result += spaces(button) + rounds(j) + "\n";
//         button++;
//     }
//     return result;
// }
// console.log(myRound(7));


// const myCar = (year, color,model,) => {
//     if( year === 2018){
//         if(color === "white"){
//             if(model = "A1") return "AUDI";
//             else return "is not on the list";
//         } else return "is not on the list";
//     } else if(year === 2017){
//         if(color === "blue"){
//             if(model === "EDGE") return "FORD";
//             else return "is not on the list";
//         }else return "is not on the list";
//     } else if(year === 2007){
//         if(color === "yellow"){
//             if(model === "GT-R") return "NISSAN";
//             else return "is not on the list";
//         }else return "is not on the list";
//     } else return "There is no such car in our list"
// }
// console.log(myCar(2007, "yellow", "GT-R" ))


// const math = {
//     number1: 4,
//     number2: 7,
//     pow(num1, num2){
//         return num1**num2
//     },
//     sqrt(num1){
//         return num1**0.5
//     },
//     divide(num1, num2){
//         return num1 / num2
//     },

// }
// console.log(math.pow(math.number1,math.number2));
// console.log(math.sqrt(math.number1));
// console.log(math.divide(math.number1,math.number2));



const arr = [ 1, -9, 5, 4,-8, 10];
const arr1 = [];
let k;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      arr.splice(i,1)
    }else arr1.push(arr[i])
}
console.log(arr)





