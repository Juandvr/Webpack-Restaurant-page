import assets from './mediaLoader.js'
import dishesData from './dishes.json'

function createMenu(div, dishes){

    dishes.forEach(dish => {
        const dishCard = document.createElement('div')
        dishCard.className = 'dishCard'
        const dishImage = new Image()
        dishImage.src = dish.src
        dishImage.alt = dish.alt
        const dishName = document.createElement('p')
        const dishPrice = document.createElement('p')
        dishName.textContent = dish.name
        dishPrice.textContent = dish.price
        const dishBtn = document.createElement('button')
        dishBtn.textContent = 'Add to Cart'
        dishCard.append(dishImage, dishName, dishPrice, dishBtn)
        div.append(dishCard)
    })

    return div
}

function loadMenu(){
    const content = document.getElementById('content')

    const dishes = dishesData.map(dish => ({
        ...dish,
        src: assets[dish.fileName]
    }))

    const menuH1 = document.createElement('h1')
    menuH1.textContent = 'A menu for every ocassion'

    content.append(menuH1, createMenu(dishes))
}

export { createMenu, loadMenu }