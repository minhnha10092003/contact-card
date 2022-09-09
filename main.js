const button = document.querySelector("button")
const metaSocial = document.querySelector(".metab-social")
const iconClose = document.querySelector(".close")
button.addEventListener("click", (event) => {
    metaSocial.classList.add("isShow")
})
iconClose.addEventListener("click", (event) => {
    metaSocial.classList.remove("isShow")
})
