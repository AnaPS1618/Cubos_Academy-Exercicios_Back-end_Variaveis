const btn = document.querySelector('#send_value')


let res = document.querySelector('#result_degrees')

btn.addEventListener('click', btnResult)



function btnResult(){
    const degrees = document.getElementById('degrees')
    const degreesSelect = degrees.value

    let input = document.getElementById('account_')
    let valor = input.value

        if(degreesSelect == 'fahrenheit'){
            
            let sum = (valor - 32) * 5 / 9
            res.innerHTML = `${sum.toFixed(2)} ºC`
        }
        
        if(degreesSelect == 'celsius'){

           let sum = ((valor * 9) / 5) + 32 
           res.innerHTML = `${sum.toFixed(2)} ºF`
        }
        
}