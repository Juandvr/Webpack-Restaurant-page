import assets from './mediaLoader.js'
import dishesData from './dishes.json'
import { createMenu } from './menuPage.js'

function LoadHome() {
    const content = document.getElementById('content')
    
    // Hero section

    const heroSection = document.createElement('div')
    heroSection.className = 'heroSection'
    
    const heroText1 = document.createElement('p')
    heroText1.textContent = 'Delicious food'
    heroText1.className = 'heroText1'

    const heroText2 = document.createElement('p')
    heroText2.textContent = 'and great service'
    heroText2.className = 'heroText2'

    const ctaHome = document.createElement('button')
    ctaHome.textContent = 'Make a reservation'
    ctaHome.className = 'ctaHome'

    const heroMsg = document.createElement('div')
    heroMsg.className = 'heroMsg'
    heroMsg.append(heroText1, heroText2, ctaHome)

    heroSection.append(heroMsg)

    // Menu section

    const menuSection = document.createElement('div')
    menuSection.className = 'menuSection'

    const menuText = document.createElement('p')
    menuText.className = 'menuText'
    menuText.textContent = 'Featured items'
    
    const dishes = dishesData.slice(0, 3).map(dish => ({
        ...dish,
        src: assets[dish.fileName]
    }))

    const menuFeat = document.createElement('div')
    menuFeat.className = 'menuFeat'

    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'See menu'
    menuBtn.className = 'menuBtn'

    menuFeat.append(menuBtn)

    menuSection.append(menuText, createMenu(menuFeat, dishes))

    // Value proposition section

    const valueSection = document.createElement('div')
    valueSection.className = 'valueSection'

    const chefImg = new Image()
    chefImg.src = assets['chef.webp']

    const valueProp = document.createElement('div')
    const valueH = document.createElement('h2')
    valueH.className = 'valueH'
    valueH.textContent = 'We are more than a restaurant'
    
    const props = [
        '24 hour service',
        'Fast delivery',
        'Great variety in menu'
    ]

    const propList = document.createElement('ul')

    props.forEach(prop => {
        const item = document.createElement('li')
        item.textContent = prop
        propList.append(item)
    })

    valueProp.append(valueH, propList)
    valueSection.append(chefImg, valueProp)

    content.append(heroSection, menuSection, valueSection)
}

export { LoadHome }