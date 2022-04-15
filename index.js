module.exports.generateHappyNumbers = function (count, startFrom = 1, max = Infinity) {
    let num = startFrom;
    let sum;
    let numCopy;
    const trail = new Set();
    const nums = [];

    while (nums.length < count) {
        numCopy = num;
        while (true) {
            sum = 0;
            for (const digit of numCopy.toString()) {
                sum += digit * digit;
            }

            if (sum === 1) {
                nums.push(num);
                ++num;

                if (num > max) return nums;
                break;
            }

            if (trail.has(sum)) {
                ++num;
                if (num > max) return nums;
                break;
            }

            trail.add(sum);
            numCopy = sum;
        }

        trail.clear();
    }

    return nums;
}

module.exports.isHappy = function (num) {
    const trail = new Set();
    while (true) {
        sum = 0;
        for (const digit of num.toString()) {
            sum += digit * digit;
        }

        if (sum === 1) {
            return true;
        }

        if (trail.has(sum)) {
            return false;
        }

        trail.add(sum);
        num = sum;
    }
}