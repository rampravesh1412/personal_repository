let pathUrl = fetch('./jsonfile.json');
pathUrl.then((val) => {
    return val.json();
}).then((val1) => {
    // console.log(val1)
    for (const arrIndex of val1) {
        console.log(arrIndex)
        console.log("Id-->  " +arrIndex["id"])
        console.log("title-->  " +arrIndex["title"])
        console.log("body-->  " +arrIndex["body"])
             
    }
}).catch((val) => {
    console.log("Throw the error")
})
