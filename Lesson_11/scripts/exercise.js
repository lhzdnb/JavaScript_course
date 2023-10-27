function minMax(nums) {
    let result = {
        min: nums[0],
        max: nums[0]
    }
    if (nums.length === 0) {
        result.min = null;
        result.max = null;
        return result;
    }
    for (const num of nums) {
        if (num < result.min) {
            result.min = num;
        }
        else if (num > result.max) {
            result.max = num;
        }
    }
    return result;
}

// let testArray = [3];
// console.log(minMax(testArray));

function countWords(words) {
    const count = {};
    for (const word of words) {
        if (isNaN(count[word])) {
            count[word] = 1;
        }
        else {
            count[word] += 1;
        }
    }
    return count;
}

console.log(countWords(['apple', 'apple', 'grape', 'apple']));
