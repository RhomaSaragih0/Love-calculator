const buttons = document.querySelectorAll('.buttons');
const numbers = document.querySelectorAll('.number');
let results = document.getElementById("result");
let extra = document.getElementById(`extra`);


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(`click`, function() {


        if(buttons[i].textContent == '=') {
            results.textContent = `I LOVE U LELI`;
        } else if(buttons[i].textContent == 'C') {
            results.textContent = "0";
        } else {
            if(results.textContent === '0') {
                results.textContent = buttons[i].textContent;
            } else {
                results.textContent += buttons[i].textContent;
            }
        }

    });
};