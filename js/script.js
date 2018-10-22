// footer copyleft (nova godina se mjenja automatski)
var copyleft = document.querySelector(".copyleft");

// rute za pojedinu stranicu

var route = {
    _routes: {}, // The routes will be stored here
    add: function(url, action) {
        this._routes[url] = action;
    },
    run: function() {
        jQuery.each(this._routes, function(pattern) {
            if (location.href.match(pattern)) {
                // "this" points to the function to be executed
                this();
            }
        });
    }
}
// aktiviraj na svim stranicama (ostaviš prazno i to znači svi linkovi) - sve one stranice na kojima želiš drukčije, postavi ispod ovog koda
route.add("", function() {
      // footer s linkom na mom imenu
      copyleft.innerHTML = "Copyleft <span class='cl'>&copy;</span> " + new Date().getFullYear() + ". - Danijel Gavranović, prof.";
});
// aktiviraj samo kad je na stranici državne mature
// route.add('drzavna-matura.html', function() {
//   // footer s linkom na mom imenu
//   copyleft.innerHTML = "Copyleft <span class='cl'>&copy;</span> " + new Date().getFullYear() + ". - <a href='https://drive.google.com/file/d/1O8OwVKNfRUDQZSPJO5M3XaEa9A1Zrjg2/view?usp=sharing'>Danijel Gavranović, prof.</a>";
// });

// pozivanje route funkcije
route.run();


// ------- Propeller Ripple Effect component js function ------- //
$(document).ready(function() {

    $(".ripple-effect").on('mousedown touchstart', function(e) {
        var rippler = $(this);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;
        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");

        setTimeout(function() {
            ink.remove();
        }, 1500);
    });
});

// dodaje na sve .btn class ripple-effect
function rippleEffect() {
    let ripple = document.querySelectorAll(".portfolio-item"),
        linkovi = document.querySelectorAll("a");

    for (let i = 0; i < ripple.length; i++) {
        ripple[i].classList += " ripple-effect";
    }
    for (let i = 0; i < linkovi.length; i++) {
        linkovi[i].classList += " ripple-effect";
    }
}
rippleEffect();
