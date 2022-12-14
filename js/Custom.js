'use strict';

// Reactive Navbar Color
window.addEventListener('scroll', function () {

  if (window.scrollY < 900) {
    document.querySelector('#nav-about').classList.add('active');
    document.querySelector('#nav-about').classList.add('text-muted');
  } else {
    document.querySelector('#nav-about').classList.remove('active');
    document.querySelector('#nav-about').classList.remove('text-muted');
  }

  if (window.scrollY >= 900 && window.scrollY < 1400) {
    document.querySelector('#nav-resume').classList.add('active');
    document.querySelector('#nav-resume').classList.add('text-muted');
  } else {
    document.querySelector('#nav-resume').classList.remove('active');
    document.querySelector('#nav-resume').classList.remove('text-muted');
  }

  if (window.scrollY >= 1400 && window.scrollY < 2200) {
    document.querySelector('#nav-coursework').classList.add('active');
    document.querySelector('#nav-coursework').classList.add('text-muted');
  } else {
    document.querySelector('#nav-coursework').classList.remove('active');
    document.querySelector('#nav-coursework').classList.remove('text-muted');
  }

  if (window.scrollY >= 2200 && window.scrollY < 2874) {
    document.querySelector('#nav-experience').classList.add('active');
    document.querySelector('#nav-experience').classList.add('text-muted');
  } else {
    document.querySelector('#nav-experience').classList.remove('active');
    document.querySelector('#nav-experience').classList.remove('text-muted');
  }

  if (window.scrollY >= 2874) {
    document.querySelector('#nav-contact').classList.add('active');
    document.querySelector('#nav-contact').classList.add('text-muted');
  } else {
    document.querySelector('#nav-contact').classList.remove('active');
    document.querySelector('#nav-contact').classList.remove('text-muted');
  }
});

/* Popup Window */
function newPopup(url) {
  popupWindow = window.open(
    url,
    'popUpWindow',
    'height=450,width=700,left=200px,top=-750px,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes'
  );
}
