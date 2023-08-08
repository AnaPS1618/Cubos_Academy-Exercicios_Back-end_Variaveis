let x__1 = document.querySelector('#x_1')
let x__2 = document.querySelector('#x_2')
let y__1 = document.querySelector('#y_1')
let y__2 = document.querySelector('#y_2')

let btn = document.querySelector('#btn')

let res = document.querySelector('#result_total')
btn.addEventListener('click', function(){
    let x1 = x__1.value
    let x2 = x__2.value
    
    let y1 = y__1.value
    let y2 = y__2.value

    let x1_x2 = Math.pow(x2 - x1, 2)
    let y1_x2 = Math.pow(y2 - y1, 2)

    let d = Math.sqrt(x1_x2 + y1_x2)

    res.innerHTML = `${d}`
})