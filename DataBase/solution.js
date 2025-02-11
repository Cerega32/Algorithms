const findDuplicate = (arr) => {
    const set = new Set();

    for (item of arr) {
        if (set.has(item)) {
            return item;
        } 
        set.add(item);
    }
}

module.exports = findDuplicate;