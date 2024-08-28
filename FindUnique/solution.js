export const findUnique = (arr) => {
    return arr.reduce((acc, el) => acc ^ el, 0);
}
