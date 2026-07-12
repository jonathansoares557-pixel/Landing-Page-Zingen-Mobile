document.addEventListener('DOMContentLoaded', () => {
    const soundwave = document.getElementById('soundwave');
    if (!soundwave) return;

    const barCount = 48;
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('span');
        const height = 12 + Math.round(Math.random() * 48);
        bar.style.height = `${height}px`;
        bar.style.animationDelay = `${(Math.random() * 1.6).toFixed(2)}s`;
        soundwave.appendChild(bar);
    }
});
