document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase animate__animated
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
            if (isElementInViewport(el) && !el.classList.contains('animate__animated--active')) {
                const animationClass = el.getAttribute('data-animate-class');
                if (animationClass) {
                    el.classList.add(animationClass, 'animate__animated--active');
                }
            }
        });
    }

    // Animar al cargar la página y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});