// Տնային 21

// 1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես forEach-ը

// 2. ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով

// 3. ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով

// 4. ստեղծել ֆունկցիա, որը կաշխատի split-ի նման (տողը կվերցնի, կկտրի կդարձնի զանգված)


// 🔥 Ոչ պարտադիր / Բարդ
// 5. ստեղծել ֆունկցիա SORT անունով, որը կաշխատի այնպես ինչպես SORT ալգորիմթը



// 1

function myForEach(arr,func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i],i);
    }
}
myForEach([1, 2, 3, 4,], (item, i) => console.log(item, i));


// 2

// method 1 function

const computer = {
    manufacturer: "Dell",
    model: "Dell Inspiron 7566-0473",
    processor: "Core i5-6300HQ",
    processorFrequency: "8GB RAM",
    maximumRam: "16 GB" 
};

const myComputer = computer;
myComputer.maximumRam = "32 GB";

const myCopyComputer = myCompObj(computer);
computer.maximumRam = "64 GB";


console.log(myComputer);
console.log(computer);
console.log(myCopyComputer)

function myCompObj(copyComputer){
    const myComputerObject = [];
    for(key in copyComputer){
        myComputerObject[key] = copyComputer[key];
    }
    return myComputerObject;
}

//method 2 assign

const copy2Computer = Object.assign({},computer);
computer.processor = "Core i3 10TH GEN";
console.log(copy2Computer);
console.log(computer);


const text = {
    a: "ստեղծել օբջեքթ ու քոփի անել"
};

const newText = {
    b : "ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով"
};

console.log(Object.assign(text, newText));


//method 3 spread


const aObj = {
    a: 14,
    b: 75
}

const bObj = {...aObj};
aObj.a = 74512;
console.log(aObj);
console.log(bObj);


// 3

// method 1 function

const arr = ["string", "text", 2, -1, "str"];
const newArr = arr;
newArr[3] = 5;
newArr.push("newItem");
console.log(arr);
console.log(newArr);

const newGlobalArray = copyArray(arr);
arr.pop();
arr.push("newString");
console.log(arr);
console.log(newGlobalArray);

function copyArray(globalArr){
    const newCopyArr = [];
    for(i in globalArr){
        newCopyArr[i] = globalArr[i];
    }
    return newCopyArr;
}

// method 2 slice

const newArrSlice = arr.slice();
console.log(newArrSlice);

//method 3 spread

const newArrSpread = [...arr];
arr.push(1, 2, 3);
console.log(arr);
console.log(newArrSpread);

// 4

function mySplit(text,symbol){
    const arr = [];
    let j = 0;
    for(let i = 0; i < text.length; i++){
        if(symbol === ""){
            arr.push(text[i])
        }else if(text[i] === symbol){
      	arr.push(text.slice(j,i));
        j = i+1;
      }else if(i === text.length-1){
      	arr.push(text.slice(j))
      }
    }
    return arr;
}
console.log(mySplit("ստեղծել ֆունկցիա, որը, կաշխատի split-ի նման` տողը կվերցնի, կկտրի կդարձնի զանգված",""));



// 5 

function mySort(arr,func){
	let k;
  for(let i = 0; i < arr.length;i++){
  	for(let j = i+1; j < arr.length; j++){
    	if(func(arr[i], arr[j]) > 0){
      	k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
    }
  }
  return arr;
}
console.log(mySort([-10,8,1, 12, 1000,4, 6,7], (a,b) => a - b));