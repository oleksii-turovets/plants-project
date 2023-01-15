

let accordions = document.querySelectorAll(".accordion");
// console.log(accordions);

accordions.forEach(item => {
    addQueMarkToEllipsis(item);
  
  window.addEventListener("resize", function () {
      addQueMarkToEllipsis(item);
  });
    
  item.addEventListener("click", function () {
      item.classList.toggle("active");
      let panel = item.nextElementSibling;
      panel.classList.toggle("show");
      addQueMarkToEllipsis(item);
  })
    
});

function addQueMarkToEllipsis(item) {
  let firstChild = item.firstElementChild;
  if (
    firstChild.offsetWidth < firstChild.scrollWidth &&
    !item.classList.contains("active")
  ) {
    item.classList.add("active-ellipsis");
  } else {
    item.classList.remove("active-ellipsis");
  }
}
