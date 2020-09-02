let cards = document.querySelectorAll('.card__item_wrapper');
for (let card of cards) {
    card.addEventListener("click", function () {
        if (card.classList.contains('is-selected')) {
            card.classList.remove('is-selected');
        } else {
            card.classList.add('is-selected');
        }
    })
}
