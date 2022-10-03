function methodsOfArray(arr){
    arr.forEach((item, i) => {
    console.log(`${i}: ${item}`);
    } );
    let boolArr = arr.filter(item => typeof(item) === "boolean");
    let someMethods = arr.filter(item => typeof(item) === "number").
                        map(item => item + 2).
                        filter((item, i) => i % 2 !== 0).
                        reduce((item1, item2) => item1 + item2, 3);

    let onlyNumber = arr.filter(item => typeof(item) === "number");
    return [...onlyNumber,...[..."1257"].map(Number)].
            filter((item, i) => i % 2 === 0).
            reduce((sum, item) => sum * item, 1) ;

}
console.log(methodsOfArray([1, 2, true, 42, "Michel", false, 25]));



//2
const arr = [{
    name: "Michel",
    age: 18,
    student: true
}, 
{
    name: "Joe",
    age: 17,
    student: true
},
{
    name: "Hellen",
    age: 21,
    student: false
},
{
    name: "Sally",
    student: false
}, 14, 25, 67, -91, true, false, "Alina"];


function someMethodsOfArray(arr){
    arr.forEach((item, i) => console.log(`Index ${i}: Item ${item}`));
    return arr.filter(item => typeof(item) === "object").
    filter(item => item?.age < 20).
    every(item => item?.name);
    return arr.some(item => item?.age === 18);
    return arr.find(item => item?.name[0] === "M");
    return arr.filter(item => typeof(item) === "string").
    map(item => item.toUpperCase());

}
console.log(someMethodsOfArray(arr));



//forEach

function myForEach(arr,fn){
    for(let i = 0; i < arr.length; i++){
        fn(arr[i],i);
    }
}
myForEach([1,5,7,8], (a, b) => console.log(b, a));


//map

function myMap(arr, fn){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i],i);
    }
    return arr
}
myMap([1,2,3,4],(a,b) => console.log(a**2));

// reduce

function myReduce(arr, fn, result){
    for (let i = 0; i < arr.length; i++) {
        
      result = result !== undefined ? fn(result,arr[i]): arr[i];
        
    }
    return result
}
console.log(myReduce([1,2,4,5], (a, b) => ( a * b),0)); 

// filter

function myFilter(arr, fn){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i],i))
        newArr.push((arr[i]));
    }
    return newArr
}
console.log(myFilter([1 , 4, 5 , 7], (item, i) => i % 2 === 0));