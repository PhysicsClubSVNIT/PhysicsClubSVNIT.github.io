function goback(i){
	document.getElementById('back').innerHTML = "Taking you back to safety in 00:0" + i;
	if (i==0) {
		window.history.back();
	}
	else{
		setTimeout(function(){goback(i-1);},1000);
	}
}

window.addEventListener('load',() =>{
	console.log('start');
	document.getElementById('back').style.opacity = 1;
	setTimeout(function(){goback(4);},1000);
});


