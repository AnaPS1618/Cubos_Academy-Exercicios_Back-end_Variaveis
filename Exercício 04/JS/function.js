let capital = document.querySelector('#capital')
let flateRate = document.querySelector('#flate_rate')
let tempPeriod = document.querySelector('#temp_period')

let btn = document.querySelector('#btn')

let res = document.querySelector('#result_total')

btn.addEventListener('click', function(){
    let C = capital.value
    let i = flateRate.value
    let t = tempPeriod.value

    let percentage = i / 100
    let M = C + (1 + (percentage * t)) 

    res.innerHTML = `${M}`
})