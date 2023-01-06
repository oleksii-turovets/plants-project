

let accordions = document.querySelectorAll(".accordion");
console.log(accordions);

accordions.forEach(item => 
    item.addEventListener("click", function () {
        item.classList.toggle("active");

        let panel = item.nextElementSibling;
        panel.classList.toggle("show");
    })
);
