export function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    };

    
    const map = new Map();
    str1.split('').forEach((letter) => {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }
    })

    str2.split('').forEach((letter) => {
        if (map.has(letter)) {
            if (map.get(letter) === 1) {
                map.delete(letter)
            } else {
                map.set(letter, map.get(letter) - 1)    
            }
        }
    })

    return !map.size;
}