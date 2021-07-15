function pythagoreanTriplet(n){   //funtion
    
 for(var a = 1; a < n - 1; a++){  //logic to find the triplets of the given value
      for(var b = a; b < n; b++){
        c = Math.sqrt(a * a + b * b);
        if(c % 1 === 0){
 
 console.log(a, b, c); //log to show the values the program
        }
      }
    }
  }

pythagoreanTriplet(9007199254740991) //value of MAX_SAFE_INTEGER to find the trtiplets between the value 
