const heroSwiper = new Swiper('#banner .heroSwiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 0
});

//tour-gallery Hero Slider
const tourGallerySwiper = new Swiper('#tour-gallery .heroSwiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    parallax: true,
    loop: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 0
});

// Tour Schedule
const tourScheduleSwiper = new Swiper("#tour-schedule .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".tour-schedule-next",
        prevEl: ".tour-schedule-prev",
    },
    pagination: {
        el: ".tour-schedule-pagination",
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});
// Popular Day Trips
const popularDayTripsSwiper = new Swiper(".popular-day-trips", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".popular-day-trips-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

// Featured Tours
const featuredToursSwiper = new Swiper('#featured .holiday-tours-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: ".holiday-tours-swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Tour Activity
const tourActivitySwiper = new Swiper('#tour-activity .tour-activity-swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
    grid: {
        rows: 2,
        fill: 'row'
    },
    navigation: {
        nextEl: '.tour-activity-swiper-next',
        prevEl: '.tour-activity-swiper-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2
            }
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 2
            }
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 2
            }
        }
    }
});

// Recent Post
const recentPostSwiper = new Swiper("#recent-post .recent-post-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".recent-post-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});

// Traveller Choice
const travellerChoiceSwiper = new Swiper("#traveller-choice .traveller-choice", {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: ".traveller-choice-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

// Tours Destination
const toursDestinationSwiper = new Swiper(".tours-destination", {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: ".tours-destination-next",
        prevEl: ".tours-destination-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// Testimonials
const testimonialsSwiper = new Swiper(".testimonials", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".testimonials-pagination",
        clickable: true,
    },
});

// Select2
$(document).ready(function () {
    $('#tourSelect').select2({
        placeholder: "Select Tour Type",
        allowClear: true
    });
});

// Flatpickr
flatpickr("#calendarInput", {
    dateFormat: "d M, Y", // Format like 13 May, 2025
    defaultDate: "2025-05-13"
});