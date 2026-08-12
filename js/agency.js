/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var target = $anchor.attr('href');
        if (!target || target.charAt(0) !== '#' || !$(target).length) {
            return;
        }
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Subtle hero background zoom/parallax on scroll
(function() {
    var hero = document.querySelector('header');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!hero || reduceMotion.matches) {
        return;
    }

    function updateHeroBackground() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var progress = Math.min(scrollY / hero.offsetHeight, 1);
        var scale = 1 + progress * 0.2;
        var translateY = progress * 28;

        hero.style.setProperty('--hero-scale', scale.toFixed(3));
        hero.style.setProperty('--hero-y', translateY.toFixed(1) + 'px');
    }

    updateHeroBackground();
    window.addEventListener('scroll', updateHeroBackground, { passive: true });
})();

// Typewriter line in the hero section
(function() {
    var typewriter = document.querySelector('.hero-typewriter');

    if (!typewriter) {
        return;
    }

    var text = typewriter.getAttribute('data-typewriter-text') || '';
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
        typewriter.textContent = text;
        typewriter.classList.add('is-complete');
        return;
    }

    var index = 0;

    function typeNextCharacter() {
        typewriter.textContent = text.slice(0, index);
        index += 1;

        if (index <= text.length) {
            window.setTimeout(typeNextCharacter, 90);
            return;
        }

        window.setTimeout(function() {
            typewriter.classList.add('is-complete');
        }, 700);
    }

    window.setTimeout(typeNextCharacter, 900);
})();
