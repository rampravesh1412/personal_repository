class person{
    constructor(name , age){
        this.userName = name;
        this.userAge = age;

    }

    sayhello(){
        console.log("Hello baby boy");
    }


}


let person1 = new person("Rampravesh" , 19);
console.log(person1);
person1.sayhello();