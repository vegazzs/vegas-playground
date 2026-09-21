

function diceRoller() {
    const numOfDice = document.getElementById('diceInput').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    let images = [];
    let values = [];

    if (numOfDice > 10 || numOfDice < 1) {
        diceResult.textContent = `PLEASE INPUT NUMBER FROM 1 - 10`;
        diceImages.textContent = '';
    } else {

        for (let i = 0; i < numOfDice; i++) {
            let num = Math.floor(Math.random() * 6) + 1;
            values.push(num);
            images.push(`<img src="assets/diceImgs/${num}.png" alt="dice ${num}" class="dice-shake">`);
        }

        diceImages.innerHTML = images.join('')

        setTimeout(() => {
            diceResult.textContent = `Dice: ${values.join(', ')}`;
        },800);
    }
}

//KEYBOARD SUPPORT
//CLICKING 'ENTER' ROLLS THE DICE
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        diceRoller();
    }
})