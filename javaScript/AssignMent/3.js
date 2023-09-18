function formFun() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;


  let setFirstName = localStorage.setItem("firstName" , firstName);
  let setLastName = localStorage.setItem("lastName" , lastName);
  let setEmail = localStorage.setItem("email" , email);


  let getFirstName = localStorage.getItem("firstName");
  let getLastName = localStorage.getItem("lastName");
  let getEmail = localStorage.getItem("email");
  console.log(getFirstName);
  console.log( getLastName);
  console.log(getEmail);


 


    if(getFirstName != "Rampravesh" || getLastName != "Yadav" || getEmail != "5401rpky@gmail.com" ){
        document.body.style.backgroundColor = "red";
        document.getElementById("data1").innerHTML = "Data Will be not matched";
      // alert("your data will be Not matched");
    }else if(getFirstName == "Rampravesh" && getLastName == "Yadav" && getEmail == "5401rpky@gmail.com" ){
      document.body.style.backgroundColor = "green";
      document.getElementById("data1").innerHTML = "Data Will be matched";
      // alert("your data will be matched");
    }
}

