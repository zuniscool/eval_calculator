'use strict'

const equal = document.querySelector('.equal');
const display = document.querySelector('.part-display');
const clear = document.querySelector('.clear');
const transform = document.querySelector('.transform');
const percent = document.querySelector('.percent');

// Receives the clicked button as an argument and operates.
function inputEvent(e) {
    const targetBtn = e.target.textContent;

    if(display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += targetBtn;
}

// 1. Font-size adjustment when inputted length is over 18 word.
// 2. Display a warning message, when inputted length is 38 word.
function adjustFontSize() {
    const currentDisplayLength = display.textContent.toString().length;

    if (currentDisplayLength >= 18 && currentDisplayLength < 39) {
        display.classList.remove('part-display');
        display.classList.add('adjust_font');
    } else if (currentDisplayLength >= 38) {
        display.textContent = 0;
        alert('숫자가 너무 많습니다. AC버튼을 누르고 다시 입력하세요.')
        display.classList.add('part-display');
        display.classList.remove('adjust_font');
    } else {
        display.classList.add('part-display');
        display.classList.remove('adjust_font');
    }
}

// calculation result
function init() {
    let inputtedOperator = display.textContent.indexOf('+');
    let removeIndex = inputtedOperator+1;
    const currentNumber = display.textContent;
    const findZero = currentNumber.charAt(removeIndex);
    let result;
    if (findZero == 0) {
        const removeZero = currentNumber.replace('0', '');
        try {
            result = eval(removeZero);
            display.textContent = result;
        } catch (error) {
            alert('🚨 피연산자의 첫 숫자 0을 제거하거나, 연산자를 바르게 입력하세요.');
        }
    } else {
        try {
            result = eval(display.textContent).toString();
            const decimalIndex = result.indexOf('.');
            if (result.charAt(decimalIndex) == '.') {
    
                display.textContent = eval(result).toFixed(4);
            } else {
                display.textContent = result;
            }
        } catch (error) {
            alert('🚨 피연산자의 첫 숫자 0을 제거하거나, 연산자를 바르게 입력하세요.');
        }
    }
}

// Prevent Duplication Input
function preventDuplication(key) {
    const currentDisplay = display.textContent;
    let search = currentDisplay.indexOf(key);

    let count = 0;
    while (search !== -1) {
        count++;
        search = currentDisplay.indexOf(key, search + 1);
    }

    if (count >= 2) {
        const removeOperator = currentDisplay.replace(`${key}${key}`, '');
        display.textContent = removeOperator;
    }
}

// Input by a keyboard.
const onKeyDown = addEventListener('keydown', (e) => {
    const keyName = e.key;
    const parsed = keyName.replace(/[^0-9]/g, '');
    const downedKey = parseInt(parsed);

    switch (downedKey.toString()) {
        case 'NaN':
            break;
        default:
            if (display.textContent == 0) {
                display.textContent = '';
            }
            display.textContent += keyName;
    }

    if (display.textContent == 0) {
        return;
    } else if (keyName == '+' || keyName == '-' || keyName == '*' || keyName == '/' || keyName == '.' || keyName == 'Enter' || keyName == 'Escape' || keyName == 'Backspace') {
        switch (keyName) {
            case '+':
                display.textContent += keyName;
                break;
            case '-':
                display.textContent += keyName;
                break;
            case '*':
                display.textContent += keyName;
                break;
            case '/':
                display.textContent += keyName;
                break;
            case '.':
                display.textContent += keyName;
                break;
            case 'Enter':
                init();
                break;
            case 'Escape': case 'Backspace':
                display.textContent = 0;
                break;
        }
        preventDuplication(keyName);
    }
    
    adjustFontSize();
})

// Click a button
const onClick = addEventListener('click', (e) => {
    const buttonClassName = e.target.classList[0];
    const buttonText = e.target.textContent;

    if (display.textContent == 0 && e.target.classList[1] == 'operator') {
        return;
    }
    switch (buttonClassName) {
        case 'calc':
            inputEvent(e);
            break;
        case 'clear':
            display.textContent = 0;
            break;
        case 'transform':
            const parsed = parseInt(display.textContent);
            if (parsed >= 1) {
                display.textContent = `-${display.textContent}`;
            } else if (parsed < 0) {
                display.textContent = display.textContent.slice(1);
            }
            break;
        case 'percent':
            display.textContent = eval(display.textContent*0.01);
            break;
        case 'equal':
            init();
    }
    preventDuplication(buttonText);

    adjustFontSize();
});