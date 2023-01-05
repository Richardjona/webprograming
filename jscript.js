//get element by id
//get elements by tag name
//get elements by class name
//query selector (selects only the first out of all)
//query selector all (selects all)

const revealbtn = document.querySelector('.reveal-btn');

const hiddencontent = document.querySelector('.hidden-content')

function reveal() {
    if (hiddencontent.classList.contains('reveal-btn')){
        hiddencontent.classList.remove('reveal-btn')
    } else {
        hiddencontent.classList.add('reveal-btn')
    }
}
revealbtn.addEventListener('click', reveal);