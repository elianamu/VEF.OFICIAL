document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel-imagenes');
    const imagenes = document.querySelectorAll('.carrusel-imagen');
    const anteriorBtn = document.querySelector('.carrusel-anterior');
    const siguienteBtn = document.querySelector('.carrusel-siguiente');
    
    let currentIndex = 0;
    const imagenWidth = imagenes[0].clientWidth + 20; // Ancho de imagen + gap
    
    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentIndex * imagenWidth}px)`;
    }
    
    siguienteBtn.addEventListener('click', () => {
        if (currentIndex < imagenes.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al inicio si es la última imagen
        }
        updateCarrusel();
    });
    
    anteriorBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imagenes.length - 1; // Va al final si es la primera imagen
        }
        updateCarrusel();
    });
    
    // Opcional: Carrusel automático
    // setInterval(() => {
    //     siguienteBtn.click();
    // }, 3000);
});