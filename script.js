const menuBtn = document.querySelector("#menu-btn")
const menuUl = document.querySelector("nav .navigation ul")
const menuClose = document.querySelector("#menu-close")

menuBtn.addEventListener("click", () => {
  console.log('1111111clicked')
  menuUl.classList.add("active")
})

menuClose.addEventListener("click", () => {
  console.log('222222222clicked')
  menuUl.classList.remove("active")
})