let burgerNav = document.querySelector(".burger-nav")
let burger = document.getElementById("burger")
let navList = document.querySelector(".nav-list")
let closeBtn = document.getElementById("close_icon")

let isFlag = false

burgerNav.addEventListener("click", () => {
    if(isFlag) {
        navList.style.left = "-170px"
        closeBtn.style.display = "none"
        burger.style.display = "block"
        isFlag = false 
    } else {
        navList.style.left = "0"
        burger.style.display = "none"
        closeBtn.style.display = "block"
        isFlag = true 
    }
})