//print 1 to 20 help of recursion

let funNum = (min , max) => {
    if(min<max){
        console.log(min);
        min++;
        funNum(min , max)
    }

}

funNum(1,20)