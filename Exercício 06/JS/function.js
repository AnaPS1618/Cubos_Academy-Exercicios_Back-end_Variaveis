let travelledDistance = document.querySelector('#travelled_distance')
let temp = document.querySelector('#temp')

let btn = document.querySelector('#btn')

let res = document.querySelector('#result_total')

btn.addEventListener('click', function(){

    let Td = travelledDistance.value
    let t = temp.value


    let v = (Td / t) * 3.6

    res.innerHTML = `${v}km/h`
})

