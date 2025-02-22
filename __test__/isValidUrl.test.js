import { isValidUrl } from "../src/client/js/urlChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the URL-Checker functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the isValidUrl() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        const nonValidUrl = 'blabla';
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(isValidUrl(nonValidUrl)).toBeFalsy();
    })
});

describe("Testing the URL-Checker functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the isValidUrl() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        const ValidUrl = 'https://www.udacity.com/';
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(isValidUrl(ValidUrl)).toBeTruthy();
    })
});