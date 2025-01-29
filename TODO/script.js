const textArea = document.getElementById("Todo")
const addEl = document.getElementById("add")
const removeEl = document.getElementById("remove")
const ulEL = document.getElementById('items-list')



addEl.addEventListener('click', function addToList() {
  const listEl = document.createElement('li')
  listEl.setAttribute('data-counter', textArea.value)

  listEl.innerHTML = textArea.value

  ulEL.appendChild(listEl)
})

removeEl.addEventListener('click', function removeFromList() {
  const listEl = ulEL.querySelector('[data-counter="' + textArea.value + '"]')

  listEl.remove()




})
