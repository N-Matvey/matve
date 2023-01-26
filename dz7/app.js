function calc() {
    let buttons = document.querySelectorAll('#op_btns')

    for (let i = 0; i < buttons.length; i++) {
        document.querySelector('#plus').onclick = function () {
            let result;

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            result = num1 + num2
            alert(`${result}`)
        }
        document.querySelector('#minus').onclick = function () {
            let result;

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            result = num1 - num2
            alert(`${result}`)
        }
        document.querySelector('#umnozh').onclick = function () {
            let result;

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            result = num1 * num2
            alert(`${result}`)
        }
        document.querySelector('#delit').onclick = function () {
            let result;

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);
                if(num2 === 0 || num1 === 0){
                    alert("на ноль делить нельзя")
                }else {
                    result = num1 / num2
                    alert(`${result}`)
                }

        }
    }
}

calc()


