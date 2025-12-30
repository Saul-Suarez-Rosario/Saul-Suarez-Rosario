// Lógica para música de fondo (Autoplay y control)
const audio = document.getElementById("musica-fondo");
const musicIcon = document.getElementById("music-icon");
const musicToggle = document.getElementById("music-toggle");

if (audio && musicIcon && musicToggle) {
    // Recuperar posición y estado del almacenamiento local
    const savedTime = localStorage.getItem('bgMusicTime');

    if (savedTime) {
        const time = parseFloat(savedTime);
        if (!isNaN(time)) {
            if (audio.readyState >= 1) {
                audio.currentTime = time;
            } else {
                audio.addEventListener('loadedmetadata', () => {
                    audio.currentTime = time;
                }, { once: true });
            }
        }
    }

    audio.volume = 0.1; // Volumen suave

    function updateIcon() {
        if (audio.paused) {
            musicIcon.classList.remove("fa-volume-high");
            musicIcon.classList.add("fa-volume-xmark");
        } else {
            musicIcon.classList.remove("fa-volume-xmark");
            musicIcon.classList.add("fa-volume-high");
        }
    }

    function saveAudioState() {
        localStorage.setItem('bgMusicTime', audio.currentTime);
    }

    window.addEventListener('beforeunload', saveAudioState);
    setInterval(saveAudioState, 1000); // Guardado periódico por seguridad

    // Función para activar audio en la primera interacción si el autoplay falla
    const playOnInteraction = () => {
        audio.play().then(() => {
            updateIcon();
        }).catch(error => {
            console.log("Autoplay prevenido por el navegador, esperando interacción.");
        });
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
    };

    // Intentar reproducir siempre al cargar
    audio.play().then(() => {
        updateIcon();
    }).catch(error => {
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
    });

    // Listener para el botón de música
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        if (audio.paused) audio.play();
        else audio.pause();
        updateIcon();
        saveAudioState();
    });
}