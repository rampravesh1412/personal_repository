let tableNum = parseInt(prompt("Enter the table Number"));

for(let i = 1; i<=10 ; i++){
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);

    document.getElementById("table").innerHTML += `${tableNum} x ${i} = ${tableNum * i} <br>` 
}