var loader = document.createElement('div');
loader.id = 'loader';
loader.style.height = innerHeight + 'px';
loader.style.width = innerWidth + 'px';

document.body.appendChild(loader);



require(['jquery'], function ($) {

    $(document).ready(function () {

        function addEvent(object, type, callback) {
            if (object == null || typeof (object) == 'undefined') return;
            if (object.addEventListener) {
                object.addEventListener(type, callback, false);
            } else if (object.attachEvent) {
                object.attachEvent("on" + type, callback);
            } else {
                object["on" + type] = callback;
            }
        };






        function whichAnimationEvent() {
            var t;
            var el = document.createElement('fakeelement');
            var animations = {
                'animation': 'animationend',
                'OTransition': 'oAnimationEnd',
                'MozTransition': 'animationend',
                'WebkitTransition': 'webkitAnimationEnd'
            }

            for (t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        }

        /* Listen for a transition! */
        var animationEvent = whichAnimationEvent();
        animationEvent && loader.addEventListener(animationEvent, function () {
            loader.style.display = "none";
        });







        function adjustSize(target) {
            target.style.width = window.innerWidth + 'px';
            target.style.height = window.innerHeight - 180 + 'px';
            console.log('it workssss');
        }


        addEvent(window, 'resize', function () {
            adjustSize(document.getElementById('hero'));
        });

        adjustSize(document.getElementById('hero'));



    });

});
