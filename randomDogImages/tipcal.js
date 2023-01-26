const dogImage = document.getElementById('dogimage')
const newDog = document.getElementById('getNew')

GetDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src= '${json.message}'/>`
   })

}
newDog.onclick =  () => GetDogs()

