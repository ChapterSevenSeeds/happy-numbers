declare module "happy-numbers2" {
    /**
     * Generates happy numbers.
     * @param {number} count The amount of happy numbers to generate.
     * @param {number} min The inclusive minimum number.
     * @param {number} max The inclusive maximum number.
     * @returns An array of happy numbers.
     */
    export function generateHappyNumbers(count: number, min: number, max: number): number[];


    /**
     * Determines if the given number is happy.
     * @param {number} num The input number.
     * @returns True if the number is happy. False otherwise.
     */
    export function isHappy(num: number): boolean;
}