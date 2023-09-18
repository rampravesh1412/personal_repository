let arr = [
    {
        userName : "Hnxx Boy" , 
        userAge : 17,
        userQualification : "BE"
    },
    {
        userName : "Star Boy" , 
        userAge : 18,
        userQualification : "12th"
    },
    {
        userName : "Swag op" , 
        userAge : 19,
        userQualification : "BE Final Years"
    }
]
 
  setTimeout(() => {
    arr.forEach((val , ind)=> {
        console.log(ind , val)
    })

  },1000)

  setTimeout(() =>{
    arr.forEach((val , ind) => {
        console.log(ind , val ," before" )
    })

  } , 3000)