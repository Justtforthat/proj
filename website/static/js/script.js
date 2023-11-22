var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
function myFunction() {
  var elements = document.getElementsByClassName('loh');
  for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
}
function myFfunction() {
  document.getElementById("frm1").reset();
}
