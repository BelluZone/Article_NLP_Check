const { updateUI } = require("../src/client/js/updateResultstoUI");

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the UpdateUI functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the updateUI() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        const sentiments = {
            agreement: 'AGREEMENT',
            confidence: 68,
            irony: 'NONIRONIC',
            score_tag: 'N',
            subjectivity: 'SUBJECTIVE'
        };
        document.body.innerHTML = '<div id="results"></div>'

        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(updateUI(sentiments)).toContain('<p>Agreement: AGREEMENT</p>');
        expect(updateUI(sentiments)).toContain('<p>Confidence: 68</p>');
        expect(updateUI(sentiments)).toContain('<p>Irony: NONIRONIC</p>');
        expect(updateUI(sentiments)).toContain('<p>Polarity: NEGATIVE</p>');
        expect(updateUI(sentiments)).toContain('<p>Subjectivity: SUBJECTIVE</p>');
    })
});