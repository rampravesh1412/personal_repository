let student = `{
    "student" : [{
        "stdName" : "Rpk_yadav",
        "stdAge" : 19
     },

     {
        "stdName" : "Unixx",
        "stdAge" : 18
     },

     {
        "stdName" : "swagOp",
        "stdAge" : 17
     },

     {
        "stdName" : "hereRpk",
        "stdAge" : 16
     }
    ]
}`

let objStdData = JSON.parse(student);

console.log(objStdData);