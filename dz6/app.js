//первое задание
const buttons = document.querySelectorAll('.button');
buttons.forEach(button=>{
    button.addEventListener('click', function (){
        console.log('вы нажали на кнопку')
    })
})






//второе задание
const btns = document.querySelectorAll('.counter__btn');
btns.forEach(btn=>{
    btn.addEventListener('click', function (){
        const direction = this.dataset.direction;
        const input = this.parentElement.querySelector('.counter__value');
        const currentValue = +input.value;
        let newValue;

        if(direction === 'plus'){
            newValue = currentValue + 1;
        }
        if(direction === 'minus'){
            newValue = currentValue - 1;
        }

        input.value = newValue;
    })
})