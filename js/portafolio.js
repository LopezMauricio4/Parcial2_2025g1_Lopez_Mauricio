document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.animate__animated');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        animateElements.forEach(el => {
            if (isElementInViewport(el) && !el.classList.contains('animated-once')) {
                const animationClass = el.getAttribute('data-animate-class');
                if (animationClass) {
                    el.classList.add(animationClass, 'animated-once');
                }
            }
        });
    }

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
