// Global scope ke pollution ko hatane k liye use krte hai iife
//Immediately Invoked Function Expressions (IIFE)
//This function runs as soon as it is defined
// If we have some initiation code that we dont need to use again we could use the iife pattern

//iife dont know where to end the code so we use ; to end the code . We also use ; when we write two iife 

// Syntax
// ()();

(function chai(){
    //named IIFE
    console.log(`DB Connected`)
})();

//2nd method where value is passed
( (name) => {
    //Simple IIFE -> as no name is written for a function
    console.log(`DB Connected Two ${name}`);
}
)('Gaurab');

( () => {
    console.log('Connected')
}) ();