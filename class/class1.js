class User{
    constructor(first,last){
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const myName = new User("James","Kwon")