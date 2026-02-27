/** @type {number[]} Available euro denominations. */
let units = [1, 2, 5, 10, 20, 50, 100, 200];

/** @type {number} Value from the user input. */
let inputValue = 0;

/** @type {number} Number of banknotes/coins required. */
let neededAmount = 0;


/**
 * Attaches a submit handler to the form with the ID 'euro-calculation-form' and performs the calculation workflow without reloading the page.
 * 
 * On submit:
 * - Prevents the default form submission.
 * - Computes the result using the 'getResult' function.
 * - Displays the result using the 'showResult' function.
 * - Resets the global state using the 'reset' function.
 * - Disables the button that evoces calculation using the 'disableCalculateBtn' function.
 * 
 * @function calculate
 * @returns {void}
 */
function calculate() {
    document.getElementById('euro-calculation-form').addEventListener("submit", (event) => {
        event.preventDefault();
        getResult();
        showResult();
        reset();
        disableCalculateBtn();
    });
}


/**
 * Calculates the minimum number of euro banknotes/coins needed to exactly pay the entered amount using the available denominations stored in the global 'units' array. Stores the 'inputValue' and mutates the global variable 'neededAmount'.
 * 
 * - Reads the numeric value from the input field with the ID 'number-input', converts it to a number, and assigns it to the global variable 'inputValue'.
 * - Assigns the 'inputValue' to the 'currentValue' variable and the global array 'units' to the array 'currentUnits'.
 * - Finds out the the maximum value from the 'currentUnits' array and assigns it to the 'maxUnit' variable.
 * - Adds the maximum possible number of that denomination to the global variable 'neededAmount' using division and Math.floor.
 * - Updates the remaining amount using the modulo operator and assigns it to the 'currentValue'.
 * - Filters the available denominations to those less than or equal to the 'currentValue' and assigns it to the 'currentUnits'.
 * - Repeats that process until no denomination greater than 0 remains.
 * 
 * @function getResult
 * @returns {void}
 */
function getResult() {
    inputValue = Number(document.getElementById('number-input').value);     
    let currentValue = inputValue;
    let currentUnits = units;
    let maxUnit;
    do {
        maxUnit = Math.max.apply(Math, currentUnits);
        neededAmount += Math.floor(currentValue/maxUnit);
        currentValue = currentValue % maxUnit;
        currentUnits = units.filter(unit => unit <= currentValue);        
    } while (maxUnit > 0);
}


/**
 * Displays the calculated result inside the DOM element with the ID 'result' by updating the element's innerHTML with a formatted message that includes the global variables 'inputValue' and 'neededAmount'.
 * 
 * @function showResult
 * @returns {void}
 */
function showResult() {
    document.getElementById('result').innerHTML = `Um <span class="red">${inputValue} Euro</span> exakt zu bezahlen, benötigen Sie mindestens <span class="red">${neededAmount} Euro-Banknote(n)/&#8209;Münze(n)</span>.`;    
}


/**
 * Resets the variables 'inputValue' and 'neededAmount' to their default values.
 * 
 * @function reset
 * @returns {void}
 */
function reset() {    
    inputValue = 0;
    neededAmount = 0;    
}
