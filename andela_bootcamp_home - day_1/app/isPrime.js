 
function isPrime(num){
  { 
         var prime=[];
         var k=2;
         var primenum=[];
  
 
        //get all integers less or equal to num and higher than 2 (1 is not a prime) and set them as unmarked.
       for(var i = 2; i <= num; i++){
            prime[i] = 0;

        while(k <= Math.sqrt(num)){ 
          for(var j = 2; num >= k*j; j++){
             /*Marked multiple of num as 1 Those numbers which marked 1 are not a prime number
              */
              prime[k*j] = 1;
           }
          k++; 
      }
 
       //collate prime numbers 
       for(var n = 2; n <= num; n++) { 
          if(prime[n] === 0) {
            primenum.push(n);
            
          }
       }
  return primenum;    
}

}
}
