function fun1(userName , RollNum){
    this.userName = userName;
    this.RollNum = RollNum
}



function fun2(userName , RollNum ,collegeName , department){
    fun1.call(this ,userName , this , RollNum);
    this.collegeName = collegeName;
    this.department = department;

}

const obj = new fun2("Rampravesh Yadav" , "81" , "GCT" , "CSE")
console.log(obj)