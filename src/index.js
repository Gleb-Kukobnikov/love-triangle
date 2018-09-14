/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

    let count = 0;
    let i = 0;
    while (i < preferences.length) {

        let a = preferences[i];
        let b = preferences[a - 1];
        let c = preferences[b - 1];

        if (c == (i + 1) && a != c) {
            count++;
        }

        i++;

    }
    return count / 3;
}