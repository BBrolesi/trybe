const {
    TestScheduler
} = require('jest');

const {obj1, obj2, obj3} = require('./objects');

describe('Compare objects', () => {
    it('Object one and Object two isnt equal', () => {
        expect((obj1)).not.toBe(obj2);
    });
    it('Object two and Object three isnt equal', () => {
        expect((obj2)).not.toBe(obj3);
    });
    it('Object one and Object three isnt equal', () => {
        expect((obj1)).not.toBe(obj3);
    });
});
