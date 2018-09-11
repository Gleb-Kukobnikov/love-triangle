/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let count = 0;
    let i = 0;
    while (i < preferences.length) {

        let a = preferences[i];
        let b = preferences[preferences[i] - 1];
        let c = preferences[preferences[preferences[i] - 1] - 1];
        let sum = c - 1;

        if (i == sum && a != b && a != c) {
            count = count + 1;
        }
        i = i + 3;
    }
    return count;
};