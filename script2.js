// JS để đảm bảo nhạc chơi (nếu trình duyệt chặn autoplay, có thể thêm event)
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.play().catch(() => {
        console.log('Autoplay bị chặn, người dùng cần tương tác.');
    });
});