let message = document.querySelector('#message')


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
    message.textContent = 'No more movie!'
    event.target.parentNode.remove();
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

let form = document.querySelector('form');

form.addEventListener('submit',addMovie)

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}