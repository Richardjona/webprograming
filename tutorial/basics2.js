//FREQUENCIES 

const letterFrequency = (phrase) => {
    //make frequency object
    let frequency = {}
    for (const letter of phrase) {
        //check if letter exists in frequency
        //increment value by 1 otherwise set value to 1
        if (letter in frequency) {
            frequency[letter]++
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}

// srt = "hI owe you no apology brother"
// console.log(letterFrequency(srt))

//wordFfrequency

const wordFfrequency = (words) => {
    //create an objeect to save keys and value(frequency
    let frequency = {}
    //now we split the words to give us a list of each word
    const l = words.split(' ')

    //here we call the letter frequency function
    return letterFrequency(l)
}
//arr = prompt('write your sentence')

// console.log(wordFfrequency(arr))


//HIIGHER ORDER FUNCTION
//MAP - LOOPS AND RETURNS AN ARRAY
//MAP
//for each number, return by *3
let mapp = [4, 1, 2, 3,].map(num => num * 3)
// console.log(mapp)

//FILTER - returns array with matchin conditions
const farray = [1, 2, 3, 4, 5, 6, 7, 8,]
fill = farray.filter(num => num > 5)
console.log(fill)

array = [
    { name: 'Johnny', networth: 2000000, },
    { name: 'Amber', networth: 200, },
    { name: 'Leonardo', networth: 4000000, },
    { name: 'Joe', networth: 300000, },
]

const names = array.filter(na => na.networth > 200)
// console.log(names)    

const namme = array.map(n => n.name).join(', ')
// console.log(namme)

//using reduce to add the net worths (takes a fn and second parameter)
const net = array.reduce((a,b) => a+b.networth, 0)
// console.log(net)


// REDUCE - used to sum... when you think sum, think reduce.
//reuce takes in a function as an argument
//it loops and gives back the accumulator

const numberss = [2, 34, 3, 5, 6, 7, 8, 9, 90]
const result = numberss.reduce((prev, curr) => prev + curr)

// console.log(result)

//using reduce to get the sum of the total networth
