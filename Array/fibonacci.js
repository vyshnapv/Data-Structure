//fibonacci sereies get 1 o/p
//here the time complexity is O(n) and space complexity is O(1) because only 2 variables are used no extra memory needed
function fibonacci(n) {
    if (n <= 1){
        return n;//simple comparison nd return - O(1)
    }
    let a = 0, b = 1;//variable initialization - O(1)
    for (let i = 2; i <= n; i++) {//loop - O(n)
        let temp = a + b;//adittion - O(1)
        a = b;//assignment - O(1)
        b = temp;//assignment - O(1)
    }
    return b;//return result - o(1)
}
console.log(fibonacci(-7)); //printing o/p - O(1)


//fibonacci  series get an array
//here the time complexity is O(n) (loop)and space complexity is O(n)(it store ll fibinocci number in n array)
function fibonacci(n){
    let fib=[0,1]//declaring and initializing an array - O(1)
    for(let i=2;i<n;i++){//loop- O(n)
        fib[i]=fib[i-1]+fib[i-2]//array indexing and addition - O(1)
    }
    return fib//returning array - O(1)
}
console.log(fibonacci(7))//pronting output - O(1)\
