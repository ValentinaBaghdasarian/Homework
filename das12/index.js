// function point(arr) {
//     let n = 0;
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) n++
//       }
//       return n
//     }
//     console.log(point([-6, 2, 7, 5, 7]))



// function doubleTheNumbers(arr){
//     for(let i =0; i < arr.length; i++){
//         arr[i] = arr[i] * 2
//     }
//     return arr
// }

// console.log(doubleTheNumbers([5, -3, 4, 4.5, -6]))


// function sumTheNumbers(arr){
//     let sum = 0;
//     for(let i =0; i < arr.length; i++){
//        sum += arr[i]
//     }
//     return sum
// }

// console.log(sumTheNumbers([5, -3, 4, 4.5, -6]))


// function arrRevers(arr) {
//     let max = Infinity;
//        for(let i = 0; i < arr.length; i++){
//          if(arr[i] > max){
//            max = arr[i]
//        }
//      }
//      return max
//    }
// console.log(arrRevers([-3, -90, 2, -150, 4, -5, -80]))


// function fib(arr){
//     let t;
//     for(let i = 2; i < arr.length; i++){
//         arr[i] !== arr[i-1] + arr[i - 2] ? t = false : t = true;
//     }
//     return t
// }
// console.log(fib([0, 1, 1, 2, 3, 5, 8, 13]))


// function arrRevers(arr) {
//     let i = 0;
//     let t;
//     let k = arr.length - 1;
//     while (i < arr.length / 2) {
//       t = arr[i]
//       arr[i] = arr[k];
//       arr[k] = t
//       k--
//       i++
//     }
//     return arr
//   }
//   console.log(arrRevers([-3, 90, 20, 4, -5, 80]))

// function factorial(num){
//     let p = 1;
//     let i = 1;
//     while(i <= num){
//         p *= i
//         i++
//     }
//     return p
// }

// console.log(factorial(4))

// let x = 3;
// let y;
// while(x < 8){
//     y = (x + 1)**2;
//     x ++;
//   console.log(y, x)
// }

// let x = -5;
// let y;
// while(x < 5){
// 	if(x > 0){
//   	y = x**2 + 4 * x**8
//  } else{
//   	y = 0
//   }
//   console.log(y, x)
//   x += 2;
// }


// let n = 6;
// let mult = 1;
// let i = 0;
// while (i <= n){
// 	if(n % i === 0){
//   mult *= i
//   }
//   i++
// }
// console.log(mult)


// let a = 5;
// let i = 0;
// do{
//   console.log(a++)
// } while(i > a)