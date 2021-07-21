'use strict'

const result = document.querySelector('.calcResult');
const display = document.querySelector('.part-display');
const clear = document.querySelector('.clear');
const transform = document.querySelector('.transform');
const percent = document.querySelector('.percent');

addEventListener('click', (e) => {
    const target = e.target.classList[0];

    switch (target) {
        case 'calc':
            clickEvent(e);
            break;
        case 'clear':
            display.textContent = 0;
            break;
        case 'transform':
            const parsed = parseInt(display.textContent);
            if (parsed >= 0) {
                display.textContent = `-${display.textContent}`;
            } else if (parsed < 0) {
                display.textContent = display.textContent.slice(1);
            }
            break;
        case 'percent':
            display.textContent = eval(display.textContent*0.01);
            break;
    }
});

function clickEvent(e) {
    const targetBtn = e.target.textContent;

    if(display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += targetBtn;
}

function init() {
    const result1 = eval(display.textContent);
    display.textContent = result1;
}

result.addEventListener('click', init);