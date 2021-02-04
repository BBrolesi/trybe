const {
    TestScheduler
} = require('jest');
const myRemove = require('./myRemove');

describe('myRemove function tests', () => {
    it('Removes number 3 from [1, 2, 3, 4] array and return [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    it('Removes number 3 from [1, 2, 3, 4] array and dont return [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    it('Checks if original array was mofified', () => {
        const array = [1, 2, 3, 4, 5];
        const item = 4;
        myRemove(array, item);
        expect(array).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it('Return the correct value after tried to remove number 5 from [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});