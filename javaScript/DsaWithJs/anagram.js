// Anagram means ======   yadav ----> aayvd

// let str1 = "yadav";
// let str2 = "aayvd";

// we can do inbuilt method

// let strr1 = str1.split("").sort().join("");
// let strr2 = str2.split("").sort().join("");

// if(strr1 == strr2){
//     console.log("It is Anagram")
// }else{
//     console.log("It is not Anagram")
// }

// -----------> Another way


function annaFun(str1 , str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = {};
  for(let letter of str1){
    count[letter] == (count[letter]);
    console.log(count[letter]);
  }
}
annaFun("yadav" , "aayvd" );

