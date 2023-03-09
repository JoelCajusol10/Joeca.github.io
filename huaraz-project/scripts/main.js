let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/ciudad.jpg') {
      miImage.setAttribute('src','images/huaraz.jpg');
    } else {
      miImage.setAttribute('src', 'images/ciudad.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'I love you, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'I love you,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}