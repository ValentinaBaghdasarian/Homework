"use strict";

let data = {
    stone: 12,
    cement: 10
};

function addStone(n){   
    return new Promise((resolve, reject) => {
        let time = parseInt(Math.random() * 10);
        setTimeout(()=>{
        if(data.stone - n > 0){
            resolve(n + " stone added");
            data.stone -= n;
        }else{
            reject("no enough stone");
        }
        }, time);
    });
}

function addCement(n){
    return new Promise((resolve, reject) =>{
        let time = parseInt(Math.random()* 10);
        setTimeout(() => {
            if(data.cement - n > 0){
                resolve(n + " cement added");
                data.cement -= n;
            }else{
                reject("no enough cement");
            }
        }, time);
    });
}

function addWater(n){
    return new Promise((resolve, reject) => {
        let time = parseInt(Math.random() * 10);
        setTimeout(() =>{
            resolve(n + " wather added");
        }, time);
    });
}

function makeHome(n){
    addCement(n)
    .then(result => {
        console.log(result);
        return addWater(n);})
    .then(result => {
        console.log(result);
        return addStone(n);
    })
    .then(result => {
        console.log(result);
    })
    .catch(result => {console.log(result);});
}

makeHome(5);



//Promise.race

const promise1 = new Promise((resolve, reject) => {
    resolve("hello");
});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout( () => resolve("hi"), 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 2000);
});

let result = Promise.race([promise1, promise2, promise3])
.then( result => console.log(result));
