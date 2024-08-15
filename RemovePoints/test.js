import { removeZeros } from "./solution";

test('Удаление нулей', () => {
    expect(removeZeros([-1, 0, 1, 2, 0, 1, -1, -4])).toEqual([-1, 1, 2, 1, -1, -4]);
    expect(removeZeros([0, 0, 0, 0])).toEqual([]);
    expect(removeZeros([5, 0, 10, 0, 15])).toEqual([5, 10, 15]);
    expect(removeZeros([])).toEqual([]);
    expect(removeZeros([1, 2, 3])).toEqual([1, 2, 3]);
});
