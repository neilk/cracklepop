// A Mocha test for the cracklepop function
// Usage: mocha test.js

// Capture which node executable we are running
const nodeExecutable = process.execPath;
const { execSync } = require('child_process');

const assert = require('assert');

describe('CracklePop', function () {
    const result = execSync(`${nodeExecutable} cracklepop.js`).toString();
    const resultLines = result.split('\n');
    // remove the last item of resultLines, which is an empty string
    resultLines.pop();

    it('should print 100 lines', function () {
        assert.strictEqual(resultLines.length, 100);
    });

    it('should print expected results for each line', function () {
        for (let i = 0; i <= 99; i++) {
            let n = i + 1;
            let expected = n.toString();
            if (n % 15 === 0) {
                expected = 'CracklePop';
            } else if (n % 3 === 0) {
                expected = 'Crackle';
            } else if (n % 5 === 0) {
                expected = 'Pop';
            }
            assert.strictEqual(resultLines[i], expected);
        }
    });

});
