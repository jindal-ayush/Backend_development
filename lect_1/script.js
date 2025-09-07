let arr =[1,2,3,4];

// arr.forEach(function(val){
//     console.log(val + " hello" );
// })

// let ans = arr.map(function(val){
//    return val*3;
// })
// console.log(ans);

let ans = arr.filter(function(val){
     if(val>3)
     {
        return true;
     }

})
console.log(ans);