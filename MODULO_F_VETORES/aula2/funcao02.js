function recursion(num){
    if (num == 1){
        return 1
    }else{
        let number = num * recursion(num -1)
        return number
    }
}

console.log(`${recursion(5)}`)