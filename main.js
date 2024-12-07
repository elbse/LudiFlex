let age = 20; 

console.log("Im currently " + age + " years old.");


//Creating and object 

let person = {
    name: "Bernie",
    age: 19,
    city: "Davao City",
    greet: function(){
        return `Hello, my name is ${this.name} and I live ${this.city}.`;
    }
};

console.log(person.name);
console.log(person["age"]);

console.log(person.greet());

