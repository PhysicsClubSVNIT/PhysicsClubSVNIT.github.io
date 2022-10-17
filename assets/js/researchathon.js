function id(aidee){
    return document.getElementById(aidee);
}

function docload(){

    id('descr').style.opacity = 1;
    id('research').style.opacity = 1;
    id('descr').style.transform = 'translateY(0)';
    id('research').style.transform = 'translateY(0)';
}
setTimeout(docload, 100)

function textin(){
    
    id('text').style.opacity = 1;
    id('text').style.transform = 'translateX(0)';
}

function calin(){
    id('cal').style.opacity = 1;
    id('cal').style.transform = 'translateX(0)';
}

function calin(){
    id('cal').style.opacity = 1;
    id('cal').style.transform = 'translateX(0)';
}

function chtext(){
    if (id('text').getBoundingClientRect().top <= 0.65*screen.height){
        textin();
    }
    else{
        requestAnimationFrame(chtext);
    }
}
requestAnimationFrame(chtext);

function chcal(){
    if (id('cal').getBoundingClientRect().top <= 0.65*screen.height){
        calin();
    }
    else{
        requestAnimationFrame(chcal);
    }
}
requestAnimationFrame(chcal);

function catchin(){
    id('catch').style.opacity = 1;
}

function chcatch(){
    if (id('catchback').getBoundingClientRect().top <= 0.65*screen.height){
        catchin();
    }
    else{
        requestAnimationFrame(chcatch);
    }
}
requestAnimationFrame(chcatch);

function nextin(){
    id('innext').style.transform = 'translateY(0)';
    id('innext').style.opacity = 1;
}

function chnext(){
    if (id('next').getBoundingClientRect().top <= 0.65*screen.height){
        nextin();
    }
    else{
        requestAnimationFrame(chnext);
    }
}
requestAnimationFrame(chnext);