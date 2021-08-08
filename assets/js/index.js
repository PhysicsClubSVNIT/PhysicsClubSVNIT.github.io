bgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','7.jpg', '9.jpg', '11.jpg', '12.jpg', '13.jpg'];

isnoti = true;

particlesJS('particles',{
	"particles": {
		"number": {
			"value": 70,
			"density": {
				"enable": true,
				"value_area": 1000
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.7536036686067957,
			"random": false,
			"anim": {
				"enable": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 3,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"bubble": {
				"distance": 400,
				"size": 4,
				"duration": 3,
				"opacity": 8,
				"speed": 3
			},
			"push": {
				"particles_nb": 4
			}
		}
	},
	"retina_detect": false
});






//Mobile Devices...

if ( screen.width <= 501) {
	

	id('of').innerHTML = '<br>of<br>';

//Scrollevent
function chnoti(){	
//Remove noti if already reached new

if (isnoti && id('new').getBoundingClientRect().top <=0.65*screen.height) {
	closenoti();
}


	for(i = 0; i < whites.length; i++ ){
		if(whites[i].getBoundingClientRect().top < window.innerHeight*0.8)
		{
			whites[i].style.opacity = 1;
			whites[i].style.transform = 'translateY(0)';
		}  
	}

	for (var i = offset.length - 1; i >= 0; i--) {
		if(offset[i].getBoundingClientRect().top < window.innerHeight*0.8)
		{
	//offset[i].style.opacity = 1;
	if(offset[i].getAttribute('id')!='pclogo'){
		offset[i].style.transform  = 'translateY(0)';
	}
	else{
		offset[i].style.transform  = 'translateY(0) translateX(-50%)';

	}

	offset[i].style.opacity = 1;
}
}

requestAnimationFrame(chnoti);
};

requestAnimationFrame(chnoti);
}

//Desktop devices...

else{

//Initialising for scrolling scale options

//var initial_height = 0.36*screen.height;
var initial_height = 0.45*window.innerHeight;
var req_height = id("title").getBoundingClientRect().top;
var current_height = id("tit").getBoundingClientRect().top;

//Initialise transforrmations on page load

if (current_height>0) {

	var beg = "scale(";
	var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
	var end = ")"
	inner = beg + val + end;
	id('tit').style.transform = inner;
	id("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
	id("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
	val = (current_height - req_height)/(initial_height - req_height);
	inner = beg + val + end;
	id("of").style.transform = inner;
}
else{

}

//ScrollEvent


requestAnimationFrame(animationloop)


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class',' ');


}

//Common to both desktop and mobile devices


//choose background

var bg = '/assets/images/' + bgs[Math.floor(Math.random() * bgs.length)];
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
	id('topcontent').style.backgroundImage = `url(${bg})`;
});

window.addEventListener('load',()=>{
	try{
		id('l-holder').getBoundingClientRect().top;
		if (id('new').getBoundingClientRect().top <=0.65*screen.height) { isnoti = false;}
			else{setTimeout(function(){opennoti();},1500);}
	}
	catch(e){id('noti').style.display = 'none'; isnoti = false; document.getElementsByClassName('stategrad')[0].style.display = 'none';}
});


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class','noblurbg');

target = id("topcontent")


//animationloop

function animationloop(){

var current_height = id("tit").getBoundingClientRect().top;

	//Transform physics club text

	if (current_height > req_height) {	
		id('tit').style.color = "white";
		id('title').style.color = "transparent";
		var beg = "scale(";
		var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
		var end = ")"
		inner = beg + val + end;
		id('tit').style.transform = inner;
		id("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		id("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		val = (current_height - req_height)/(initial_height - req_height);
		inner = beg + val + end;
		id("of").style.transform = inner;
		id('navbar').setAttribute('class', '');
		id('navbar').style.background = "transparent";
	}
	else{
		if (current_height < req_height-120) {
			id('navbar').style.background = "rgba(255,255,255,0.25)";
			id('navbar').setAttribute('class', 'blurback');
			id('title').style.color = "white";
		}
		else{
			id('navbar').style.background = "transparent";
			id('navbar').style.backdropFilter = "";
			id('bar1').style.background = "white";
			id('bar2').style.background = "white";
			id('bar3').style.background = "white";
			id('title').style.color = "white";
			id('tit').style.color = "transparent";
			id('navbar').setAttribute('class', '');
		}
	}

	if ( isnoti && id('new').getBoundingClientRect().top <=0.65*screen.height) {
		closenoti();
	}

	for(i = 0; i < whites.length; i++ ){
		if(whites[i].getBoundingClientRect().top < window.innerHeight*0.8)
		{
			whites[i].style.opacity = 1;
			whites[i].style.transform = 'translateY(0)';
		}  
	}

	for (var i = offset.length - 1; i >= 0; i--) {
		if(offset[i].getBoundingClientRect().top < window.innerHeight*0.8)
		{
	//offset[i].style.opacity = 1;
	if(offset[i].getAttribute('id')!='pclogo'){
		offset[i].style.transform  = 'translateY(0)';
	}
	else{
		offset[i].style.transform  = 'translateY(0) translateX(-50%)';

	}

	offset[i].style.opacity = 1;
}
}

	requestAnimationFrame(animationloop);
}

whites = document.getElementsByClassName('scrollR');

offset = document.getElementsByClassName('offsetdown');

for (var i = offset.length - 1; i >= 0; i--) {
	offset[i].style.transition = 'all 2s';
	offset[i].style.opacity = 0;
	if(offset[i].getAttribute('id')!='pclogo'){
		offset[i].style.transform  = 'translateY(50px)';
	}
	else{
		offset[i].style.transform  = 'translateY(50px) translateX(-50%)';

	}
}

for (var i = whites.length - 1; i >= 0; i--) {
	whites[i].style.transition = 'all 1s';
	whites[i].style.opacity = 0;
	whites[i].style.transform  = 'translateY(75px)';
}

const observer = lozad(); 
observer.observe();


function opennoti(){
	if(screen.width>500){
		document.getElementById('bell').style.transform = 'translateX(0)';
		document.getElementById('chwd').style.animation = 'clippath forwards 0.8s';
	}
	else{
		document.getElementById('noti').style.transform = 'translateY(0)';
	}
}

function closenoti(){
	if(screen.width>500){
		document.getElementById('bell').style.transform = 'translateX(945%)';
		document.getElementById('chwd').style.animation = 'clippathrem forwards 0.8s'
		setTimeout(function(){document.getElementById('noti').style.visibility="hidden";},1000);
	}else{
		document.getElementById('noti').style.transform = 'translateY(150%)';
	}
}