let arr = [1, 1, 2, 5, 1, 2, 7, 8, 9, 8, 4, 4, 9, 8];

// help of predefined method

let newArr = new Set(arr);
console.log(newArr);

// sorting the array

let sortArr = arr.sort();
console.log(sortArr);

// bild the logic and how many uniques Numbers

let contUniqueNum = (array) => {
  if (array.length > 0) {
      let i = 0;
      for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
          i++;
          array[i] = array[j];
        }
      }
      return i+1;
    }
    else{
        console.log("it is invalid array")
    }
};

console.log(contUniqueNum(sortArr))
