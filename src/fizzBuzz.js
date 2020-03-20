function FizzBuzz(n){
    if (n % 15 === 0){
        return "Fizzbuzz"
    }
    else if (n % 3 === 0){
        return "fizz";
    }
    else if (n % 5 === 0){
        return "buzz";
    }
    else{
        return n;
    };
};