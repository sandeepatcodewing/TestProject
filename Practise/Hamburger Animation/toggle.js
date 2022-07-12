let visibility = false;

const animateClick = document.querySelector(".hamburger");

animateClick.addEventListener("click", () => {
    visibility = !visibility
    if(visibility){
        animateClick.classList.add("animate");
    }
    else{
        animateClick.classList.remove("animate");
    }
});