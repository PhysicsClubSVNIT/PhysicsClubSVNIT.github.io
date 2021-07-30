sliders = document.getElementsByClassName('slider');
alumsliders = document.getElementsByClassName('slider2');


for(i=0; i< sliders.length; i++){
    new Splide( sliders[i], {
        speed: 10,
        lazyLoad: 'nearby',
        pagination: false,
        type   : 'slide',
        trimSpace: true,
        rewind: true,
        perPage: 4,
        start: 0,
        focus  : 'center',
        arrow: true,
        gap: '30px',
        breakpoints: {
            1000:{
                perPage: 3,
            },
            760: {
                perPage: 2,
            },
            450: {
                perPage: 1,
            },
        }} ).mount();

}

for(i=0; i< alumsliders.length; i++){
    new Splide( alumsliders[i], {
        speed: 10,
        lazyLoad: 'nearby',
        pagination: false,
        type   : 'slide',
        trimSpace: true,
        rewind: true,
        perPage: 4,
        start: 0,
        focus  : 'center',
        arrow: true,
        gap: '30px',
        breakpoints: {
            1000:{
                perPage: 3,
            },
            760: {
                perPage: 2,
            },
            450: {
                perPage: 1,
            },
        }} ).mount();

}

arrows = document.getElementsByTagName('button')
function enabled(){
    for(i=0;i<arrows.length;i++){
        arrows[i].removeAttribute("disabled");
    }

    setTimeout(function(){enabled();},1000/60);

}

enabled();