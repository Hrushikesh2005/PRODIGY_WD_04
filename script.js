function openNav() {
    document.getElementById("mysidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mysidenav").style.width = "0";
}

// Function to handle scroll and update active link
function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
document.addEventListener("DOMContentLoaded", updateActiveLink);

/*the scroll effect*/
let scrollContainer = document.querySelector(".skills_list");
let back_btn = document.getElementById("back_btn");
let forward_btn = document.getElementById("forward_btn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 10;
    scrollContainer.style.scrollBehavior = "auto";
});

back_btn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

forward_btn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});