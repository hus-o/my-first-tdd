function FizzBuzz(n){
    for (let i = 0; i <= n; i++){
        if (n % 15 === 0){
            return "Fizzbuzz";
        }
        else if (n % 3 === 0){
            return "fizz";
        }
        else if (n % 5 === 0){
            return "buzz";
        }
        else{
            return n
        };
    };
};
console.log(FizzBuzz(20))