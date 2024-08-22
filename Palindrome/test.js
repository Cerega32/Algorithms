import { isPalindrome } from "./solution.js";

test('Проверка палиндромов', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("")).toBe(true);
});
