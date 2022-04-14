let num = 1;

let sum;
let numCopy;
let currentDigit;
const trail = new Set();

while (true) {
    numCopy = num;
    while (true) {
        sum = 0;
        for (const digit of numCopy.toString()) {
            sum += digit * digit;
        }

        if (sum === 1) {
            console.log(num);
            ++num;
            break;
        }

        if (trail.has(sum)) {
            ++num;
            break;
        }

        trail.add(sum);
        numCopy = sum;
    }

    trail.clear();
}