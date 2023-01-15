 var Name =  "Ada";
 var nth = Name[Name.length -2];


 function words(Noun, Adjective, Verb, Adverb){
    var result = " ";
    result += "The "+ "" +Noun+ " " +Adjective+" "+ " is"+" "+ Verb + " and" +" " +Adverb 
    return result;
 }
 console.log(nth)
 console.log(words("Joy's", "Beauty","running","quickly"));

 var Myarray = ["jo", 24, "average"];
 var dimensionalA = [[2,3,1],[2,3,4],[20,29,34]];

 dimensionalA.push(["me","you"]);

 console.log(dimensionalA);

 function Myf(){
    console.log("hey Jo");
 };

 Myf();

 function minus(num){
    return num + 1;
 }

function less(val){
    if (val < 20 && val >= 10){
        return "Yes"
    }
    return " No";

}

console.log(less(100))

//functions
var count = 0;
function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'hold'
    if (count > 0){
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
};

cc(2); cc('K'); cc(7); cc('K'); cc('A');
console.log(cc(3))

//Objects

var Myself = {
    "name": "Jonathan",
    "location": "Kaduna",
    "status": "single",
    "age": 40
};


var jo = "name"
var N = Myself[jo]
console.log(N)

//change proprties
Myself.name = "Miracle"
console.log(Myself)

//add objects
Myself['fashion'] = "Excellent"
console.log(Myself)

//
function Myfn(val){
    var result = " ";
    
    var yself = {
        "name": "Jonathan",
        "location": "Kaduna",
        "status": "single",
        "age": 40
    };

    result = yself[val]; 
    return result;

};

console.log(Myfn("age"));


//check own properties
yself = {
    "name": "Jonathan",
    "location": "Kaduna",
    "status": "single",
    "age": 40
};

function check(prop){

   if (yself.hasOwnProperty(prop)) {
    return yself[prop]
   }
   else{
    return "Not found"
    }
   }

console.log(check("name"));

//loops
var mArr = [];
var i = 0;
while (i < 10) {
    mArr.push(i);
    i++;
}

console.log(mArr);

//for loops

var Marr = [];

for (var i = 1; i <= 10; i += 3 ) {
    Marr.push(i);
}

console.log(Marr);


//Nested for loop

//more on objects, and writing functions inside an object
const aboutMe = (name,hair,shirt) => {
    const Jon ={
        name:name,
        hair: hair,
        shirt: shirt,
        assets: 100000,
        liabilities: 2000,
        networth: function(){
            return this.assets - this.liabilities
        }

    }
    const j = `Hi my name is ${Jon.name} and i have a pretty long ${Jon.hair}. i am wearing a ${Jon.shirt} shirt my networth is ${Jon.networth()}`
    return j
}
console.log(aboutMe('Jonathan','Afro','White'))

//an array of groceries

groceries = ['apple', 'banana','pear','ruby','orange']

console.log(groceries)
//a cleaner way to write a loop for yur consumption
for (const groc of groceries){
    console.log(groc)
}

const numbers = [2,4,5,7,8,6,3,5]
for (const num of numbers){
    console.log(num * 2)
}

//a function that counts letters
let result = 0;
const sumArray = (num)=>{
    for(const i of num){
    result = result + i}
    return {result}
   
}
arr = [20,2,3,-1,9,12]
console.log(sumArray(arr)) 


//finding the maximum of a number
const MAx = (numbers) => {
        let Result =numbers[0]
        for(num of numbers){
            if (num < Result){
                Result = num
            }
        }
        return {Result}
}

console.log(MAx(arr))