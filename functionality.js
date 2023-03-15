const mainContainer = document.querySelector(".box");
const ratingContainer = document.getElementById("ratingBox");
const submitButton = document.getElementById("submitBtn");
const rating = document.getElementById("rating");
const buttonCont = document.querySelectorAll(".button");


submitButton.addEventListener("click", () => {
    ratingContainer.style.display = "block";
    mainContainer.style.display = "none";
})


buttonCont.forEach ((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
