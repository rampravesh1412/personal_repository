// array

const arr = [1,2,3,4,5,6,7];
console.log(arr);

// what is use of     ----->(push method)

const arr1 = arr.push(10);
console.log("hello" + arr1);

// what is use of     ----> (pop method)

const arr2 = arr.pop(1);


// what is use of ---->  (shift method)

const arr3 = arr.shift(1);
console.log(arr3);


//// what is use of ---->  (unshift method)

const arr4 = arr.unshift(10);
console.log(arr4);


// what is use of concat  ----->  (concat)

const arr5 = [8,9,10,11,12];
const arr6 = [13,14,15,16];

const arr7 = arr5.concat(arr6);
console.log(arr7);

// what is use of reverse  ----->  (reverse)


const arr8 = arr7.reverse(9);
console.log(arr8)

// what is use of indexof  ----->  (indexof)


const arr10 = arr6.indexOf(15);
console.log(arr10);

const array = [2, 9, 9, 5];
const ar11 = array.indexOf(5); // 0
console.log(ar11);
// array.indexOf(7); // -1
// array.indexOf(9, 2); // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0

// what is use of slice  ----->  (slice)

const array5 = [8,9,10,11,12,13,14,15,16];
const array6 = array5.slice(2,5);
console.log(array6);

// what is use of splice  ----->  (splice)

const array7 = [8,9,10,11,12,13,14,15,16];
const array8 = array7.splice(9, 0, 20);
console.log(array8);

 




