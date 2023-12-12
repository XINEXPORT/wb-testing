import { jest } from '@jest/globals';

//MOCK
jest.unstable_mockModule('../src/words.js', () =>{
    return {
        getWord: jest.fn(()=>'APPLE'),
        isWord: jest.fn(() => true),
    }
})

//DESCRIBE THE TEST
//STATE WHAT THE TEST SHOULD DO
//SET THE PARAMETERS
//SET THE EXPECTATION AKA OUTCOME
//BUILD WORDLE TEST
describe ('building a letter object', () => {
    test('returns a letter object', () => {
        const letter = buildLetter('A', 'PRESENT');
        expect(letter).toEqual({letter: 'A', status: 'PRESENT'});
    })
})

//WORDLE CONSTRUCTOR - MAX GUESSES 6
describe('constructing a new Wordle Game', () => {
    test('test that constructor sets maxGuesses to 6', () => {
        const wordle  = new Wordle()
        expect(wordle.maxGuesses).toEqual(6);
    })
});

//WORDLE - MAX GUESSES 10
describe('constructing a new Wordle Game', ()=>{
    test('test that constructor sets maxGuesses to 10', () => {
        const wordle = new Wordle(10)
        expect(wordle.maxGuesses).toEqual(10);
    })
})

//WORDLE - AN ARRAY OF LENGTH MAXGUESSES
describe ('constructing a new Wordle instance', () =>{
    test('Check the length of the instance guesses array is 6', () =>{
        const wordle = new Wordle()
        expect(wordle.guesses.length).toEqual(6)
    })
})

//WORDLE - SETS CURRGUESS to 0
describe ('constructing a new Wordle instance', () => {
    test ('Check the new instance currGuess property is 0', () =>{
        const wordle = new Wordle()
        expect(wordle.currGuess)
    })
})

const {Wordle, buildLetter} = await import ('../src/wordle.js')

//WORDLE - VALUE OF WORD PROPERTY IS APPLE
describe ('constructing a new Wordle instance', () =>{
    test ('Check the value of its word property is APPLE', () =>{
        const wordle = new Wordle()
        expect(wordle.word).toEqual('APPLE')
    })
})


// BUILD GUESS - APPLE - CORRECT
describe('Building a Guess from Word instance', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('AP___')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('CORRECT')

    })
})

//BUILD GUESS - APPLE - PRESENT
describe('Building a Guess from Word instance', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('E___')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('PRESENT')

    })
})

//BUILD GUESS - APPLE - ABSENT
describe('Building a Guess from Word instance', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('Z_X_')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('ABSENT')

    })
})
