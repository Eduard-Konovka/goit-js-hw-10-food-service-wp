import menuList from '../db/menu.json'
import menuTpl from '../templates/menu.handlebars'
import refs from './refs'

refs.menuContainer.insertAdjacentHTML('beforeend', menuTpl(menuList))
