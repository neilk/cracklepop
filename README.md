# CracklePop

For my Recurse Center application, 2024-08-30

## How to run it

This requires Node.js. The main script should run correctly with any `node` more recent than version 8.

```
node cracklepop.js
```

## Run the tests

The tests are only guaranteed to work with the current version of node, `v20.14.0`.

If you haven't already, use `npm install`. This just installs `mocha`.

```
npm run test
```

## About the solution

Yes, it's a joke. I hope you like it?

[A few years ago](https://x.com/NeilKNet/status/1357738719759896577), I decided to make a ridiculous Fizzbuzz implementation, that used ECMAScript 6, fit in a tweet, and had no assignments. I adapted it here for CracklePop, with more descriptive variable names and a few other improvements.

## How it works

We first obtain a list of numbers from 1 to 100 with a standard trick, getting keys from an `Array` of predefined length. We use splice to drop the initial `0`. 

For each of those numbers, we then make a pair, like `[3, 3]`.

We then define two similar functions, which will get the modulus of the first pair item versus 3 and 5, respectively. If it's a number, replaces it with `Crackle` or `Pop`. If it's a string, it appends that label instead, so if both conditions were true, we get `CracklePop`.

We then `map` over all the numbers, and `reduce` both those functions over each pair. The result is a list of pairs like `[3, 'Crackle'], [4, 4], [5, 'Pop'], [6, 6] ... [15, 'CracklePop']`.

Then, for each of those pairs, we print the second item. 

We ensure we are printing a string because in the terminal or in a browser, `console` often applies special styling to numbers.

## Social media virality optimization

Minified it comes in at 190 characters.

## Specifications

> Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print 
> Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print
> CracklePop. You can use any language.


