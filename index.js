// console.log('hello world')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click',deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('.checked')
}

let form = document.querySelector('form');

form.addEventListener('submit',addMovie)