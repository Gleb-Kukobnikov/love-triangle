/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (i = 0; i < preferences.length; i++) {
        let a = preferences[i];
        let b = preferences[i + 1];
        let c = preferences[i + 2]

        if (a + 1 == b && b == c + 2) {
            count++;
        }
    }
    return count;
};