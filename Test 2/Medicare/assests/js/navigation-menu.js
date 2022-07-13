let visibility = false;

const menuBar = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".logo-nav__list");
const navMenu = document.querySelector(".logo-nav__menu");
const opacityType = document.querySelector("main")
const opacityType2 = document.querySelector("footer")
const rotatePoint = document.querySelector("#fa-solid");
const rotateSubpoint = document.querySelector("#fa-sub-solid");
const dropDown = document.querySelector(".logo-nav__drop--down");
const subDrop = document.querySelector(".logo-nav__sub--menu");

menuBar.addEventListener("click", () => {
    visibility = !visibility;
    if(visibility){
        menuBar.classList.add("animate-menu");
        navList.classList.add("list-nav")
        navMenu.classList.add("menu-nav")
        opacityType.classList.add("opacity-less");
        opacityType2.classList.add("opacity-less");
    }
    else{
        menuBar.classList.remove("animate-menu");
        navList.classList.remove("list-nav")
        navMenu.classList.remove("menu-nav")
        opacityType.classList.remove("opacity-less");
        opacityType2.classList.remove("opacity-less");
    }
});

rotatePoint.addEventListener("click", () => {
    visibility = !visibility;
    if(visibility){
        rotatePoint.classList.add("rotate-up")
        dropDown.classList.add("show-drop-down");
    }
    else{
        rotatePoint.classList.remove("rotate-up")
        dropDown.classList.remove("show-drop-down");
    }
});


rotateSubpoint.addEventListener("click", () => {
    visibility = !visibility;
    if(visibility){
        rotateSubpoint.classList.add("sub-rotate-up")
        subDrop.classList.add("show-sub-drop");
    }
    else{
        rotateSubpoint.classList.remove("sub-rotate-up")
        subDrop.classList.remove("show-sub-drop");
    }
});
