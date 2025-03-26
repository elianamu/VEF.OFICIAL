const inicioSesionEnlace = document.getElementById('inicio-sesion-enlace');
const modalInicioSesion = document.getElementById('modal-inicio-sesion');
const cerrarModal = document.querySelector('.cerrar-modal');
const formularioInicioSesion = document.getElementById('formulario-inicio-sesion');
const inicioSesionMenu = document.getElementById('inicio-sesion-menu');
const bloqueCerrarSesion = document.getElementById('bloque-cerrar-sesion');

let usuarioLogueado = null; // Variable para almacenar el usuario logueado

inicioSesionEnlace.addEventListener('click', function(event) {
    event.preventDefault();
    if (!usuarioLogueado) {
        modalInicioSesion.style.display = 'flex';
    } else {
        bloqueCerrarSesion.style.display = bloqueCerrarSesion.style.display === 'block' ? 'none' : 'block';
    }
});

cerrarModal.addEventListener('click', function() {
    modalInicioSesion.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalInicioSesion) {
        modalInicioSesion.style.display = 'none';
    }
    if (!event.target.closest('#inicio-sesion-menu')) {
        bloqueCerrarSesion.style.display = 'none';
    }
});

formularioInicioSesion.addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    usuarioLogueado = usuario;
    actualizarMenu();
    modalInicioSesion.style.display = 'none';
});

function actualizarMenu() {
    if (usuarioLogueado) {
        inicioSesionMenu.innerHTML = `<div class="contenedor-usuario"><a href="#">${usuarioLogueado}</a></div>`;
        const contenedorUsuario = document.querySelector('.contenedor-usuario');
        contenedorUsuario.appendChild(bloqueCerrarSesion);
        contenedorUsuario.addEventListener('click', function(event) {
            event.preventDefault();
            bloqueCerrarSesion.style.display = bloqueCerrarSesion.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        inicioSesionMenu.innerHTML = `<a href="#" id="inicio-sesion-enlace">Iniciar Sesión</a>`;
        inicioSesionEnlace = document.getElementById('inicio-sesion-enlace');
        inicioSesionEnlace.addEventListener('click', function(event) {
            event.preventDefault();
            modalInicioSesion.style.display = 'flex';
        });
    }
}

document.getElementById('cerrar-sesion').addEventListener('click', function(event) {
    event.preventDefault();
    cerrarSesion();
});

function cerrarSesion() {
    usuarioLogueado = null;
    actualizarMenu();
    bloqueCerrarSesion.style.display = 'none';
}


// Agrega esto a tu script.js
document.querySelectorAll('a[href="#contacto-final"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*//// */

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.carrusel-contenedor');
    const imagenes = document.querySelectorAll('.carrusel-imagen');
    let indiceActual = 0;
    const intervalo = 3000; // 3 segundos

    function deslizarSiguienteImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        contenedor.style.transform = `translateX(-${indiceActual * 100}%)`;
    }

    // Iniciar el carrusel automático
    setInterval(deslizarSiguienteImagen, intervalo);
});