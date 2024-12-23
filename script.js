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

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://i.postimg.cc/gjjD1f32/webwxgetmsgimg-13.jpg",
        "https://i.postimg.cc/wv6FQtvJ/webwxgetmsgimg-11.jpg",
        "https://i.postimg.cc/k5NfSNnq/webwxgetmsgimg-10.jpg",
        "https://i.postimg.cc/brwCpGf8/webwxgetmsgimg-5.jpg",
    ];

    let index = 0;
    const hero = document.querySelector(".hero");

    // 设置初始背景图片
    hero.style.backgroundImage = `url(${images[index]})`;

    function changeBackground() {
        index = (index + 1) % images.length; // 循环切换图片
        hero.style.backgroundImage = `url(${images[index]})`;
    }

    // 每 4 秒切换图片
    setInterval(changeBackground, 4000);
});


