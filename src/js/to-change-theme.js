import refs from './refs'

if (!localStorage.getItem('class')) {
  localStorage.setItem('class', 'light-theme')
  refs.body.classList.add('light-theme')
} else {
  refs.body.classList.add(localStorage.getItem('class'))
  if (localStorage.getItem('class') === 'light-theme') {
    refs.inputCheckbox.checked = false
  } else {
    refs.inputCheckbox.checked = true
  }
}

refs.inputCheckbox.addEventListener('change', () => {
  if (localStorage.getItem('class') === 'light-theme') {
    localStorage.setItem('class', 'dark-theme')
    refs.body.classList.replace('light-theme', 'dark-theme')
  } else {
    localStorage.setItem('class', 'light-theme')
    refs.body.classList.replace('dark-theme', 'light-theme')
  }
})
