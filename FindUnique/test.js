import { findUnique } from "./solution.js";

test('Поиск уникального числа', () => {
    expect(findUnique([4, 1, 2, 1, 2])).toBe(4);
    expect(findUnique([42, 67, 67, 42, 42])).toBe(42);
    expect(findUnique([1])).toBe(1);
    expect(findUnique([1, 1, 2])).toBe(2);
    expect(findUnique([5, 5, 5, 1, 5])).toBe(1);
    expect(findUnique([1000, 1000, 1000, 1000, 99])).toBe(99);
});
