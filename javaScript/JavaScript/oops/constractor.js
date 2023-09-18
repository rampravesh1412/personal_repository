

function Constractor(firstName , LastName , Age , MoNum){
    this.userfirstName = firstName;
    this.userLastName = LastName;
    this.userAge = Age;
    this.userMobileNum = MoNum;
    this.funVal = function(){
        console.log("Hello");
    }

    // this.changeAge = function(newAge){
    //     this.newAgeeee = newAge;
    // }
}


    let person1 = new Constractor("Rampravesh" , "Yadav" , 19 , 62035 );

    person1.userAge = 18;

    Constractor.prototype.newAgeeee = 20;



    console.log(person1);
    console.log(person1.newAgeeee);