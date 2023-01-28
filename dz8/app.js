function getClick() {
    document.querySelector('.btn').onclick = bt
    document.querySelector('.btn1').onclick = bt1
    document.querySelector('.btn2').onclick = bt2
    document.querySelector('.btn3').onclick = bt3
    document.querySelector('.btn4').onclick = bt4
    document.querySelector('.btn5').onclick = bt5
}

function bt() {
    if (document.querySelector('.btn').innerText === 'показать ответ') {
        document.querySelector('.btn').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn').textContent = 'показать ответ'
        let otv = document.querySelector('.otv')
        otv.style.display = 'none';
    }
}
function bt1() {
    if (document.querySelector('.btn1').innerText === 'показать ответ') {
        document.querySelector('.btn1').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv1')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn1').textContent = 'показать ответ'
        let otv = document.querySelector('.otv1')
        otv.style.display = 'none';
    }
}
function bt2() {
    if (document.querySelector('.btn2').innerText === 'показать ответ') {
        document.querySelector('.btn2').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv2')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn2').textContent = 'показать ответ'
        let otv = document.querySelector('.otv2')
        otv.style.display = 'none';
    }
}
function bt3() {
    if (document.querySelector('.btn3').innerText === 'показать ответ') {
        document.querySelector('.btn3').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv3')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn3').textContent = 'показать ответ'
        let otv = document.querySelector('.otv3')
        otv.style.display = 'none';
    }
}
function bt4() {
    if (document.querySelector('.btn4').innerText === 'показать ответ') {
        document.querySelector('.btn4').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv4')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn4').textContent = 'показать ответ'
        let otv = document.querySelector('.otv4')
        otv.style.display = 'none';
    }
}
function bt5() {
    if (document.querySelector('.btn5').innerText === 'показать ответ') {
        document.querySelector('.btn5').textContent = 'скрыть ответ'
        let otv = document.querySelector('.otv5')
        otv.style.display = 'block';
    } else {
        document.querySelector('.btn5').textContent = 'показать ответ'
        let otv = document.querySelector('.otv5')
        otv.style.display = 'none';
    }
}

getClick()