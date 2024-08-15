import { findDuplicate } from "./solution";

test('should return 3 for the input [3, 1, 3, 4, 2]', () => {
    const input = [3, 1, 3, 4, 2];
    const expectedOutput = 3;
    expect(findDuplicate(input)).toBe(expectedOutput);
  });

  test('should return 1 for the input [1, 2, 3, 1]', () => {
    const input = [1, 2, 3, 1];
    const expectedOutput = 1;
    expect(findDuplicate(input)).toBe(expectedOutput);
  });

  test('should return 2 for the input [2, 3, 4, 5, 2]', () => {
    const input = [2, 3, 4, 5, 2];
    const expectedOutput = 2;
    expect(findDuplicate(input)).toBe(expectedOutput);
  });

  test('should return 5 for the input [1, 2, 3, 4, 5, 5]', () => {
    const input = [1, 2, 3, 4, 5, 5];
    const expectedOutput = 5;
    expect(findDuplicate(input)).toBe(expectedOutput);
  });

  test('should return undefined for input with no duplicates', () => {
    const input = [1, 2, 3, 4, 5];
    expect(findDuplicate(input)).toBeUndefined();
  });

  test('should return 7 for input with duplicate at the end', () => {
    const input = [1, 2, 3, 4, 7, 5, 6, 7];
    const expectedOutput = 7;
    expect(findDuplicate(input)).toBe(expectedOutput);
  });
