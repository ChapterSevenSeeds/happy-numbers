const { generateHappyNumbers, isHappy } = require('./index');
const { performance } = require("perf_hooks")
const prettyms = require('pretty-ms');

console.log(generateHappyNumbers(5));

const TEST_COUNT = 10;
const COUNT = 100000;

const times = [];
let nums;
for (let i = 0; i < TEST_COUNT; ++i) {
    const start = performance.now();
    nums = generateHappyNumbers(COUNT);
    times.push(performance.now() - start);
}

console.log("generateHappyNumbers:", prettyms(times.reduce((acc, cur) => acc + cur, 0) / times.length));
times.splice(0);

for (let i = 0; i < TEST_COUNT; ++i) {
    const start = performance.now();
    for (const num of nums) {
        isHappy(num);
    }
    times.push(performance.now() - start);
}

console.log("generateHappyNumbers:", prettyms(times.reduce((acc, cur) => acc + cur, 0) / times.length));

/* ---- V1 ---- */
/* Converting num to string to iterate digits, no caching. */
/*
    generateHappyNumbers: 857ms
    generateHappyNumbers: 45ms
*/

/* ---- V2 ---- */
/* Parsing digits via integer division and modulus, no caching. */
/*
    generateHappyNumbers: 358ms
    generateHappyNumbers: 13ms
*/

/* ---- V3 ---- */
/* Parsing digits via integer division and modulus, with caching. */
/*
    generateHappyNumbers: 387ms
    generateHappyNumbers: 13ms
*/

// Winner = V2