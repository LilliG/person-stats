function changeHeading(ev) {
  ev.preventDefault()
  const f = ev.target
  const text = f.personName.value + ' ' + f.personAge.value
  //const heading = document.querySelector('h1')
  //heading.innerHTML = name
  const stats = document.querySelector('#stats p')
  stats.innerHTML = text

  const color = f.colorName.value
  stats.style.color = color
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)