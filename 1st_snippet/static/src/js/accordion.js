(function () {
    'use strict';
    var website = openerp.website;
    var _t = openerp._t;

    website.ready().then(function () {
    
        function show_accordion() {
            var acc = document.getElementsByClassName("accordion-section-title");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        }
        website.if_dom_contains('section.snippet_accordion', function ($el) {
            show_accordion();
        });
    });

}());
