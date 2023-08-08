let valueTotal = document.querySelector('#value_total')
let valueOnHands = document.querySelector('#value_onHands')
let res = document.querySelector('#result_value')

let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    let a = valueTotal.value
    let b = valueOnHands.value

    let absence = a - b

    let descont = (absence * 100) / a

    res.innerHTML = `${descont.toFixed(1)}`
})