
const { getArea, getPerimeter } = require('./arithmetic_operators');




test('getArea() should return 13.5', () => {
    let area = getArea(3, 4.5);
    expect(area).toBe(13.5);
});


test("getPerimeter should return 15", () => {
    let perimeter = getPerimeter(3, 4.5);
    expect(perimeter).toBe(15);
});