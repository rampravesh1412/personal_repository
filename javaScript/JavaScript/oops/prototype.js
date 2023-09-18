// lets crate one constractor

function Person(fName , LName , age , Salary){
    this.userFirstName = fName;
    this.userLastName = LName;
    this.userAge = age;
    this.userSalary = Salary;
};

// lets we are added of one function method help of prototype

Person.prototype.fullName = function(){
    console.log(this.userFirstName + " "+ this.userLastName);
};

let person1 = new Person("Rampravesh" , "Yadav" , "19" , "40,000");

console.log(person1);
console.log(person1.fullName());


 // lets we are connect eachother help of (__prot__)

 Person.prototype__proto__ = Object.create(NewConstrutor.prototype);


// lets create once again one constractor

  function NewConstrutor(deadAge){
    this.UserDeadAge = deadAge;

  }

  NewConstrutor.prototype.breath = function(){
    console.log("breathing .....");
  }

  let userMan = new NewConstrutor(80);

  console.log(userMan);
  console.log(person1.breath);
  console.log(userMan.fullName);