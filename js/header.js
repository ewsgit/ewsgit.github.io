const element = document.querySelector(".header__component")
const contentContainer = document.querySelector("[page-content]")

window.addEventListener("scroll", (e) => {
  e.preventDefault()
  if (window.scrollY > 0) {
    element.classList.remove("sticky-stuck")
    contentContainer.classList.add("header__pagecontent-not-at-top")
    contentContainer.classList.remove("header__pagecontent-at-top")
  } else {
    element.classList.add("sticky-stuck")
    contentContainer.classList.remove("header__pagecontent-not-at-top")
    contentContainer.classList.add("header__pagecontent-at-top")
  }
})