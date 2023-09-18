// ●	JavaScript Program to Find the Largest Among Three Numbers

let largestNum = () => {
    let a = parseInt(prompt("Enter the Number"));    
    let b = parseInt(prompt("Enter the Number"));
    let c = parseInt(prompt("Enter the Number"));

    if(a>b & a>b){
        console.log(`the largest Number is ${a}`);
    }else if(b>a & b>c ){
        console.log(`the largest Number is ${b}`);
    }else if(c>a & c>b ){
        console.log(`the largest Number is ${c}`);
    }

}

largestNum();
