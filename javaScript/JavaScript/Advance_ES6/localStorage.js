 localStorage.setItem('userName' , 'RPK_Yadav');
localStorage.setItem('insta' , 'swag_king_432');
 localStorage.setItem('fb' , 'mr_unixx');
localStorage.setItem('nothing' , 'kuch nhi bhai');

let firstLclSt = localStorage.getItem("userName");
let secondLclSt = localStorage.getItem("insta");
let thirdLclSt = localStorage.getItem("fb");
let fourthLclSt = localStorage.getItem("nothing");


console.log(firstLclSt);
console.log(secondLclSt);

localStorage.removeItem("nothing");