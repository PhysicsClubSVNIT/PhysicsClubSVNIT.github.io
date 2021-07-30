 // Create XMLHttpRequest object.
 /*
    var oXHR = new XMLHttpRequest();
    var events;

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/team.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
            membersdata = this.responseText;
            membersdata = JSON.parse(membersdata);
            writepage();
        }
    }

function writepage(){

    members = membersdata.members
    var inner = '';

    for(i = members.length - 1; i>=0; i--){

        inner += '<div class="splide__slide"><div class="member"><center><img class="image" data-splide-lazy="/assets/Team/' + members[i].image + '"><div class="name">' + members[i].name + '</div><div class="batch">' + members[i].batch + '</div><div class="soc"><div class="insta"><a class="customico fa fa-instagram" href="' + members[i].insta + '"></a></div><div class="facebook"><a class="customico fa fa-facebook" href = "' + members[i].fb + '"></a></div></div></center></div></div>'

    }

    id('current').innerHTML = inner;

    inner = '';
    alumnus = membersdata.exmembers;

    if(alumnus.length == 0){ id('alumnus').style.display = 'none'; }
    else{
        for(i = alumnus.length - 1; i>=0; i--){
        inner += '<div class="splide__slide"><div class="member"><center><img class="image" data-splide-lazy="/assets/Team/' + alumnus[i].image + '"><div class="name">' + alumnus[i].name + '</div><div class="batch">' + alumnus[i].batch + '</div><div class="soc"><div class="insta"><a class="customico fa fa-instagram" href="' + alumnus[i].insta + '"></a></div><div class="facebook"><a class="customico fa fa-facebook" href = "' + alumnus[i].fb + '"></a></div></div></center></div></div>'
    }
    id('ex').innerHTML = inner;

    var exmembers = new Splide( '#splide2', {
        speed: 10,
        lazyLoad: 'nearby',
        pagination: false,
   type   : 'loop',
    perPage: 4,
    focus  : 'center',
    arrow:true,
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

*/

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