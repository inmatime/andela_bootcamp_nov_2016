function dataTypes(input){
     if (typeof input === "string") {
          return input.length	  } 
      else if (typeof input === null || input === undefined) {
	        return "no value"; }
	        
      else if(typeof input=== true || input===false){
          return "the boolean"; }
          
      else if(typeof input === "number"){
        if(input>100){
          return "more than 100";
        }
        else if (input<100){
          return "less than 100";
        }
        else{
          return "equal to 100";
        }
      }
      else if (Array.isArray(input)) {
	        return input[2]; }
	   else if (typeof input  === "function"){
	     return input(true);
	   }
}