document.addEventListener('DOMContentLoaded', () => {
    // 太陽のアニメーション
    const sun = document.querySelector('.sun');
    animateSun(sun);

    // 雲のアニメーション
    animateClouds();

    // スクロールアニメーション
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
            document.querySelector('.hero-container').style.transform = `translateY(${scrollY * 0.5}px)`;
            document.querySelector('.hero-content').style.transform = `translateY(${scrollY * -0.2}px)`;
            document.querySelector('.hero-content').style.opacity = 1 - scrollY * 0.003;
        }
    });

    // CTAボタンのホバーエフェクト
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'translateY(-5px)';
        ctaButton.style.boxShadow = '0 8px 25px rgba(255, 126, 95, 0.7)';
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'translateY(-3px)';
        ctaButton.style.boxShadow = '0 6px 20px rgba(255, 126, 95, 0.6)';
    });

    // 検索ボックスのフォーカスエフェクト
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-box input');

    searchInput.addEventListener('focus', () => {
        searchBox.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        searchBox.style.width = '150px';
    });

    searchInput.addEventListener('blur', () => {
        searchBox.style.boxShadow = 'none';
        searchBox.style.width = 'auto';
    });
});

// 太陽のアニメーション関数
function animateSun(sun) {
    let scale = 1;
    let increasing = false;

    setInterval(() => {
        if (scale >= 1.05) {
            increasing = false;
        } else if (scale <= 0.95) {
            increasing = true;
        }

        scale += increasing ? 0.001 : -0.001;
        sun.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }, 50);
}

// 雲のアニメーション関数
function animateClouds() {
    const clouds = document.querySelector('.clouds');
    let position = 0;

    setInterval(() => {
        position += 0.1;
        if (position > 100) position = 0;
        clouds.style.backgroundPosition = `${position}% 0`;
    }, 100);
} 