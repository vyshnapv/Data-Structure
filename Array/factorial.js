//factorial of a number
//here the time complexity is O(n) and space complexity is O(1) because it take only small memmory taking for the variable
function factorial(n){
    let factor=1;
    for(let i=2;i<=n;i++){
        factor*=i;
    }
    return factor;
}
console.log(factorial(5))