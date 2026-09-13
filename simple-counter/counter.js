//COUNTER

const incCount = document.getElementById('incCount');
const resetCount = document.getElementById('resetCount');
const decCount = document.getElementById('decCount');
const displayWrap = document.getElementById('displayCount');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let currentCount = 0;

function updateCount(buttonId) {
    let animationClass = '';

    if (buttonId === 'incCount') {
        currentCount++;
        animationClass = 'slide-in-right';
    } else if (buttonId === 'resetCount') {
        currentCount = 0;
        animationClass = 'reset-btn-frame';
    } else if (buttonId === 'decCount') {
        currentCount--;
        animationClass = 'slide-out-left'
    }

    displayWrap.innerHTML = `<span id="displayCount" class="${animationClass}">${currentCount}</span>`;
}


//EVENT LISTENERS
incCount.addEventListener('click', () => updateCount('incCount'));
resetCount.addEventListener('click', () => updateCount('resetCount'));
decCount.addEventListener('click', () => updateCount('decCount'));

//KEYBOARD SUPPORT
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp'){
        updateCount('incCount');
    } else if (event.key === "ArrowDown") {
        updateCount('decCount');
    } else if (event.key === 'Enter') {
        updateCount('resetCount');
    }
});