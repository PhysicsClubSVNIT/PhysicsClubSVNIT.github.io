
var blurred = [];
var notblurred = [];

var isnotblur;

if( screen.width >= 691){
    init();

    ScrollReveal({ reset: true, delay: 100, opacity: 0, viewFactor:0.1, viewOffset: {
        top: 50
    } }).reveal('.event');

}
else{
    ScrollReveal({ reset: true, delay: 100, opacity: 0}).reveal('.item');
}

const observer = lozad(); 
observer.observe();
const coolImage = document.querySelector('.lozad');
observer.triggerLoad(coolImage);


function zoomin(el){
    el.setAttribute('class', 'item zoomnorm')
}


function zoomout(el){
    el.setAttribute('class', 'item zoomout');
}

function init(){

    items = document.getElementsByClassName('item');

    for(i=0; i < items.length; i++){

        if(items[i].getBoundingClientRect().top <0.65*screen.height && items[i].getBoundingClientRect().top >0.1*screen.height){
            items[i].setAttribute('class','item zoomnorm');
            break;
        }
        else{
        }
    }


}

function totop(){
    window.scrollTo(0,0)
}

function totopbutton(){
    if(document.scrollingElement.scrollTop > window.innerHeight){
        id('top').style.opacity = 1;
        id('top').style.pointerEvents = 'auto';
    }
    else{
        id('top').style.opacity = 0;
        id('top').style.pointerEvents = 'none';
    }

    if(window.innerWidth > 481){
        if(id('footer').getBoundingClientRect().top < 0.9*window.innerHeight){
            id('top').style.bottom = '60vh';
        }
        else{
            id('top').style.bottom = '7.5vh';
        }
    }
    else{
       if(id('footer').getBoundingClientRect().top < 0.9*window.innerHeight){
        id('top').style.bottom = '68vh';
    }
    else{
        id('top').style.bottom = '10vw';
    }
}

requestAnimationFrame(totopbutton)
}





requestAnimationFrame(totopbutton)
id('top').style.opacity = 0;
id('top').style.pointerEvents = 'none';


function dropmenu(elemid){
    id(elemid).style.transform = 'scaleY(1)';
    
}

function closemenu(elemid){
    id(elemid).style.transform = 'scaleY(0)';
}