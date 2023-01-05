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
