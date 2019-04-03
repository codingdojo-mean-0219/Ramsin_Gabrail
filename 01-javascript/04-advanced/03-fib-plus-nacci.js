function fib() {
    let a = 0;
    let b = 1;
   
    function nacci() {
        const temp = a;
    
        console.log(b);
    
        a = b;
        b = b + temp;
    }
   
    return nacci
   }
   const fibCounter = fib();
   fibCounter() // should console.log "1"
   fibCounter() // should console.log "1"
   fibCounter() // should console.log "2"
   fibCounter() // should console.log "3"
   fibCounter() // should console.log "5"
   fibCounter() // should console.log "8"