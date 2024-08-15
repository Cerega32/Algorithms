export const findDuplicate = (arr) => {
    const set = new Set();

    for (const item of arr) {
        if (set.has(item)) {
            return item;
        } 
        set.add(item);
    }
}