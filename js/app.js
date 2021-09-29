const app = {
    handleEvents: function() {

        // xu ly fix header menu khi cuon trang
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
        // xu ly icon bars o man hinh mobile
        document.querySelector("#bars").onclick = function() {
            document.getElementById('header-menu-mobile').classList.add('menuMobile');
            document.getElementById('header-menu-mobile').classList.remove('displayNone');
            document.getElementById('opacity-all').classList.remove('displayNone');
        };
        // xu ly icon close o man hinh mobile
        document.querySelector("#close").onclick = function() {
            document.getElementById('header-menu-mobile').classList.remove('menuMobile');
            document.getElementById('header-menu-mobile').classList.add('displayNone');
            document.getElementById('opacity-all').classList.add('displayNone');
        };
        // xu ly click khoang den o man hinh mobile
        document.querySelector("#opacity-all").onclick = function() {
            document.getElementById('header-menu-mobile').classList.remove('menuMobile');
            document.getElementById('header-menu-mobile').classList.add('displayNone');
            document.getElementById('opacity-all').classList.add('displayNone');
        };
    },
    start: function() {
        this.handleEvents();
        console.log(document.querySelector(".banner").clientHeight)
    },
};
app.start();