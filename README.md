# CracklePop

For my Recurse Center application, 2024-08-30

## How to run it

This has been tested with Node.js v20.14.0, but probably works in earlier versions.

```
> node cracklepop.js
```

## Run the tests

If you haven't already, use `npm install`. This just installs `mocha`.

```
> npm run test
```

## About the solution

Yes, it's a joke. I hope you like it?

[A few years ago](https://x.com/NeilKNet/status/1357738719759896577), I decided to make a ridiculous Fizzbuzz implementation, that used ECMAScript 6, fit in a tweet, and had no assignments. I adapted it here for CracklePop, with more descriptive variable names and a few other improvements.

## How it works

We first obtain a list of numbers from 1 to 100 with a standard trick, getting keys from an `Array` of predefined length. We use splice to drop the initial 0. 

For each of those numbers, we then make a pair, like `[3, 3]`.

We then define two similar functions, which will get the modulus of the first pair item versus 3 and 5, respectively. If it's a number, replaces it with `Crackle` or `Pop`. If it's a string, it appends that label instead, so if both conditions were true, we get `CracklePop`.

## Social media virality optimization

Minified it comes in at 190 characters.

## Specifications

> Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print 
> Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print
> CracklePop. You can use any language.


