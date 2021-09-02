import refs from './refs'

const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

if (!localStorage.getItem('class')) {
  localStorage.setItem('class', THEME.LIGHT)
  refs.body.classList.add(THEME.LIGHT)
} else {
  refs.body.classList.add(localStorage.getItem('class'))
  if (localStorage.getItem('class') === THEME.LIGHT) {
    refs.inputCheckbox.checked = false
  } else {
    refs.inputCheckbox.checked = true
  }
}

refs.inputCheckbox.addEventListener('change', () => {
  if (localStorage.getItem('class') === THEME.LIGHT) {
    localStorage.setItem('class', THEME.DARK)
    refs.body.classList.replace(THEME.LIGHT, THEME.DARK)
  } else {
    localStorage.setItem('class', THEME.LIGHT)
    refs.body.classList.replace(THEME.DARK, THEME.LIGHT)
  }
})
