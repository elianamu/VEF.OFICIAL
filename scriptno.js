document.addEventListener('DOMContentLoaded', function() {
    // Lógica para el modal de inicio de sesión
    const modal = document.getElementById('modal-inicio-sesion');
    const btnInicioSesion = document.getElementById('inicio-sesion-enlace');
    const spanCerrarModal = document.getElementsByClassName('cerrar-modal')[0];
    const bloqueCerrarSesion = document.getElementById('bloque-cerrar-sesion');
    const btnCerrarSesion = document.getElementById('cerrar-sesion');

    btnInicioSesion.onclick = function() {
        modal.style.display = 'block';
    }

    spanCerrarModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    btnCerrarSesion.onclick = function() {
        bloqueCerrarSesion.style.display = 'none';
    }

    // Lógica para los iconos de valores
    document.querySelectorAll('.icono-circulo').forEach(icono => {
        icono.addEventListener('click', () => {
            const textoNube = icono.getAttribute('data-texto');
            const nubeTexto = icono.querySelector('.nube-texto');
            nubeTexto.textContent = textoNube;
            nubeTexto.style.display = 'block';
        });
    });

    // Lógica para misión y visión
    const botonMision = document.querySelector('.boton-mision');
    const botonVision = document.querySelector('.boton-vision');
    const ventanaMision = document.getElementById('ventana-emergente-mision');
    const ventanaVision = document.getElementById('ventana-emergente-vision');
    const fondoOscuro = document.getElementById('fondo-oscuro');
    const cerrarEmergente = document.querySelectorAll('.cerrar-emergente');

    if (botonMision && ventanaMision) {
        botonMision.addEventListener('click', () => {
            ventanaMision.style.display = 'block';
            fondoOscuro.style.display = 'block';
        });
    }

    if (botonVision && ventanaVision) {
        botonVision.addEventListener('click', () => {
            ventanaVision.style.display = 'block';
            fondoOscuro.style.display = 'block';
        });
    }

    cerrarEmergente.forEach(boton => {
        boton.addEventListener('click', () => {
            ventanaMision.style.display = 'none';
            ventanaVision.style.display = 'none';
            fondoOscuro.style.display = 'none';
        });
    });
});
/*////////*/

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-abajo');
    
    // Añade clase cuando se reproduce
    video.addEventListener('play', function() {
        this.classList.add('playing');
    });
    
    // Remueve clase cuando se pausa
    video.addEventListener('pause', function() {
        this.classList.remove('playing');
    });
    
    // Efecto de carga mientras el video se carga
    video.addEventListener('waiting', function() {
        this.classList.add('loading');
    });
    
    video.addEventListener('canplay', function() {
        this.classList.remove('loading');
    });
});

