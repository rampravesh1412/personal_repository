sessionStorage.setItem('userName' , 'RPK_Yadav');
sessionStorage.setItem('insta' , 'swag_king_432');
 sessionStorage.setItem('fb' , 'mr_unixx');
sessionStorage.setItem('nothing' , 'kuch nhi bhai');

let firstLclSt = sessionStorage.getItem("userName");
let secondLclSt = sessionStorage.getItem("insta");
let thirdLclSt = sessionStorage.getItem("fb");
let fourthLclSt = sessionStorage.getItem("nothing");


console.log(firstLclSt);
console.log(secondLclSt);

sessionStorage.removeItem("nothing");

