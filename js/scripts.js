console.log("Welcome to my Portfolio!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  var windowWidth = window.innerWidth
  if (x.className === 'navtoggle' && windowWidth < 641) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
