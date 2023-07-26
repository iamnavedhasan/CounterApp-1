const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetValue = document.getElementById("resetValue");
const displayValue = document.getElementById("displayValue");

/// for decrement btn click
decrementBtn.addEventListener("click", ()  => {
    const value = Number(displayValue.innerText);
    if(value > 0) {
        displayValue.innerText = value - 1;
    }
    else{
        alert("Negative not allowed");
    }
});


/// for increment btn click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >=10) {
         alert("10+ values are not allowed");
    }
    else{
         displayValue.innerText = value + 1;
    }
});
// for reset button click
resetValue.addEventListener("click", () => {
    displayValue.innerText = 0;
});
