const form = document.querySelector('form')
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height).value)

form.addEventListener('submit' , function(e){
    e.preventDefault(); //to stop the action of form

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height  < 0 || isNaN(height)){
        results.innerHTML = 'Please Enter Valid Height ' ;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Plese Enter Vaid Weight' ;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        //show the result
        // results.innerHTML = `<span>${bmi}</span>`;
    }
    
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    if(bmi <= 18.6){
        results.innerHTML = `Underweight ${bmi}`
    }
    else if(bmi > 18.6 || bmi < 24.9) {
        results.innerHTML = ` Normal ${bmi}`
        } 
    else{
        results.innerHTML = `Overweight ${bmi}`
    }

    //task to show the result with text i.e, underweight or overweight
});