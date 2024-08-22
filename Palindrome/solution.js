export function isPalindrome(str) {
    const tempStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0, j = tempStr.length - 1; i < j; i++, j--) {
        if (tempStr[i] !== tempStr[j]) {
            return false;
        }
    }

    return true;
}