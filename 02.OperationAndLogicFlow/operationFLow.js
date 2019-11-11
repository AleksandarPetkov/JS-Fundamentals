//1.	Multiply Numbers
function multiplyTwoNumbers(x,y){
    return x * y;
}

//2.	Boxes and Bottles
function getBoxes(bottles, capacity){
    if(bottles == 0 ){
        return 0;
    } else if(bottles < capacity){
        return 1;
    } else {
        return Math.ceil(bottles/capacity);
    }
}
console.log(getBoxes(20, 5));
console.log(getBoxes(15, 7));
console.log(getBoxes(5, 10));
console.log(getBoxes(0, 10));

//3.	Leap Year
function checkForLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return "yes"
    } else {
        return "no"
    }
}
console.log(checkForLeapYear(1999));
console.log(checkForLeapYear(2000));
console.log(checkForLeapYear(1900));

//4.	Circle Area
function findCirleArea(radius){
    return Math.PI * (radius * radius);
}
console.log(findCirleArea(5));

//5.	Cone
function findConeArguments(radius, height){
    let volume = Math.PI * (radius * radius) * (height/3);
    let area = Math.PI * radius * (radius + Math.sqrt((height*height) + (radius * radius)));
    console.log(volume);
    console.log(area);
}
findConeArguments(3,5);

//6.	Odd / Even
function findOddOrEven(number){
    if(number % 2 == 0){
        console.log("even");
        
    } else if (number % 2 == 1){
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
findOddOrEven(5);
findOddOrEven(6);
findOddOrEven(1.5);

//7.	Fruit or Vegetable
function checkForFruitOrVegetable(input){
    let fruits = ['banana', 'apple', 'kiwi'];
    let vegatavle = ['tomato', 'papper', 'garlic'];

   if(fruits.includes(input)){
       return "Fruit";
   } else if (vegatavle.includes(input)){
    return "Vegetable";
   } else {
    return "unknown";
   }
}
console.log(checkForFruitOrVegetable('banana'));
console.log(checkForFruitOrVegetable('tomato'));
console.log(checkForFruitOrVegetable('pizza'));

//8.	Colorful Numbers
function getColorfulNumbers(input){
    var html = '';
    html += "<ul>\n"
    for (let i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            html += "<li><span style='color:blue'>" + i + "</span></li>\n";
        } else {
            html +=  "<li><span style='color:green'>" + i + "</span></li>\n";
        }
    }
    html += "<ul>"
    return html;
}
console.log(getColorfulNumbers(10));

//9.	Chess Board

