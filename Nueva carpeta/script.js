document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonials .testimonial');
    const prevButton = document.querySelector('.testimonials .prev');
    const nextButton = document.querySelector('.testimonials .next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'flex';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });

    // Mostrar el primer testimonio al cargar la página
    showTestimonial(currentIndex);
});
