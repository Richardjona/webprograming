console.log("i\'ll use you for a project");

//arrays

const number = ['yotube', 'ornge', 'facebook', 10, true];

number.push('cool')
number.unshift('straw')

console.log(number)
console.log(number.indexOf('yotube'))

const todos = [
{
    id: 1,
    text: 'take me out',
    iscompleted: true
},
{
    id: 2,
    text: 'eat with boss',
    iscompleted: true
},
{
    id: 3,
    text: 'sleep',
    iscompleted: true
}];

console.log(todos[1].text)

//loop through arrays

for( let i = 0; i < todos.length; i++) {
 console.log(todos[i].text)
}

//best loop, map, filter

todos.forEach(function(todo){
    console.log(todo.id)
})


//Object oriented
/* function Student(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

} */

//Class 

class Student{
    constructor (firstName, lastName, dob)
    {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getFullYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}` 
    }
}
const student1= new Student('Jane', 'Austin', '2 - 1 - 1996');
console.log(student1)
console.log(student1.getFullYear())
console.log(student1.getFullName())


