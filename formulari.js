document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const imagenInstitucion = document.querySelector('[data-tipo="institucion"]');
    const imagenPracticante = document.querySelector('[data-tipo="practicante"]');
    const modalInstitucion = document.getElementById('modal-institucion');
    const modalPracticante = document.getElementById('modal-practicante');
    const cerrarBtns = document.querySelectorAll('.cerrar');

    // Mostrar modal al hacer clic en la imagen de institución
    imagenInstitucion.addEventListener('click', function() {
        modalInstitucion.style.display = 'block';
    });

    // Mostrar modal al hacer clic en la imagen de practicante
    imagenPracticante.addEventListener('click', function() {
        modalPracticante.style.display = 'block';
    });

    // Cerrar modales al hacer clic en la X
    cerrarBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalInstitucion.style.display = 'none';
            modalPracticante.style.display = 'none';
        });
    });

    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modalInstitucion) {
            modalInstitucion.style.display = 'none';
        }
        if (event.target === modalPracticante) {
            modalPracticante.style.display = 'none';
        }
    });
});