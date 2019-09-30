//1.	Sum 3 Numbers
function sum3Numbers(a,b,c){
    return +a + b + c
}
console.log(sum3Numbers(5,5,5))

//2.	Sum And VAT
function sumAndVat(arr){
    let sum = 0;
    for (let value of arr){
        sum += value;
    }
       
    console.log("Sum is " + sum);
    console.log("VAT is " + sum * 0.20);
    console.log("Total is " + sum * 1.20);
}
console.log(sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]));

//3. Letter Occurences in String
function countOfLetterInString(word, letter){
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i] == letter){
            count++;
        }
    }
    return count;
}
console.log(countOfLetterInString('panther', 'n'));

//4.	Filter By Age
function filterByAge(minAge, nameA, ageA, nameB, ageB){
    let personA = {"name":nameA, "age":ageA};
    let personB = {"name":nameB, "age":ageB};

    if(personA.age >= minAge){
        console.log(personA);
    }
    if(personB.age >= minAge){
        console.log(personB);
    }
}
console.log(17, 'Ivan', 15, 'Asen', 20);