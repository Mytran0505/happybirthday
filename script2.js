// JS để đảm bảo nhạc chơi (nếu trình duyệt chặn autoplay, có thể thêm event)
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.play().catch(() => {
        console.log('Autoplay bị chặn, người dùng cần tương tác.');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = track.innerHTML;
    
    // Nhân bản 2 lần nữa → tổng 3 bộ
    track.innerHTML = images + images + images;
    
    // Optional: điều chỉnh tốc độ nếu thấy nhanh/chậm
    // track.style.animationDuration = '20s'; // ví dụ
});