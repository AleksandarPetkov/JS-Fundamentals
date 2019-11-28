// Objects in JS (key-value pairs). Key -(Трябва да е Стринг и да не се съдържа '-' възприема го като минус)


//Simple object, can have function
let personObject = {
    name: "Pesho",
    age: 18,
    IQ: function(){return Math.random()}
}

//Can add properties outside of the object
personObject.city = "Plovdiv";
console.log(personObject);
