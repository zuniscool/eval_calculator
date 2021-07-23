'use strict'

const equal = document.querySelector('.equal');
const display = document.querySelector('.part-display');
const clear = document.querySelector('.clear');
const transform = document.querySelector('.transform');
const percent = document.querySelector('.percent');

// 숫자 입력기
// 클릭된 버튼을 인자로 받아서 동작
function inputEvent(e) {
    const targetBtn = e.target.textContent;

    if(display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += targetBtn;
}

// 1. 18자 이상 입력시 글자 크기 조정
// 2. 38자 이상 입력시 경고 메세지
function smallText() {
    const currentDisplay = display.textContent.toString().length;

    if (currentDisplay >= 18 && currentDisplay < 39) {
        display.classList.remove('part-display');
        display.classList.add('small_text');
    } else if (currentDisplay >= 38) {
        display.textContent = 0;
        alert('숫자가 너무 많습니다. AC버튼을 누르고 다시 입력하세요.')
        display.classList.add('part-display');
        display.classList.remove('small_text');
    } else {
        display.classList.add('part-display');
        display.classList.remove('small_text');
    }
}

// 계산 결과
function init() {
    const parsed = parseInt(display.textContent);
    let txt = display.textContent.indexOf('+');
    let removeIndex = txt+1;
    const str = display.textContent;
    const indexx = str.charAt(removeIndex);
    if (indexx == 0) {
        const removeZero = str.replace('0', '');
        const result = eval(removeZero);
        display.textContent = result;
    } else {
        const result = eval(display.textContent);
        display.textContent = result;
    }
}

// 연산자 중복 입력 방지
function count(key) {
    const text = display.textContent;
    let search = text.indexOf(key);
    let countNum = 0;
    while (search !== -1) {
        countNum++;
        search = text.indexOf(key, search + 1);
    }

    if (countNum >= 2) {
        const resultText = display.textContent;
        const replaceText1 = resultText.replace(`${key}${key}`, '');
        display.textContent = replaceText1;
    }
}

// 키입력 계산
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
        count(keyName);
    }
    console.log(keyName);
    smallText();
})

// 버튼 클릭 계산
const onClick = addEventListener('click', (e) => {
    const buttonName = e.target.classList[0];


    switch (buttonName) {
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

    smallText();
});