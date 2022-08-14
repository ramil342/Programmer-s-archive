const header = document.querySelector(".header_in");
const about = document.getElementById("about");
const footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
    let yPosition = window.scrollY;
    if(yPosition > 0 && yPosition < 1481) {
        header.classList.add('changebg');
    } else {
        header.classList.remove('changebg');
    }

    if(yPosition > 1481) {
        footer.classList.add('changebg');
    } else {
        footer.classList.remove('changebg');
    }
    console.log(yPosition);
});

about.addEventListener("click", function() {
    footer.scrollIntoView(false);
});
