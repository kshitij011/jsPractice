const form = document.querySelector('form')



form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#inputHeight').value)
    const weight = parseInt(document.querySelector('#inputWeight').value)
    const results = document.querySelector('#results')
    console.log(height, weight);

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi =(weight / ((height*height) / 10000)).toFixed(2)//controls length of the decimal digits

        switch(true){
            case bmi<18.6:
            results.innerHTML = `Your are underweight BMI: ${bmi}`
            break;
            case bmi>18.6 && bmi<24.9:
                results.innerHTML = `Your are in normal range BMI: ${bmi}`
                break;
            case bmi>24.9:
                results.innerHTML = `Your are overweight BMI: ${bmi}`
                break;
        }

        //show the result
        // results.innerHTML = `<span>${bmi}</span>`
    }
})