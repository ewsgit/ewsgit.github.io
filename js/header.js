const element = document.querySelector(".header__component")

window.addEventListener("scroll", (e) => {
  e.preventDefault()
  if (window.scrollY > 0) {
    element.classList.add("sticky-stuck")
  } else {
    element.classList.remove("sticky-stuck")
  }
})