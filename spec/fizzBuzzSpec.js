describe("fizzBuzz", function(){
    it("should print 'fizz' when given number divisble by 3", function(){
        expect(FizzBuzz(3)).toEqual("fizz");
    })
    it("should print 'buzz' when given number divisble by 5", function(){
        expect(FizzBuzz(5)).toEqual("buzz")
    })
    it("should print 'Fizzbuzz' when given number divisble by 3 & 5", function(){
        expect(FizzBuzz(15)).toEqual("Fizzbuzz")
    })
    it("should print 'number' when given number not divisble by 3 or 5", function(){
        expect(typeof FizzBuzz(2)).toEqual("number")
    })
    

})