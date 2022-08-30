var input = document.querySelector('input');
var errorMsg = document.querySelector('h4');
var errorImg = document.querySelector('.error');

function btnClick() {
    let accept = 0;
    accept = input.value;

    if (!accept.includes('@') || !accept.includes('.com')) {
        input.setCustomValidity('invalid');
        errorImg.classList.add('show');
        errorMsg.classList.add('show');
    } else if (accept.includes('@') || accept.includes('.com')) {
        input.style.border = '1px solid hsl(0, 36%, 70%)'
        input.value = " ";
        errorImg.classList.remove('show');
        errorMsg.classList.remove('show');
    }
}

function addOnKeypress(event) {
    if (event.keyCode === 13) {
        btnClick();
    }
}

document.querySelector('button').addEventListener('click', btnClick);

document.querySelector('input').addEventListener('keypress', addOnKeypress);