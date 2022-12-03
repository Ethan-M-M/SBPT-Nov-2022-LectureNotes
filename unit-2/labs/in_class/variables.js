/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/

let first;
let last;
let birth;
let needsCoffee;
let date;
let age;

first= 'Ethan';
last= 'Moskowitz';
birth= 1989;
needsCoffee= true;
date = 2022;
age = (date - birth);

console.log(age);