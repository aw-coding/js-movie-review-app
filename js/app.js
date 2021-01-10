document.addEventListener("DOMContentLoaded", () => {
    console.log('JavaScript has been loaded.');

    const review = document.querySelector('#add-item-form');
    review.addEventListener('submit', getReview);

    const deleteAll = document.querySelector('#delete-button');
    deleteAll.addEventListener('click', deleteAllReviews);



})

const getReview = (event) => {
    event.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.textContent = `${event.target.title.value} ${event.target.director.value} ${event.target.review.value}`;
    newListItem.classList.add('movie-reviews');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
    document.getElementById('add-item-form').reset();
}

const deleteAllReviews = () => {
    const allLiElements = document.querySelector('#current-reviews');
    allLiElements.innerHTML = ' ';
}