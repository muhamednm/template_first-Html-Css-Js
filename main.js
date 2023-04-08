
// start to show navbare 

let showNav = document.querySelector(".icon");
let list = document.querySelector(".navbar");


showNav.addEventListener("click", () => {

        list.classList.toggle("show")
    
})

// end to show navbare 

// start to scroll down 

let link = document.querySelectorAll(".links")

link.forEach((item) => {
    item.addEventListener("click", () => {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });




    });

});

/* end to scroll down */



/* start to scroll top */

const upTop = document.querySelector("#up");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.scrollY > 300) {
        upTop.style.right = "10px";
    }
    else {
        upTop.style.right = "-50px";

    };
};

upTop.addEventListener("click", topFunction);

function topFunction() {

    window.scrollTo(0, 0);

}
/* end to scroll top */






