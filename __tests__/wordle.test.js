import {buildLetter, Wordle} from '../src/wordle.js';


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
describe ('constructing a new World instance', () =>{
    test('Check the length of the instance guesses array is 6', () =>{
        const wordle = new Wordle()
        expect(wordle.guesses.length).toEqual(6)
    })
})






