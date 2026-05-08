import assets from './mediaLoader.js'
import dishesData from './dishes.json'
import { createMenu } from './menuPage.js'

function LoadHome() {
    const content = document.getElementById('content')
    
    // Hero section

    const heroSection = document.createElement('div')
    heroSection.className = 'heroHome'
    
    const heroText = document.createElement('p')
    heroText.textContent = 'The best pizzeria'
    heroText.className = 'heroText'

    const ctaHome = document.createElement('button')
    ctaHome.textContent = 'Make a reservation'
    ctaHome.className = 'ctaHome'

    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'See menu'
    menuBtn.className = 'menuBtn'

    const heroImg = new Image()
    heroImg.src = assets['heroImg.webp']
    heroImg.className = 'heroImage'

    heroSection.append(heroText, ctaHome, menuBtn, heroImg)

    // Menu section

    const menuSection = document.createElement('div')
    menuSection.className = 'menuSection'
    
    const dishes = dishesData.slice(0, 3).map(dish => ({
        ...dish,
        src: assets[dish.fileName]
    }))

    const menuFeat = document.createElement('div')

    menuFeat.append(createMenu(dishes))

    menuSection.append(menuFeat)

    // Value proposition section

    const valueSection = document.createElement('div')

    const chefImg = new Image()
    chefImg.src = assets['chef.webp']

    const valueProp = document.createElement('div')
    const valueH = document.createElement('h2')
    valueH.className = 'valueH'
    valueH.textContent = 'We are more than a restaurant'
    const valueP = document.createElement('p')
    valueP.className = 'valueP'
    valueP.textContent = 'We offer various advantages related to the food business'

    valueProp.append(valueH, valueP)
    valueSection.append(chefImg, valueProp)

    content.append(heroSection, menuSection, valueSection)
}

export { LoadHome }