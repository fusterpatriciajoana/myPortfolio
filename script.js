// =====================================
// PROJECT IMAGE CAROUSEL
// =====================================

let currentImage = 0;

const images =
    document.querySelectorAll(".capstone");

const imageNumber =
    document.getElementById("imageNumber");


function showImage(index) {

    if (index >= images.length) {

        currentImage = 0;

    } else if (index < 0) {

        currentImage = images.length - 1;

    } else {

        currentImage = index;

    }


    images.forEach((image) => {

        image.classList.remove("active");

    });


    images[currentImage]
        .classList.add("active");


    imageNumber.textContent =
        String(currentImage + 1)
        .padStart(2, "0");

}


function changeImage(direction) {

    showImage(
        currentImage + direction
    );

}


// =====================================
// SIMPLE SCROLL REVEAL
// =====================================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.08
        }

    );


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(20px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});