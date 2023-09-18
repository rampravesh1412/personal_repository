// // // Divide and conqour ---->Binary search

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // ===> we want -->  10 value in which index
// let key = 14;
// let start = 0;
// let end = arr.length - 1;

// function binaryFun(arr , start , end) {
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     // console.log(mid)
//     if (arr[mid] == key) {
//       return mid;

//     } else if (arr[mid] < key) {
//        start = mid + 1;

//     } else if (arr[mid] > key){
//        end = mid - 1;

//     }
//   }
//   return -1;
// }

//   console.log(binaryFun(arr , start , end))

// //   // lets try again

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


  function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

console.log(binarySearch(sortedArray , 10))


// lets try once again


