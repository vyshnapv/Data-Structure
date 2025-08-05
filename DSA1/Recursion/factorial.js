//factorial of a number
//the time complexity is O(n) and space complexity O(n)
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1)
  }
  console.log(factorial(5))

  