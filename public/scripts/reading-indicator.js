document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.scrollable');
    const indicator = document.querySelector('.reading-indicator');
    const height = target.scrollHeight - target.clientHeight;

    target.addEventListener('scroll', () => {
        const percent = Math.floor(target.scrollTop / height * 100);

        indicator.style.width = percent + '%';
    })
})