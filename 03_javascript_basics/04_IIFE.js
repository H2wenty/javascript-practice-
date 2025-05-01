// Immediately Invoked Function Expressions IIFE

(function book() {
console.log('Atomic Habits')
})();

(function book2() {
    console.log('Rich Dad Poor Dad')
    })();
    
((name)=>{
    console.log(`Atomic Habits Book Read by ${name}`);
    
})('Huzaifa')