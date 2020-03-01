
const getCount = require("./count_object")



test('getCount should return 2', () => {
    var arr = [
        { x: 1, y : 1},
        { x: 1, y: 3},
        { x: 3, y: 3},
        {x: 3, y: 4},
        {x: 4, y: 5}];
    expect(getCount(arr)).toBe(2);
});
