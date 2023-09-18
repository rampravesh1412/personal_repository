let arr = [[1] , [2,3] , [4] , ["rahul"]];
 
let arrrr = arr.reduce(function(x , y){
    return x.concat(y);
},[]
)

console.log(arrrr)