let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    // console.log(sum);
    System.out.println(sum);
    
    document.getElementById("demo").innerHTML += sum + "<br>";
}
