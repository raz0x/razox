const minPerSlide = 4;
const parent = document.querySelector(".carousel-inner");

document.querySelectorAll('.carousel-item').forEach(function (item) {
    let next = item.nextElementSibling;
    if (!next) {
        next = parent.querySelector(".carousel-item");
    }
    let clone = next.querySelector("figure").cloneNode(true);
    item.appendChild(clone)

    for (var i = 0; i < minPerSlide; i++) {
        next = next.nextElementSibling;
        if (!next) {
            next = parent.querySelector(".carousel-item");
        }
        clone = next.querySelector("figure").cloneNode(true);
        item.appendChild(clone)
    }
});
