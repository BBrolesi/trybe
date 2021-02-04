const {
    TestScheduler
} = require('jest');

const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz function tests', () => {
    it('Returns fizzbuzz if the number is 15', () => {
        expect(myFizzBuzz(15)).toStrictEqual('fizzbuzz');
    });
    it('Returns fizz if the number is 9', () => {
        expect(myFizzBuzz(9)).toStrictEqual('fizz');
    });
    it('Returns buzz if the number is 10', () => {
        expect(myFizzBuzz(10)).toStrictEqual('buzz');
    });
    it('Returns the number if isnt divisible by 3 and 5', () => {
        const number = 7
        expect(myFizzBuzz(number)).toStrictEqual(number);
    });
    it('Returns false if the parameter isnt a number', () => {
        expect(myFizzBuzz('3')).toBe(false);
    });
});