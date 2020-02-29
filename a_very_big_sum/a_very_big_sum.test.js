
const aVeryBigSum = require("./a_very_big_sum");


test('Testing aVeryBigSum with 10,10,10,10', () => {
    let arr = aVeryBigSum([10,10,10,10]);
    expect(arr).toEqual(40);
});


test("Testing aVeryBigSum with 1000000001, 1000000002,1000000003,1000000004,1000000005 ", () => {
    let arr = aVeryBigSum([1000000001, 1000000002,1000000003,1000000004,1000000005]);
    expect(arr).toEqual(5000000015);
});


test("Testing aVeryBigSum with 80, 5,10,9,9,9,7,55555 ", () => {
    let arr = aVeryBigSum([80, 5,10,9,9,9,7,55555]);
    expect(arr).toEqual(55684)
});
