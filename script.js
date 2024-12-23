document.addEventListener("DOMContentLoaded", function () {
    // 给按钮增加动画效果
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            ctaButton.style.transform = 'scale(1.05)';
        });
        ctaButton.addEventListener('mouseleave', function() {
            ctaButton.style.transform = 'scale(1)';
        });
    }
});
