document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-event, .card-events");

    function revealCards() {
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 100) { 
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Trigger on page load in case some cards are already in view
});