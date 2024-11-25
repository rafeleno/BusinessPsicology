let news_swiper = new Swiper('.news__slider', {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    mousewheel: {
        eventTargent: 'image-slider'
    },

    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView:3,
        spaceBetween: 20,
      },

      431: {
        slidesPerView: 2,
      },

      1: {
        slidesPerView: 1,
      }
    }
  });

  let posts_swiper = new Swiper('.posts__slider', {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    mousewheel: {
        eventTargent: 'image-slider'
    },

    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView:3,
        spaceBetween: 20,
      },
      
      431: {
        slidesPerView: 2,
      },

      1: {
        slidesPerView: 1,
      }
    }
  });

  let seminars_swiper = new Swiper('.siminars_swiper', {
    loop: true,

    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    mousewheel: {
        eventTargent: 'image-slider'
    },

    spaceBetween: 30,
  });