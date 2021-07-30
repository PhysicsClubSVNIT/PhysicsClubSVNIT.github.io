//Mobile Devices...

if ( screen.width <= 451) {
	

	id('of').innerHTML = '<br>of<br>';

//Scrollevent
document.addEventListener('scroll', (event) => {
	
//Remove noti if already reached new

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}});
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

//ScrollEvent

var spaceship_init = id('spaceship').getBoundingClientRect().top;

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

	//test parallax

	var scrolltotop = document.scrollingElement.scrollTop;
	var target = id("topcontent");
	var xvalue = "center";
	var factor = 0.5;
	var yvalue = scrolltotop * factor;
	target.style.backgroundPosition = xvalue + " " + yvalue + "px";
	if(screen.width>750){
	var target2 = id("spaceship");
	var xvalue = "center";
	var factor = -0.6;
	var yvalue = (scrolltotop + spaceship_init)* factor;
	target2.style.backgroundPosition = xvalue + " " + yvalue + "px";
	}

/*
	if (scroly<50) {
		id('navbar').style.background = "transparent";
	}
	*/
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

	}
	else{
		if (current_height < req_height-120) {
			id('navbar').style.background = "rgba(255,255,255,0.25)";
			id('navbar').setAttribute('class', 'blurback');
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

//Bringe in content
/*
var content = id("content").querySelectorAll(".offsetdown");
for (var i = 0; i<content.length; i++) {
	if(content[i].getBoundingClientRect().top <=0.65*screen.height){
		content[i].style.opacity = 1;
		content[i].style.transform = 'translateY(0)';
	}
}
*/

//Close noti if already seen new

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}


});

//initialise navbar properties

id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class',' ');

//update navbar status based on position
/*
function navbarloop(){
	var current_height = id('tit').getBoundingClientRect().top;
	if (current_height >req_height) {
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
		id('title').style.color = "white";
		id('tit').style.color = "transparent";
	}
	setTimeout(function(){navbarloop();},100);
}
navbarloop();
*/

}

//Common to both desktop and mobile devices


//choose background

var num = Math.ceil(12*Math.random());
var bg = '/assets/images/' + num + '.jpg';
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
	id('topcontent').style.backgroundImage = `url(${bg})`;
});

//Read from latest.json and write in html entity
/*
var oXHR = new XMLHttpRequest();
var index;

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "/assets/json/index.json", true);  // get json file.
oXHR.send();


function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
    	indexdata = this.responseText;
    	index = JSON.parse(indexdata).index;
    	writepage();
    }
}
function writepage(){

	if(index[0].title !== " " && index[0].title !== ''){
		id('l-image').setAttribute('src', '/assets/posters/' + index[0].poster + '.png');
		id('l-title').innerHTML = index[0].title; 
		id('l-date').innerHTML = index[0].date;
		id('l-descr').innerHTML = index[0].descr + '<br><br><a id="l-reg" href="' + index[0].link + '">' + index[0].linktitle + '</a>';
	}
	else{
		id('newhead').style.display = 'none';
	}

	id('name-hod').innerHTML = index[1].name;
	id('state-hod').innerHTML = index[1].message;

	id('name-fac').innerHTML = index[2].name;
	id('state-fac').innerHTML = index[2].message;
}
*/

function closenoti(){
	id('noti').setAttribute('class','noticlose');
}

function opennoti(){
	id('noti').setAttribute('class','notiopen');

}

window.addEventListener('load',()=>{
	try{
		id('l-holder')
		if (id('new').getBoundingClientRect().top <=0.65*screen.height) {}
		else{setTimeout(function(){opennoti();},500);}
	}
	catch(e){}
});


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class','noblurbg');

ScrollReveal({ delay: 100, duration: 1000, distance:'10px', viewFactor: 0.15}).reveal('.offsetdown')
ScrollReveal({ delay: 0, duration: 2000, distance:'150px', viewFactor: 0.15}).reveal('.scrollR')

var scrolltotop = document.scrollingElement.scrollTop;
var target = id("topcontent");
var xvalue = "center";
var factor = 0.5;
var yvalue = scrolltotop * factor;
target.style.backgroundPosition = xvalue + " " + yvalue + "px";

if(screen.width >= 750){
	var target2 = id("spaceship");
	var factor = -0.6;
	var yvalue = (scrolltotop + spaceship_init)* factor;
	target2.style.backgroundPosition = xvalue + " " + yvalue + "px";

}

particlesJS('stateholder',{
  "particles": {
    "number": {
      "value": 100,
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
      "polygon": {
        "nb_sides": 3
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
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
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
      "speed": 6,
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
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 3,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
