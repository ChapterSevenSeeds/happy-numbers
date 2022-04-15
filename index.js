module.exports.generateHappyNumbers = function (count, startFrom = 1, max = Infinity) {
    let num = Math.floor(startFrom);
    let sum;
    let numCopy;
    let currentDigit;
    const trail = new Set();
    const nums = [];

    while (nums.length < count) {
        numCopy = num;
        while (true) {
            sum = 0;
            while (numCopy !== 0) {
                currentDigit = numCopy % 10;
                sum += currentDigit * currentDigit;
                numCopy = (numCopy / 10) >> 0; // Faster than Math.floor
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
    let currentDigit;
    while (true) {
        sum = 0;
        while (num !== 0) {
            currentDigit = num % 10;
            sum += currentDigit * currentDigit;
            num = (num / 10) >> 0; // Faster than Math.floor
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