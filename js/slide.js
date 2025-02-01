const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let timeDifference = Date.now();
let currentIndex = 0;

function showSlide(index) {
    // 画像をスライド
    slides.style.transform = `translateX(${-index * 33.33333}%)`;

    // ドットの状態を更新
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// ドットをクリックしたとき
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        timeDifference = Date.now();
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// 自動切り替え（オプション）
setInterval(() => {
    if(Date.now() - timeDifference >= 5000){
        timeDifference = Date.now();
        currentIndex = (currentIndex + 1) % dots.length;
        showSlide(currentIndex);
    }
}, 100); // 5秒ごとに切り替え