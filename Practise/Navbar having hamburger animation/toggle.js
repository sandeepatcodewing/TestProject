let visibility = false;

const animationAdd = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation-list");

const containerOpacity = document.querySelector(".sec");

const navMenu = document.querySelector(".navigation-menu");

animationAdd.addEventListener("click", () => {
    if(visibility = !visibility){
        animationAdd.classList.add("animation");
        navList.classList.add("list-nav");
        navMenu.classList.add("menu-nav");
        containerOpacity.classList.add("opacity-less");
    }
    else{
        animationAdd.classList.remove("animation")
        navList.classList.remove("list-nav");
        navMenu.classList.remove("menu-nav");
        containerOpacity.classList.remove("opacity-less");
    }
});