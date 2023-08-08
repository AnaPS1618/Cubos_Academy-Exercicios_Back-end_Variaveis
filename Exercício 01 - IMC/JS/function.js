let btn = document.querySelector('#btn_result');
let res = document.querySelector('#imc_result');

let weight = document.querySelector('#weight')
let height = document.querySelector('#height')

btn.addEventListener('click', function(){
    let a = weight.value
    let b = height.value
    let divide = a / (b * 2)

    res.innerHTML = divide.toFixed(2)
})