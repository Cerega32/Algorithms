import { isAnagram } from "./solution.js";

test('Проверка анаграмм', () => {
    expect(isAnagram("мошкара", "ромашка")).toBe(true);
    expect(isAnagram("кошка", "лошка")).toBe(false);
    expect(isAnagram("пила", "липа")).toBe(true);
    expect(isAnagram("", "")).toBe(true);
    expect(isAnagram("тест", "сеть")).toBe(false);
    expect(isAnagram("кот", "ток")).toBe(true);
});
