function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}
ibg();

$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
            	items: 1,
            	loop: true,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplaySpeed: 800,
            });
        });
