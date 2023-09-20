class User{
    constructor(first,last){
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
};

const myName = new User("James","Kwon");

class SpecificUser extends User{
    constructor( first, last, age ){
        super(first,last)
        this.age = age
    }

};


const myNameSpecific = new SpecificUser("Chris","Kwon",30);

console.log(myName);
console.log(myNameSpecific);