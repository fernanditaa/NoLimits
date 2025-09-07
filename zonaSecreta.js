const playText = document.getElementById('playVideoText');
const video = document.getElementById('myVideo');

playText.addEventListener('click', () => {
    if (video.style.display === 'none' || video.style.display === '') {
        video.style.display = 'block'; // muestra el video
        video.play(); // inicia reproducción automáticamente
        playText.textContent = 'Haz click para ocultar el video';
    } else {
        video.style.display = 'none'; // oculta el video
        video.pause(); // pausa el video al ocultarlo
        video.currentTime = 0; // opcional: reinicia el video
        playText.textContent = 'Haz click para reproducir el video';
    }
});
