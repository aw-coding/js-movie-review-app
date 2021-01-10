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
    const missable = document.querySelector("#worth-a-watch");
    if (missable.checked == true) {
        newListItem.textContent = `${event.target.title.value} ${event.target.director.value} ${event.target.review.value}     Worth watching`;
    }
    else {
        newListItem.textContent = `${event.target.title.value} ${event.target.director.value} ${event.target.review.value}     Not worth watching`;
    }
    newListItem.classList.add('movie-reviews');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
    document.getElementById('add-item-form').reset();
}

const deleteAllReviews = () => {
    const allLiElements = document.querySelector('#current-reviews');
    allLiElements.innerHTML = ' ';
}