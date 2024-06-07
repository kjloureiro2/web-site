const contactUs = document.querySelector(".header-top__btn")
const modalWindow = document.querySelector(".modal")
const close = document.querySelector("#close")
const submit = document.querySelector(".modal-window__content_body-btn")
const start = document.querySelector(".banner-btn__start")
const form = document.querySelector(".modal-window__content_body")

contactUs.addEventListener("click", () => {
    modalWindow.classList.add("open")
})

start.addEventListener('click', ()=> {
    modalWindow.classList.add("open")
})

close.addEventListener("click", () => {
    modalWindow.classList.remove("open")
})

//  изменение поведения браузера по умолчанию
submit.addEventListener("click", (e) => {
    e.preventDefault()     
    form.reset()
    modalWindow.classList.remove("open")
})
