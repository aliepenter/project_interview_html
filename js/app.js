window.onscroll = function() { scrHeader() };

var header = document.getElementById("headerDefault");
var sticky = header.offsetTop;

function scrHeader() {
    if (window.pageYOffset > sticky) {
        document.getElementById('headerDefault').classList.add('menufix');
    } else {
        document.getElementById("headerDefault").classList.remove('menufix');
    }
}