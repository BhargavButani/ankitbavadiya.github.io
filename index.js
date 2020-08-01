const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function setTheme() {
    sta = document.getElementById('themeBox').checked;
    if(sta==true){
        document.documentElement.style.setProperty('--clr-light','#000');
        document.documentElement.style.setProperty('--clr-dark','#fff');
    }
    else{
        document.documentElement.style.setProperty('--clr-light','#fff');
        document.documentElement.style.setProperty('--clr-dark','#000');   
    }
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('cp').scrollLeft += 1000;
    };
    buttonLeft.onclick = function () {
      document.getElementById('cp').scrollLeft -= 1000;
    };
