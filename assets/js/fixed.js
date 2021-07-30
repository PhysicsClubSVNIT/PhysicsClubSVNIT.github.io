paths = document.querySelectorAll('path');
for(i=0;i<paths.length;i++){

	length = paths[i].getTotalLength();
	paths[i].style.strokeDasharray = length;
	paths[i].style.strokeDashoffset = length;
	paths[i].style.animation = 'animatepath 5s linear alternate infinite';

}
	document.getElementsByClassName('animate')[0].style.opacity = 1;


function id(elemid){
	return document.getElementById(elemid);
}


function removemenu(){
    id("fullscreen").style.display = "none";	
}

function closemenu(){
    id("fullscreen").style.opacity = 0;
	id('fullscreen').style.pointerEvents = 'none';
	id('bar1').style.transform = 'translateX(0px)';
	id('bar2').style.transform = 'translateX(0px)';
	id('bar3').style.transform = 'translateX(0px)';
	id('bar1-mob').style.transform = 'translateX(0px)';
	id('bar2-mob').style.transform = 'translateX(0px)';
	id('bar3-mob').style.transform = 'translateX(0px)';
    setTimeout(function(){removemenu();}, 500);
}

function addmenu(){
    id("fullscreen").style.opacity = 1;	
}

function showmenu(){
	id('bar1').style.transform = 'translateX(100px)';
	id('bar2').style.transform = 'translateX(100px)';
	id('bar3').style.transform = 'translateX(100px)';
	id('bar1-mob').style.transform = 'translateX(100px)';
	id('bar2-mob').style.transform = 'translateX(100px)';
	id('bar3-mob').style.transform = 'translateX(100px)';
	id('fullscreen').style.display = "block";
	setTimeout(function(){addmenu();}, 250);
	id('fullscreen').style.pointerEvents = 'auto';
}


window.addEventListener('load',() =>{
    try{id('loading').style.display = "none";
    id('loading').style.pointerEvents = "none";
	id('loading').remove()}
    catch(err){ }
    document.body.style.overflowY= "auto";
});

/*
var animation;

function startanime(){
	document.getElementsByClassName('animate')[0].style.opacity = 1;
	animation = anime({
  targets: '.animate path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

}

startanime()
*/

