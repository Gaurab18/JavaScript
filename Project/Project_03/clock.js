const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleString();
} , 2000); //here first argument is function and second is time in milliseocnd after which it will display