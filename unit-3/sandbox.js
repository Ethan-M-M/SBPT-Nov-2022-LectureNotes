

if (reply == 'lower') {
    ceiling = (currentGuess - 1);
    return currentGuess;
}

if (reply == 'higher') {
    basement = (currentGuess + 1);
    return currentGuess;
}

/*
else if (reply == 'higher') {
        basement = Math.floor(Math.random() * (max - min + 1)) + min;
       ceiling = Math.floor(Math.random() * (max - min + 1)) + min;
       currentGuess = Math.floor(Math.random() * (max - min + 1)) + min;
       return currentGuess;
*/



let currentGuess = Math.floor((Math.random() * 100) + 1);
let ceiling = 100;
    let basement = 1;
function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    let currentGuess = Math.floor((Math.random() * 100) + 1);
let ceiling = 100;
    let basement = 1;
   currentGuess = num;
   console.log(currentGuess);
    return currentGuess;

}

function compGuess(reply)
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
    
    {
        
        if (reply == 'higher') {
            basement = Math.floor(Math.random() * (100 - (currentGuess + 1) + 1)) + (currentGuess + 1);
           
           currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
           
        } else if (reply == 'lower') {
            
           ceiling = Math.floor(Math.random() * ((currentGuess - 1) - 1 + 1)) + 1;
           currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
        
        } else if (reply =='correct') {
            return ("Your number must be " + currentGuess + "!" );
        }
            return currentGuess;
    }




    if (reply == 'higher') {
        basement = Math.floor(Math.random() * (100 - (currentGuess + 1) + 1)) + (currentGuess + 1);
       
       currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
       
    } else if (reply == 'lower') {
        
       ceiling = Math.floor(Math.random() * ((currentGuess - 1) - 1 + 1)) + 1;
       currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
    
    } else if (reply =='correct') {
        return ("Your number must be " + currentGuess + "!" );
    }
        return currentGuess;