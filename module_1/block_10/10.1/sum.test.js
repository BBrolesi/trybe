const {
    TestScheduler
} = require('jest');

const sum = require('./sum');

describe('Sum function tests', () => {
    it('Sums 4 + 5 and should be 5', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Sums 0 + 0 and should be 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Sums 4 + "5" and should throw a error', () => {
        expect(() => sum(4, '5')).toThrow();
    });
    it('Sums 4 + "5" and should throw "parameters must be numbers" error', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
});