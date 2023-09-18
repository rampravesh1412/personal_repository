//this nothing declare  and hardcord value
// {
//     a = 20;
//     b = 25;
//     c = 30;
//     d = a + b + c;
//     console.log(typeof d);
//     console.log(d);
// }

//we are take input some value
{
    // a = + prompt("Enter the a value"); //prompt is string but we are change the num = + then pass prompt 
    // b = + prompt("Enter the b value");
    // c = + prompt("Enter the c value");
    // d = a + b + c;
    // console.log(typeof d);
    // console.log(d);
}


//we are using let hardcored value
// {
//     let a = 44;
//     let b = 44;
//     let c = 44;
//     let d = a + b + c;
//     console.log(d);
// }

//userInput

{
    let a = + prompt("Enter the a value"); //prompt is string but we are change the num = + then pass prompt 
    let b = + prompt("Enter the b value");
    let c = + prompt("Enter the c value");
    let d = a + b + c;
    // console.log(typeof d);
    console.log(d);
    document.getElementById("first").innerHTML= d;
}

//we are using var hardcored value
// {
//     var a = 44;
//     var b = 44;
//     var c = 44;
//     var d = a + b + c;
//     console.log(d);
// }

//userInput

{
    var a = + prompt("Enter the a value"); //prompt is string but we are change the num = + then pass prompt 
    var b = + prompt("Enter the b value");
    var c = + prompt("Enter the c value");
    var e = a + b + c;
    // console.log(typeof d);
    console.log(e);
    document.getElementById('second').innerHTML= "var value is  "+e;

}


//we are using var hardcored value
// {
//     const a = 44;
//     const b = 44;
//     const c = 44;
//     const d = a + b + c;
//     console.log(d);
// }

//userInput

{
    const a = + prompt("Enter the a value"); //prompt is string but we are change the num = + then pass prompt 
    const b = + prompt("Enter the b value");
    const c = + prompt("Enter the c value");
    const f = a + b + c;
    // console.log(typeof d);
    console.log(f);
    document.getElementById('third').innerHTML= "const value is  "+f;

}


