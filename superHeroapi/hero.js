//https://superheroapi.com/api/access-token/character-id
const Token = '205776685341168'
const Base_URL = `https://superheroapi.com/api.php/${Token}`
const NewHero = document.getElementById('getHero')
const HeroImage = document.getElementById('heroimagediv')
const searchButton = document.getElementById('search')
const Input = document.getElementById('inpuT')


//this fucntion gets a random hero +
 //the statistics from the getStatHTML function
const getRandomHero = (id) => {
    //use.php for the super hero api
    fetch(`${Base_URL}/${id}`)
   .then(response => response.json())
   .then(json => {
    console.log(json)
    getStatHTML(json)
    })
    
    
}   
//this function allows you to search for a hero of your choice
const searchHero =(name)=> {
    fetch(`${Base_URL}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
    hero = json.results[0]
    console.log(hero)
    getStatHTML(hero)
   
    Input.value = ''
    })
   
 
} 

/**
 * this function runs through an object loop of heroes statistics and
 * returns their names, images and stats
 */
const getStatHTML = (character) => {
    const Heroname = `<h2>${character.name}</h2>`
    const img = `<img src='${character.image.url}' height = 300 width = 300/>`
    //the loop through the objects keys and value
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
        })     
        console.log(stats.join(''))
        HeroImage.innerHTML = `${Heroname}${img}${stats}`
     
    }
 

randHero = (heroes) =>  Math.floor(Math.random()* heroes) + 1
NewHero.onclick =() => getRandomHero(randHero(731))
searchButton.onclick= () => searchHero(Input.value)

