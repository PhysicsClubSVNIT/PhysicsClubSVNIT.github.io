$('#contact').on('submit', function(e) {
  $('#formdiv *').fadeOut(10);
  $('#sent').fadeIn(250);
  $('#necessary').fadeOut(10);
});

$('#sent').fadeOut(10);



if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  var shouldKeepAnimating = true;
  var addClassTimeouts = [];
  var containers = document.querySelectorAll('.container');
  containers = Array.prototype.slice.call(containers, 0);

  setTimeout(setActiveClasses, 500);

  function setActiveClasses() {
    var time = 0;

    if (!shouldKeepAnimating) {
      return;
    }

    addClassTimeouts = [];

    containers.
    forEach(function (container) {

      time += 1000;
      var timeoutId = setTimeout(function () {

        container.classList.add('active');
      }, time);
      addClassTimeouts.push(timeoutId);
    });

    setTimeout(function () {
      clearActiveClasses();
      setTimeout(setActiveClasses, 2000);
    }, time + 2000);
  }

  function clearActiveClasses() {
    containers.forEach(function (container) {
      container.classList.remove('active');
    });
  }

/*
elems = document.getElementsByClassName('labelholder');
for (var i = elems.length - 1; i >= 0; i--) {
  elems[i].style.display = "none";
}
id('contact').style.display = 'block';
id('contact').style.position = 'relative';
id('contact').style.left = '10px';
id('contact').style.justifyContent = 'center';
id('contact').style.width = '100vw';

id('center-social').style.transformOrigin = 'top center';
id('center-social').style.transform = 'scale(0.8)';

inputs = document.getElementsByTagName('input')

for(i = 0; i<inputs.length; i++)
{
inputs[i].style.position = 'relative';
inputs[i].style.marginTop = '2vh';
inputs[i].style.left = '2.5vw';
inputs[i].style.width = '95vw';
inputs[i].style.height = '5vh';
inputs[i].fontSize = '30px';
}*/

id('entry.1632216977').setAttribute('placeholder','Your Name');
id('entry.961639452').setAttribute('placeholder','your@email.id');
id('entry.1769439812').setAttribute('placeholder','Your Message');  

}

id('footer').style.visibility = "hidden";