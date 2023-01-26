
/*accordions */

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


/* sliders */

const swiperStaff = new Swiper(".trained-staff-options", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        1600: {
            slidesPerView: 4,
            centeredSlides: false,
        },
    },

    pagination: {
        el: ".staff-slider-bar",
        clickable: true,
        type: "bullets",
    },
});

if (swiperStaff.currentBreakpoint === "1600") {
    swiperStaff.slideTo(0, 0, true);
    swiperStaff.disable();
}

swiperStaff.on("breakpoint", function (swiper, breakpointParams) {
  
  if (breakpointParams.slidesPerView === 4) {
    swiper.slideTo(0, 0, true);
    swiper.disable();
  } else {
    swiper.slideReset(0, false);
    swiper.enable();
  }
});

const swiperClients = new Swiper(".clients-saying-options", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
    },

    pagination: {
        el: ".clients-slider-bar",
        clickable: true,
        type: "bullets",
    },

    navigation: {
        nextEl: ".clients-saying-content .slider-arrows .arrow-right",
        prevEl: ".clients-saying-content .slider-arrows .arrow-left",
    },
});
const swiperArticles = new Swiper(".insights-and-articles-content", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
    },

    pagination: {
        el: ".article-slider-bar",
        clickable: true,
        type: "bullets",
    },
});

const swiperExperienceImgCard = new Swiper(".experience-img .main-img-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "flip",
    autoplay: {
        delay: 3000,
    },
});