const skillCards = document.querySelectorAll(".skill-card");

const message = document.querySelector("#selected-skill");

skillCards.forEach((card) => {
    card.addEventListener("click", () => {

        skillCards.forEach((item) => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        message.textContent = "You selected " + card.textContent;
    });
});