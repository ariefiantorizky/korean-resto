const swiper = new Swiper(".pagination-fraction", {
     pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
     },
     // navigation: {
     //      nextEl: ".swiper-button-next",
     //      prevEl: ".swiper-button-prev",
     // },
     grabCursor: true,
     autoplay: {
          delay: 2500,
          disableOnInteraction: false,
     },
     loop: true,
     lazy: true,
});