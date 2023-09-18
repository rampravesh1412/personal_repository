let crtPromise = new Promise((resolved, reject) => {
  let something = true;
  if (something) {
    setTimeout(() => {
      resolved("I am fulfiled the promise");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("I am rejection of promise");
    }, 2000);
  }
});

crtPromise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// lets try to fetch help of promise

let fetchData = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(fetchData);

fetchData
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  })
  .catch((err) => {
    setTimeout(() => {
      console.log("err");
    }, 2000);
  })
  .finally(() => {
    setTimeout(() => {
      console.log("We are complete the task");
    }, 2000);
  });


async function nwData() {
  try {
    const someVar = await fetch("https://jsonplaceholder.typicode.com/posts");
    const anotherVar = someVar.json();
    console.log(anotherVar);
  } catch (error) {
    console.log("e" + error)
  }
}
nwData();
