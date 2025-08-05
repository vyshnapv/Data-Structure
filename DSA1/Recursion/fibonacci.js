//fibonacci series
//time complexity is O(2n) and space complexity is O(n)
function fibonacci(n){
    if(n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))
