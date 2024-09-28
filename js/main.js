
$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        var $img = $(".stciky .logo-nav")


        $nav.toggleClass('stciky', $(this).scrollTop() > $nav.height());
        //logiv to change attr 
        var isSticky = $(this).scrollTop() > $nav.height();
        var isMobile = $(window).width() <= 992;

        if (isSticky || isMobile) {
            $img.attr('src', 'images/DG-Logo.png');
         
        } else {
            $img.attr('src', "images/DG-Logo.png");
        }
    });
    /* for mobile img logo*/
    function logochange() {
        var isMobile = $(window).width() <= 992;
        if (isMobile) {
            //$("header").addClass('stciky');
            $(".logo-nav").attr('src', 'images/DG-Logo.png');
        }
    }
    /* for banner video */
    document.getElementById("banner-video").play();

    $(".scroll-top-form").click(function () {
        $('html, body').animate({
            scrollTop: $("#grynow-home-form").offset().top
        }, 2000);
    });

    $(document).ready(function () {
        logochange()
        $(".dropdown-toggle-btn").click(function () {
            // $("ul.dropdown-menu").removeClass("active");
            $(this).next('ul.dropdown-menu').toggleClass("active");
        });
    });
});

function redirectToBrand() {
    var brand = document.getElementById("brand");
    // brand.href = "./contact.php"
    window.location.href = "/contact-us.html"
    localStorage.setItem("source", "brand");
    console.log("local storage in brand ", localStorage.getItem("source"));
}

//accod section
const accordionHeaders = document.querySelectorAll('.accod-head');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const panel = header.parentElement;
        const isActive = panel.classList.contains('active');
        const icon = header.querySelector('i');
        const allPanels = document.querySelectorAll('.accod-panel');

        // Close all panels
        allPanels.forEach(item => {
            item.classList.remove('active');
            const itemIcon = item.querySelector('i');
            itemIcon.classList.remove('fa-minus');
            itemIcon.classList.add('fa-plus');
        });

        // Toggle active class for clicked panel
        if (!isActive) {
            panel.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }

        // Close panel if it's already active
        else {
            panel.classList.remove('active');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

function redirectToCreator() {
    var creator = document.getElementById("creator");
    // creator.href = "./contact.php"
    window.location.href = "/contact-us.html"
    localStorage.setItem("source", "creator");
    console.log("local storage in creator ", localStorage.getItem("source"));
}

function toggle_read_more(className) {
    const readMore = document.getElementById(className);
    readMore.parentElement.classList.toggle('active');
    if (readMore.textContent === 'See Less') {
        readMore.innerText = 'See More'
    } else {
        readMore.innerText = 'See Less'
    }
}

var swiper = new Swiper(".testiSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // for lazy load
    preloadImages: false,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.3,
            spaceBetween: 15,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2.3,
            spaceBetween: 15,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 2.3,
            spaceBetween: 15,
            centeredSlides: true,
        },
        1200: {
            slidesPerView: 2.3,
            spaceBetween: 1,
            centeredSlides: true,
            spaceBetween: 20,
        },
    },
});



function enableGetSpoBtn() {
    document.getElementById("getSpoBtn").disabled = false;
}
function enableGetInfBtn() {
    document.getElementById("getInfBtn").disabled = false;
}


function checkSource() {
    console.log("check source called ", localStorage.getItem("source"));
    if (localStorage.getItem("source") === "brand") {
        $('#pills-creators-tab').removeClass("active");
        $('#pills-creators').removeClass("show");
        $('#pills-creators').removeClass("active");
        $('#pills-brands-tab').addClass("active");
        $('#pills-brands').addClass("show");
        $('#pills-brands').addClass("active");
    } else if (localStorage.getItem("source") === "creator") {
        $('#pills-brands-tab').removeClass("active");
        $('#pills-brands').removeClass("show");
        $('#pills-brands').removeClass("active");
        $('#pills-creators-tab').addClass("active");
        $('#pills-creators').addClass("show");
        $('#pills-creators').addClass("active");
    }
}
async function enableGetSpoBtn() {
    const response = await grecaptcha.getResponse();
    console.log("response ", response)
    if (response.length == 0) {
        //reCaptcha not verified
        alert("please verify you are human!");
        return false;
    }
    console.log("response ", response);
    document.getElementById("getSpoBtn").disabled = false;
}
async function enableGetInfBtn() {
    const response1 = await grecaptcha.getResponse();
    if (response1.length == 0) {
        //reCaptcha not verified
        alert("please verify you are human!");
        return false;
    }
    console.log("response ", response1);
    document.getElementById("getInfBtn").disabled = false;
}
checkSource()


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.brand-card-wrapper');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('always-hover'));
            card.classList.add('always-hover');
        });

        card.addEventListener('mouseleave', () => {
            if (![...cards].some(c => c.matches(':hover'))) {
                cards[0].classList.add('always-hover');
            }
        });
    });
});
var initializeinfluswiper = new Swiper('.swiper-initialize-influ', {
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
        1920: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 4.5
        },
        486: {
            slidesPerView: 1
        },
        320: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 8000, // Set the autoplay delay in milliseconds (3 seconds in this case)
        disableOnInteraction: false // Allow manual navigation to stop autoplay
    },
    loop: true // Enable the loop to repeat when it reaches the last slide
});



document.addEventListener("DOMContentLoaded", function () {
    let lazyVideos = [...document.querySelectorAll("video.lazy")]

    if ("IntersectionObserver" in window) {
        let lazyVideoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (let source in video.target.children) {
                        let videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});
