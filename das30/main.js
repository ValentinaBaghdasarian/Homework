"use strict"
// // 1․ ռեկուրսիայով գրում եք ֆիբոնաչի ու ֆակտորիալ ալգորիթմները որ իդեալական աշխատեն

//  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

    function fib(n){
        if (n===1) {       // fib(1) , fib(2), fib(3), fib(4), fib(5), fib(6), 
            return [0, 1];  // [0,1], [0,1,1], [0,1,1,2], [0,1,1,2,3], [0,1,1,2,3,5]
        } else {
            let arr = fib(n - 1); //fib(6), fib(5),fib(4),fib(3),fib(2), fib(1)                   
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return arr;
        }
    };
    console.log(fib(7));


    function factorial(n){
        return n < 2 ? 1:n * factorial(n-1);
            
        // factorial(6) = 6 * factorial(5)          /720
        //                      5 * factorial(4)        /120
        //                          4 * factorial(3)         /24
        //                             3 * factorial(2)      /6
        //                               2 *factorial(1)     /2
        //                                   factorial(1)   /1
    }
    console.log(factorial(6))


// 2․ ստեղծում եք 5 հատ ռեկուրսիա, տարբեր թեմաներով (լուփեր, անունների գեներացում և այլն)
//    կարևորը իրար չպետք ա նման լինեն

    //1. Գտնելերկու դրական թվերի ամենամեծ ընդհանուր բաժանարարը


    function maxBajh(a, b) {
        if (b === 0) {
            return a;
        }
        return maxBajh(b, a % b);
    };
    console.log(maxBajh(6936, 1200));

    
    //2. Գրել ծրագիր (x, y) տիրույթում գտնվող ամբողջ թվերը ստանալու համար :

    function integers(x,y){
        if(x === y-1){
          return [];
      }else{
          let a = integers(x+1,y);
        a.unshift(x+1);
        return a;
      } 
    }
    console.log(integers(3,19));

    // 3․ Գրեք ծրագիր՝ զանգվածի ամբողջ թվերի գումարը հաշվարկելու համար։

    function sum(i,arr){
        if(i === arr.length){//i===6
          return 0; // 0 + 1 + sum()
      } else{
          return arr[i] + sum(i+1,arr); 
      }
    }
    console.log(sum(0,[1, 2, 3, 4, 5, 6,10]));
    
    //4. Հաշվել բնական թվի գումարը մինչև n

    
    function allSum(n){
        return n == 0 ? 0 : n + allSum(n - 1);
    }
    console.log(allSum(10));


    //5 Տպել մինչև n բոլոր թվերը

    function countDown(fromNumber, n) {
        if(fromNumber === -50){
          return
      }
        console.log(fromNumber);
        countDown(fromNumber-1);
    }
    
    countDown(3, -50);



// 4․ HTMLում ստեղծում եք մի հատ ինփութ ու տակից անուններ եք գրում, ու նենց եք անում որ տպելու ժամանակ 
//    ցույց տա մենակ էն անունները որոնք գրվում են ինփութի մեջ, թեկուզ տառերով, պետք ա օգտագործեք search մեթոդը


const names = ["William", "Sophia", "Mia", "Henry", "Oliver", "Evelyn", "Amelia", "Isabella", "Benjamin", "Lucas",
"Emily", "Aria", "Penelope", "Chloe", "Layla", "Mila", "Nora", "Hazel", "Madison", "Ellie", "Lily", 'Nova', "Isla", 
"Grace", "Violet","Aurora", "Riley", "Emilia", "Victoria", "Hannah", "Addison", "Lucy", "Eliana", "Everly", "Lillian",
"Paisley", "Elena", "Naomi", "Maya", "Natalie", "Kinsley", "Delilah", "Sophie", "Hailey","Caroline", "Allison", 'Gabriella', "Anna", "Serenity"];
const input = document.querySelector("#input");
const div = document.querySelector("#name");

input.style.cssText = `
    height: 30px;
    background: #FFFFFF; 
`

function nam(){
    names.forEach(item =>{
        div.insertAdjacentHTML("afterbegin",`<p>${item}</p>`);
    });
}
nam();

input.addEventListener("keyup", e =>{
    let point = 0;
    debugger
        for(let i = 0; i < names.length; i++){
            if(names[i].trim().toLowerCase().search(input.value.toLowerCase()) !== -1 && input.value !== "." && input.value !== ""){
                div.textContent = `${names[i]}`;
                div.style.cssText = `
                    color : #006262;
                    font-size: 35px;
                    margin: 10px;
                `;
                point++;
            }
        }

    if(point === 0){
        div.style.cssText = `
                    color : red;
                    font-size: 25px;
                    margin: 10px;
                `;
        div.textContent = "Ձեր փնտրած անունը չի գտնվել";
        input.addEventListener("keyup", e =>{
            if(input.value === ""){
                div.style.color = "black";
                div.style.fontSize = "16px"
                div.textContent = "";
                nam();   
        }
        });
    }  
})




// 3․ insertAdjacentHTML + insertAdjacentElement + insertAdjacentText մեթոդներն եք օգտագործում 
//    ու դնում եք տարբեր դիրքերում

const date = new Date()

document.querySelector("#globalDiv").insertAdjacentHTML("afterbegin",`
    <div style = "font-family : Areal; color: #9457EB">
        <h1>Homework 30</h1>
        <h3>HTML-ում ստեղծել input և անունները, որոնք գրվում են input-ում ելքագրել էկրանին</h3>
    </div>
`);
const h2 = document.createElement("h2");
document.querySelector("#globalDiv").insertAdjacentElement("beforebegin",h2);
h2.insertAdjacentText("afterbegin", `
    ${date.getDate()} /
    0${date.getMonth()+1}/
    ${date.getFullYear()}
`);

const divTime = document.createElement("div");
divTime.id = "time";
h2.insertAdjacentElement("beforeend",divTime);


const h4 = document.createElement("h4");
divTime.insertAdjacentElement("beforeend",h4);

setInterval(() =>{
    divTime.innerHTML = "";
    divTime.innerHTML = time(new Date().getHours(),new Date().getMinutes(),new Date().getSeconds());
}, 1000);

function time(hours, minutes, seconds){
    return ` <h4>${hours}:${minutes}:${seconds}</h4>`
}
// h4.insertAdjacentText("afterbegin", `
//     ${new Date().getHours()}:
//     ${new Date().getMinutes()}:
//     ${new Date().getSeconds()}
    
// `)


