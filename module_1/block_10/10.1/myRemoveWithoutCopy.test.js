const myRemoveWithoutCopy = require("./myRemoveWithoutCopy");

describe('myRemoveWithoutCopy function tests', () => {
    it('Return the modified array without the described item', () => {
        const array = [1, 2, 3, 4, 5];
        const item = 5;
        myRemoveWithoutCopy(array, item);
        expect(array).not.toContain(item);
    });
    it('Removes number 3 from [1, 2, 3, 4] array and return [1, 2, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
    });
    it('Removes number 3 from [1, 2, 3, 4] array and dont return [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    it('Checks if original array was mofified', () => {
        const array = [1, 2, 3, 4, 5];
        const item = 4;
        myRemoveWithoutCopy(array, item);
        expect(array).toStrictEqual([1, 2, 3, 5]);
    });
    it('Return the correct value after tried to remove number 5 from [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});