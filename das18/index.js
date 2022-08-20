const student = {
    name:"Lilly" ,
    surname: "Bell",
    age: 20,
    adress: "Armenia",
    class: 4,
    hobby: {1:"drawing", 2:"photography", 3:"run"},
    domesticAnimals: {type: "dog", name: "Def", age: 1 },
    subjects: {1:"matematics", 2:"economics", 3:"informatics"},
    friends: {name: "Lucy", age: "20"},
    grades: {matematics: 20,economics: 17, informatics: 19},
};
for(let item in student){
    if(typeof student[item] === "object"){
        for(let item2 in student[item]){
            console.log(`${item} { ${item2}: ${student[item][item2]} }`)
        }
    }else{
          console.log(`${item}: ${student[item]},`)
    }
  
}

const myArr = [0, -7, "hi" , [12, [0]], 9, -3, ["str", [1, -8]], ["age", [20]], [7], ["sity", ["name", ["Yerevan"]]]];
for (let i in myArr){
    console.log(myArr[i], i);
};

for (let i of myArr){
    console.log(i)
}

const obj = {
    a(item, val, a, b){
       return [item, val / 2, a ** 2, b - a]
    }
}
const {a} = obj;
console.log(a(7, 2, 3, 24));

const arr = [
   function astichan(item, num){
    return item ** num
}]
const [astichan] = arr;
console.log(astichan(7, 3))
