//find the prime numbers from an array
//so here the time complexity is O(n2) and space coplexity is O(n)
function primeNum(n){
    if(n<=1){
        return false//checking condition - O(1)
    }
    for(let i=2;i<n;i++){//loop - O(n)
        if(n%i==0){
            return false//checking condition - O(1)
        }
    }
    return true;//return result - O(1)
}
const number=[1,3,4,4,5,3,23,5,67,7,24,2]
const filtering=number.filter(primeNum)//filtering all element - O(n)
//const uniquePrimes = [...new Set(numbers.filter(isPrime))];
console.log(filtering)

//prime number true or false
//so here the time complexity is O(n) and the space complexity is O(1)
//if the forloop is for(let i=2;i<=Math.sqrt(n);i++)  this then the time complexity is O(sqrt(n))
function primeNum(n){
    if(n<=1){
        return false//checking condition - O(1)
    }
    for(let i=2;i<n;i++){//loop - O(n)
        if(n%i==0){
            return false//checking condition - O(1)
        }
    }
    return true;//return the result - O(1)
}
console.log(primeNum(4));//print the result-O(1)



