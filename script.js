const themeBtn = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const overviewHeading = document.querySelector(".overviewHeading");

themeBtn.addEventListener("click", (e) => {
    overviewHeading.style.color = "white";
    document.body.classList.toggle('dark-theme');
    cards.forEach(card => {
        card.classList.toggle("cardDark");        
    })
})