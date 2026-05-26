import "./styles/main.css"
import { LoadHome } from "./homePage.js"
import { loadMenu } from "./menuPage.js"

const nav = document.querySelector('nav')
const content = document.getElementById('content')

const routes = {
    home: LoadHome,
    menu: loadMenu,
}

nav.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (!btn) return

    const loadPage = routes[btn.dataset.page]
    if (loadPage) {
        content.replaceChildren()
        loadPage()
    }
})

LoadHome()