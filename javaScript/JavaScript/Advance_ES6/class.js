class User{
    constructor(userName , UserPassWord , Uniqid){
        // console.log("My ek constructor hu");
        this.userName = userName;
        this.UserPassWord = UserPassWord;
        this.Uniqid = Uniqid;
    }

    userNameFun(){
        return this.userName;
    }

    UserPassWordFun(){
        return this.UserPassWord;
    }

    UniqidFun(){
        return this.Uniqid;
    }

    static newUnique(){
        console.log("hm ek unique static method hu");
    }
}


const UserOfUser = new User();
// console.log(UserOfUser.userNameFun())
// console.log(UserOfUser.UserPassWordFun())
// console.log(UserOfUser.UniqidFun())


// lets create new class

class Student extends User{

    constructor(userName , UserPassWord , Uniqid  , stdId , stdClg , stdBranch){
        super(userName , UserPassWord , Uniqid);
        this.stdId = stdId;
        this.stdClg = stdClg;
        this.stdBranch = stdBranch;

    }

    studentId(){
        return this.stdId;
    }

    studentClg(){
        return this.stdClg;
    }

    studentBranch(){
        return this.stdBranch;
    }


}

const studentOfStudent = new Student("Rampravesh" , "Rpk@something" , 81 , 111 , "GCT" , "CSE");

console.log(studentOfStudent.userNameFun());
console.log(studentOfStudent.UserPassWordFun());
console.log(studentOfStudent.UniqidFun());
console.log(studentOfStudent.studentId());
console.log(studentOfStudent.studentClg());
console.log(studentOfStudent.studentBranch());

User.newUnique()     //static access help of class name
Student.newUnique()