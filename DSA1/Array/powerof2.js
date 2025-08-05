//power of 2
function powerOf(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!=0){
            return false
        }
        n=n/2;//reducng the value of n by half - O(logn)
    }
    return true
}
console.log(powerOf(8))

//another way for finding power of 2 (bitwise operator)
function powerOf(n){
    if(n<1){
        return false
    }
    return (n &(n-1))==0
}