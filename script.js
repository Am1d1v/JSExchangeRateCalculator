
const currencyElementOne = document.querySelector('#currency-one'); 
const currencyElementTwo = document.querySelector('#currency-two'); 
const amountElementOne = document.querySelector('#amount-one'); 
const amountElementTwo = document.querySelector('#amount-two'); 
const rateElement = document.querySelector('#rate');
const swap = document.querySelector('#swap');


// Fetch exchange rate and update the DOM
function calculate(){
    
    // Values of currencies
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

    
}
calculate();

// Event Listeners for currencies
currencyElementOne.addEventListener('change', calculate)
currencyElementTwo.addEventListener('change', calculate)

//  Event Listeners for amounts
amountElementOne.addEventListener('input', calculate)
amountElementTwo.addEventListener('input', calculate)
