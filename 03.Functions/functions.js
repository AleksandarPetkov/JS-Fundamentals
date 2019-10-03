//Function declaration: can be 'Hoisted' (функцията да бъде извикина преди да бъде декларирана)
printName(); // <- Извикваме я преди декларацията (по този начин функцията отива в глобалния скоб)
function printName(){
    console.log("John")
}

//Function expression: can't be 'Hoisted'
function sumOfTwoNumbers(firstNumber, secondNumber){

    // finalSum(firstNumber,secondNumber); Ако я декларирам тук дава Runtime excepsion (can't be 'Hoisted')

    let finalSum = function (a, b){ //<- анонимна функция, изполва се когато на променлива извикаме функция
        return a+b;
    }
    console.log(finalSum(firstNumber,secondNumber)); //<- Слагам параметри на променливата която изпълнява анонимната функция
}
sumOfTwoNumbers(5,5);

//Arrow Function: most useful function in practice
function sumOfTwoNumbers2(firstNumber, secondNumber){
    let sum = (a,b) => a+b;
    console.log(sum(firstNumber, secondNumber));
}
sumOfTwoNumbers2(55,55);