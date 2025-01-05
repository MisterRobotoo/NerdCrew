const audio = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const playbackBox = document.getElementById('playbackBox');
const toggleBoxButton = document.getElementById('toggleBoxButton');

document.addEventListener('DOMContentLoaded', () => {
    playbackBox.style.display = 'none';
    toggleBoxButton.textContent = 'Show Controls';

    muteButton.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
    });

    toggleBoxButton.addEventListener('click', () => {
        const isHidden = playbackBox.style.display === 'none';
        playbackBox.style.display = isHidden ? 'block' : 'none';
        toggleBoxButton.textContent = isHidden ? 'Hide Controls' : 'Show Controls';
    });

    document.body.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.error('Unable to play audio:', error);
            });
        }
    }, { once: true });
});
