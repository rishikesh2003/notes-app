const plusBtn = document.querySelector('.plus-button')
const notesContainer = document.querySelector('.sticky-notes');
const title = document.querySelector('.title-section');
const notes = document.querySelector('#notes');
plusBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newNote = document.createElement('div');
  newNote.className = 'starting-notes js';
  const  newTitle = document.createElement('textarea');
  newTitle.rows = '1';
  newTitle.cols = '5';
  newTitle.style.overflow = 'hidden';
  newTitle.style.fontWeight = 'bolder';
  const newTextarea = document.createElement('textarea');
  newTextarea.style.fontSize = '16px'
  var newDelBtn = document.createElement('button');
  newDelBtn.classList.toggle('delete-button');
  newDelBtn.innerText = 'DEL';
  newTitle.innerText = title.value;
  newTextarea.innerText = notes.value;
  newTextarea.rows = '10';
  newTextarea.cols = '30';
  newNote.appendChild(newTitle);
  newNote.appendChild(newTextarea);
  newNote.appendChild(newDelBtn);
  notesContainer.appendChild(newNote);
  title.value = '';
  notes.value = '';
  newDelBtn.addEventListener('click', () => {
    notesContainer.removeChild(newNote);
  })
})

const key = 10;
switch(key){
  case 10:
    console.log('hello');
    break;
  default: 
    console.log('This is default');
    break;
}