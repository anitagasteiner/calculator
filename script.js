/**
 * Hides the result message that was shown inside the DOM element with the ID 'result' by clearing the element's innerHTML.
 * 
 * @function hideResult
 * @returns {void}
 */
function hideResult() {
    document.getElementById('result').innerHTML = '';    
}


/**
 * Disables the button with the ID 'btn-calculate'.
 * 
 * @function disableCalculateBtn
 * @returns {void} 
 */
function disableCalculateBtn() {
    let btnCalculate = document.getElementById('btn-calculate');
    btnCalculate.disabled = true;
}


/**
 * Enables the button with the ID 'btn-calculate'.
 * 
 * @function enableCalculateBtn
 * @returns {void} 
 */
function enableCalculateBtn() {
    let btnCalculate = document.getElementById('btn-calculate');
    btnCalculate.disabled = false;
}