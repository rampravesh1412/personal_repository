// ●	●	JavaScript Program to Check Leap Year

let leapYear = (years) => {
    if(0 >= years){
        console.log("Invalid years")
    }else if(years % 4 ===0){
        console.log("Yes it is leapyears")
    }else{
        console.log("It is not leapyears")
    }

}

leapYear(-5);