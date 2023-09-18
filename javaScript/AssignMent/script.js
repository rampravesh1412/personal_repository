const arr = [];
function arrayOfFun(userName, userRoll, userAdd) {
  let obj = {
    userName: userName,
    userRoll: userRoll,
    userAdd: userAdd,
  };
  
  arr.push(obj);
  console.log(arr)

  let converting = JSON.stringify(arr)

  localStorage.setItem("key" , converting)
}

function funcontrol() {
  let userName = document.getElementById("userName").value;
  let userRoll = document.getElementById("userRoll").value;
  let userAdd = document.getElementById("userAdd").value;
  arrayOfFun(userName, userRoll, userAdd);
}
