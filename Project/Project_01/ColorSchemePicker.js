const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body') //body is a tag name

//event . When we cick on button it is event when we hover it is an event
//since we got nodelist so we can use forEach
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target) // it will tell from where it is called

        //adding event listener condition to change color
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id; // e.target.id bcz its value is grey
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        
                if(e.target.id === 'yellow'){
                    body.style.backgroundColor = e.target.id;
                }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

    })//we will add event listener on each button
});