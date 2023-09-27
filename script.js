

window.addEventListener("load", () => {
    $(this).scrollTop(0);
    setTimeout(()=>{
        document.querySelector(".loader").classList.add("loader--hidden");
    }, 1000);
});

$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        }else{
            $("header").removeClass('bgc');
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function(){
    $(window).on('scroll', function(){
        
        $(".active").removeClass('active');

        let homesec = document.querySelector(".home_section");
        let homeheight = homesec.offsetTop + homesec.offsetHeight/3;

        let htmlsec = document.querySelector(".HTML-section");
        let htmlheight = htmlsec.offsetTop + htmlsec.offsetHeight/3;
        
        let csssec = document.querySelector(".CSS-section");
        let cssheight = csssec.offsetTop + csssec.offsetHeight/3;
        
        let bssec = document.querySelector(".BS-section");
        let bsheight = bssec.offsetTop + bssec.offsetHeight/3;
        
        let jssec = document.querySelector(".JS-section");
        let jsheight = jssec.offsetTop + jssec.offsetHeight/3;
        
        let upper = window.scrollY;
        let lower = upper + window.innerHeight;
        
        if (homeheight >= upper && homeheight < lower) {
            $(".home_nav").addClass('active');
        }
        if (htmlheight >= upper && htmlheight < lower) {
            $('.html_nav').addClass('active');
        }
        if (cssheight >= upper && cssheight < lower) {
            $('.css_nav').addClass('active');
        }
        if (bsheight >= upper && bsheight < lower) {
            $('.bs_nav').addClass('active');
        }
        if (jsheight >= upper && jsheight < lower){
            $('.js_nav').addClass('active');
        }
            
    });
});  