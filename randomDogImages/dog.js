const dogImage = document.getElementById('dogimage')
const newDog = document.getElementById('getNew')

GetDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
//     .then(json => console.log(json.message))

    .then(json => {
        dogImage.innerHTML = `<img src= '${json.message}' height = 400 width = 400/>`
   })
   

}
newDog.onclick =  () => GetDogs()

