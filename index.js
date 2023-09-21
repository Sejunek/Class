function User(first,last){
this.firstName = first;
this.lastName = last;

};

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const myName = new User("James","Kwon")

console.log(myName.getFullName())