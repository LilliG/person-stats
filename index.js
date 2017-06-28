function renderColor(f,list) {
  const color = f.colorName.value
  const colorItem = document.createElement('li')
  colorItem.textContent = `Favorite Color:`
  list.appendChild(colorItem)

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = "3rem"
  colorItem.appendChild(colorDiv)
}

function renderListItem(f, text, stat, list) {
  const Item = document.createElement('li')
  Item.textContent = `${text} ${stat}`
  list.appendChild(Item)
}

function renderList(f) {
  const stats = document.querySelector('#stats')

  const list = document.createElement('ul')

  renderListItem(f, "Name:", f.personName.value, list)
  renderListItem(f, "Age:", f.personAge.value, list)
  renderColor(f,list)
  
  stats.appendChild(list)
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  renderList(f)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)