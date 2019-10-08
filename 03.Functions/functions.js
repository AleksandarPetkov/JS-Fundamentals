
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

// Arguments: Специален обект в JS, който прилича на масив, и всеки индекс се явява -
// съответния параметър който искам да достъпя.


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

//02.	Words Uppercase
let input = "Hello, how are you?".split(/[ , !\?]/)
.map((w) => {return w.toUpperCase()})
.filter((fw) => fw.length > 1);

console.log(input.join(", "));

//03.	Template format
function printInputTemplete(arr){
    let text = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>\n"
    for (let index = 1; index <= arr.length; index++) {
        if(index % 2 == 1){
            text += "  <question>\n" + "    "+ arr[index - 1] +"\n" + "  </question>\n";
        } else {
            text += "  <answer>\n" + "    "+ arr[index - 1] +"\n" + "  </answer>\n";
        }
    }
    text += "</quiz>"
    return text;
}

let inputTempl = ["Dry ice is a frozen form of which gas?","Carbon Dioxide","What is the brightest star in the night sky?", "Sirius"];
console.log(printInputTemplete(inputTempl));

//4.	Cooking by Numbers
// •	chop – divide the number by two
// •	dice – square root of number
// •	spice – add 1 to number
// •	bake – multiply number by 3
// •	fillet – subtract 20% from number
function chop(n){ return n /= 2;};
function dice(n){return Math.sqrt(n);};
function spice(n){return n +=1;};
function bake(n){return n *= 3;};
function fillet(n){return n *= 0.8;};

function calculateCookingByNumbers(arr){
    let number = Number.parseFloat(arr[0]);
    let allNumbers = [];

    for (let i = 1; i < arr.length; i++) {
        switch(arr[i]) {
            case "chop":
              number = chop(number);
              allNumbers.push(number);
              break;
            case "dice":
               number = dice(number);
               allNumbers.push(number);
              break;
              case "spice":
               number = spice(number);
               allNumbers.push(number);
              break;
            case "bake":
               number = bake(number);
               allNumbers.push(number);
              break;
            case "fillet":
               number = fillet(number);
               allNumbers.push(number);
            break;
        }
    }
    return allNumbers;
}

let coookingArray = ['9', 'dice', 'spice', 'chop', 'bake', 'fillet'];
let result = calculateCookingByNumbers(coookingArray);
result.forEach((r) => {console.log(r)});

//5.	Modify Average
function modifyAverage(nums){
    let currentArray = nums.map((x) => x);
    let isHigherThan5 = true;
    while(isHigherThan5){
        isHigherThan5 = checkAveregeHigherThanFive(currentArray);
        if (isHigherThan5 === false){
            return currentArray;
        } else {
             addNineToArray(currentArray);
        }
    }
}

function checkAveregeHigherThanFive(arrMA){
    let sum = arrMA.reduce((a,b) => a + b, 0) / 5.0;
    if(sum > 5){
        return false;
    } else {
        return true;
    }
}

function addNineToArray(arrMa){
    arrMa.push(9);
}
//Input
let justCheck = modifyAverage([1, 0 ,1]);
console.log(justCheck.join(""));