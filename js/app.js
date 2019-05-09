document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('#button');
  deleteButton.addEventListener('click',handleClick);
})

const handleForm = function(event){
  event.preventDefault();

  const newListItem = document.createElement(`li`);

  itemTitle = document.createElement(`h2`)
  itemAuthor = document.createElement(`h3`)
  itemCategory = document.createElement(`p`)

  itemTitle.textContent = `${event.target.title.value}`
  itemAuthor.textContent = `${event.target.author.value}`
  itemCategory.textContent = `${event.target.category.value}`

  newListItem.appendChild(itemTitle)
  newListItem.appendChild(itemAuthor)
  newListItem.appendChild(itemCategory)


  const list = document.querySelector(`#reading-list`);
  list.appendChild(newListItem);

  document.getElementById("new-item-form").reset();

}

const handleClick = function(){
  const retrieveList = document.getElementById('reading-list');
  while (retrieveList.firstChild) {
    retrieveList.removeChild(retrieveList.firstChild);
  }

}
