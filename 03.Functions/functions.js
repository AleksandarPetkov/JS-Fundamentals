
                                   //Lecture
//1.  Function declaration: can be 'Hoisted' (функцията да бъде извикина преди да бъде декларирана)
printName(); // <- Извикваме я преди декларацията (по този начин функцията отива в глобалния скоб)
function printName(){
    console.log("John")
}


//2.  Function expression: can't be 'Hoisted'
function sumOfTwoNumbers(firstNumber, secondNumber){

    // finalSum(firstNumber,secondNumber); Ако я декларирам тук дава Runtime excepsion (can't be 'Hoisted')

    let finalSum = function (a, b){ //<- анонимна функция, изполва се когато на променлива извикаме функция
        return a+b;
    }
    console.log(finalSum(firstNumber,secondNumber)); //<- Слагам параметри на променливата която изпълнява анонимната функция
}
sumOfTwoNumbers(5,5);


//3.  Arrow Function: most useful function in practice
function sumOfTwoNumbers2(firstNumber, secondNumber){
    let sum = (a,b) => a+b;
    console.log(sum(firstNumber, secondNumber));
}
sumOfTwoNumbers2(55,55);

//Function as PARAMETER
function repeatItFirst(number, funcAsParameter){
    for (let i = 0; i < number; i++) {
        funcAsParameter(i); // Invoke Second Function
    }
}

let repeatItSecond = function(count){
    console.log("**".repeat(count));
}
//Invoke Function with Function as Parameter
repeatItFirst(10, repeatItSecond);


                                // Excercises

//01.	Palindrome
function isPolindrome(word){
    let isValid = false;
    let reversedWord = reverseWord(word);
    if(reversedWord === word){
        return true
    } else {
        return false;
    }
}

function reverseWord(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
console.log(isPolindrome("haha"));
console.log(isPolindrome("racecar"));

