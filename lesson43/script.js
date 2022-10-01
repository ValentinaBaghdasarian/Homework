class Univercity{
    name = null
    surname = null
    facultet = null
    constructor(name, surname, facultet){
        this.name = name
        this.surname = surname
        this.facultet = facultet
    }

    getInfo(){
        return this.facultet
    }
}

class Student extends Univercity{
    rating = null
    constructor(name, surname, facultet, rating){

        super(name, surname, facultet)
        this.rating = rating
    }

    getInfo(){
        return `${super.getInfo()}, rating: ${this.rating} `
    }
}

class Lecturer extends Univercity{
    salary = null
    constructor(name, surname, facultet, salary){
        super(name, surname, facultet)
        this.salary = salary
    }

    getInfo(){
        return `${super.getInfo()}, salary: ${this.salary}`
    }
}

let u1 = new Univercity("NPUA","-", "VT");
let s1 = new Student("Anna", "Lee", "VT", 20);
let l1 = new Lecturer("John", "Smith", "IT", 400000);
console.log(u1.getInfo());
console.log(s1.getInfo());
console.log(l1.getInfo());



class Inkup{
    #name = "Mishell"
    surname = "Rayi"
    #print(){
        return this.surname
    }
    _salary = 254687
    let a = 745
}

let obj = new Inkup()
console.log(onj.#print());
console.log(obj.surname);
console.log(obja);