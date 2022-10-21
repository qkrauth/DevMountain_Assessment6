const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("is this a function", () => {
        expect(typeof shuffleArray).toBe("function");
    })

    test("does it return an array", () => {
        let shuffleValue = shuffleArray(0)
        expect(shuffleValue instanceof Array).toEqual(true)
    })
})

// when I run these tests jest seems to want to run 4+ tests or something. the results are coming back as 2 passed and 1 failed even
// thought I only wrote 2 tests and im pretty sure these should both return pass.