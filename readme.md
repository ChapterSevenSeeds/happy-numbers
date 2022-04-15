## A small JavaScript library built for happy numbers. 
### Written by Tyson Jones.
```js
import { generateHappyNumbers, isHappy } from "happy-numbers2";

generateHappyNumbers(5); // Returns [ 1, 7, 10, 13, 19 ]
isHappy(7); // Returns true.
isHappy(5); // Returns false.
```

## API
```ts
generateHappyNumbers(count: number, min = 1, max = Infinity): number[];
```

- `count` specifies how many numbers you want to generate.
- `min` The inclusive number to start generating from (whether or not it be a happy number).
- `max` The inclusive number to stop generating at (whether or not it be a happy number).

The function will return an array once either `count` or `max` is reached.

```ts
isHappy(num: number): boolean;
```

- `num` is the number you want to check.

Enjoy!