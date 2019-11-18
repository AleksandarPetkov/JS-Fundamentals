// За итерация на масив в JS имам три оснивни loop-a (for-of -обикаля индексите) (for-in) (обикновен фор)
// В JS масивите реално са обекти които се държат като масиви. Реално с [-1] ми е като пропърти в обекта -1
// Може да използвам push() и ми добавя дай отзад в масива/ pop() маха и ми връща ел. най отзад
// Зс добавяне/премахване в предната част на масива  shift()/unshift()
// Съединяване на 2 или повече масива с concat();
// Връща елементи от масива sliсe( .. , ..) начален индекс и краен индекс // splice( .. , //)
// indexOf() / includes()  / array.join('-') 

//1.Print an Array with a given Delimiter
function printArrayByDelimiter(arr1){
    let delemiter = arr1[arr1.length-1]
    let sequnce = '';

    for (let index = 0; index < arr1.length - 1; index++) {
       sequnce += (arr1[index]) + delemiter;
    }
    
    return sequnce.substring(0, sequnce.length - 1);
}
console.log(printArrayByDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));

//2.Print every N-th Element from an Array 
function printNthElement(arr2){
    let steps = parseInt(arr2[arr2.length-1]);
    let result = [];

    for (let index = 0; index < arr2.length - 1; index++) {
       if(index === 0 || index % steps === 0){
        result.push(arr2[index]);
       }
      
       if(steps >= arr2.length){
           return result;
       }
    }
    return result;
}
console.log(printNthElement(['2', '5', '31', '111', '44', '3']));

//3. *MIX Elements from an Array
function mixElementsFromArray(arr3){
    let result = [];
    for (let index = 0; index < arr3.length; index++) {

        let currentIndex = index + 1;
        switch(arr3[index]) {
            case 'add':
              result.push(currentIndex);
              break;
            case 'remove':
              result.pop();
              break;
          }
    }
    return result;
}
console.log(mixElementsFromArray(['add', 'add', 'remove', 'add', 'add']));