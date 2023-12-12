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
describe ('EQUAL TO APPLE', () =>{
    test ('Check the value of its word property is APPLE', () =>{
        const wordle = new Wordle()
        expect(wordle.word).toEqual('APPLE')
    })
})


// BUILD GUESS - APPLE - CORRECT
describe('LETTER IS CORRECT', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('AP___')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('CORRECT')

    })
})

//BUILD GUESS - APPLE - PRESENT
describe('APPLE IS PRESENT', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('E___')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('PRESENT')

    })
})

//BUILD GUESS - APPLE - ABSENT
describe('APPLE IS ABSENT', () => {
    test ('Sets the status of a correct letter to CORRECT', () =>{
        const word = new Wordle()
        const wordArr = word.buildGuessFromWord ('Z_X_')
        console.log(wordArr)
        expect(wordArr[0].status).toBe('ABSENT')

    })
})

//WORDLE - APPEND GUESS /TTHROW ERROR/ NO MORE GUESS
describe ('NO MORE GUESSES', () =>{
    test('throws an error if there are no more guesses', () =>{
        const word = new Wordle(1)
        const wordArr = word.appendGuess('GUESS')
        expect (()=>wordle.appendGuess('GUESS')).toThrow();
    })
})


///WORDLE - APPEND GUESS //THROW ERROR // 5 LENGTH
describe ('REQUIRED - 5 LENGTH', () =>{
    test ('throws an error if word is NOT 5 in length', () =>{
        const word = new Wordle()
        expect(() =>  wordle.appendGuess('ABKJHKJHJKH')).toThrow();
    })
})

//WORDLE - GUESS IS NOT A WORD
describe ('WORD IS NOT PRESENT', ()=>{
    test ('test if the guess is not a word', () =>{
        const word = new Wordle(1)
        expect(()=>wordle.apppendGuess('123456')).toThrow();
    })
})
