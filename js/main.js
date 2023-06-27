// Barra de navegación de iconos juntos
let menuIcon = document.querySelector('#icono-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
}

// Secciones de desplazamiento

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Activar enlaces de la barra de navegación
      navLinks.forEach(link => {
        link.classList.remove('activo');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
    }
  });

  // Encabezado fijo
  let header = document.querySelector('header');

  header.classList.toggle('encabezado', window.scrollY > 100);

  // eliminar el ícono de navbar y la barra de navegación cuando haga clic en los enlaces de la barra de navegación (desplazamiento)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('activo');
};
