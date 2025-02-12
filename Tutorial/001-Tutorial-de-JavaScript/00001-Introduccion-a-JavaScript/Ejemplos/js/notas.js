let select_img = document.getElementById('imagen');
let boton = document.getElementById('boton');
boton.style.backgroundColor = "green";
boton.style.borderRadius = "75px";
boton.onclick = function() {
    cambiaImagen(this);
};

function cambiaImagen(argument) {
    console.log(argument);
    if (argument.style.backgroundColor == "red") {
        argument.style.backgroundColor = "green";
        imagen.src = "https://i.ibb.co/XxmD1XS/pic-bulboff.gif";
    } else if (argument.style.backgroundColor == "green") {
        argument.style.backgroundColor = "red";
        imagen.src = "https://i.ibb.co/mDXCqcL/pic-bulbon.gif";
    }
}