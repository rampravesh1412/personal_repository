// // write code to remove duplicate  from array
// let a = [1, 4, 2, 5, 22, 45, 7, 7, 2, 2, 6];

// let data = a.sort((a, b) => {
//   return a - b;
// });

// console.log(data);
// let temp = [];

// for (let i = 0; i < data.length; i++) {
//   if (data[i] == data[i + 1]) {
//     continue;
//   } else {
//     temp.push(data[i]);
//   }
// }

// console.log(temp);

// Remove duplicate from [a,b,c,a,b,c,d]

// let arr = ["a", "b", "c", "a", "b", "c", "d"];
// let sortArr = arr.sort();
// // console.log(sortArr);
// let tempStr = [];
// for (let i = 0; i < sortArr.length; i++) {
//   if (sortArr[i] == sortArr[i + 1]) {
//     continue;
//   } else {
//     tempStr.push(sortArr[i]);
//   }
// }
// console.log(tempStr);

// let isNumber = 24;
// if (isNumber == 1) {
//   console.log("1 is neither odd or nor even");
// } else if (isNumber % 2 == 0) {
//   console.log("it is even number");
// } else {
//   console.log("it is odd number");
// }

// let a = prompt("enter a month number please.");

// switch (a) {
//   case 1:
//     console.log("jan");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("apr");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("jun");
//     break;
//   case 7:
//     console.log("july");
//     break;
//   case 8:
//     console.log("aug");
//     break;
//   case 9:
//     console.log("sep");
//     break;
//   case 10:
//     console.log("oct");
//     break;
//   case 11:
//     console.log("nov");
//     break;
//   case 12:
//     console.log("dec");
//     break;
// }

// const currDate = new Date();
// let currHour = currDate.getHours();
// console.log(currHour);
